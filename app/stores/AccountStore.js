import BaseStore from "./BaseStore";
import Immutable from "immutable";
import alt from "alt-instance";
import AccountActions from "actions/AccountActions";
import SettingsActions from "actions/SettingsActions";
import iDB from "idb-instance";
import PrivateKeyStore from "./PrivateKeyStore";
import {ChainStore, ChainValidation, FetchChain} from "bitsharesjs/es";
import {Apis} from "bitsharesjs-ws";
import AccountRefsStore from "stores/AccountRefsStore";
import AddressIndex from "stores/AddressIndex";
import SettingsStore from "stores/SettingsStore";
import ls from "common/localStorage";

let accountStorage = new ls("__graphene__");

/**
 *  This Store holds information about accounts in this wallet
 *
 */

class AccountStore extends BaseStore {
    constructor() {
        super();
        this.state = this._getInitialState();

        this.bindListeners({
            onSetCurrentAccount: AccountActions.setCurrentAccount,
            onCreateAccount: AccountActions.createAccount,
            onLinkAccount: AccountActions.linkAccount,
            onUnlinkAccount: AccountActions.unlinkAccount,
            onAccountSearch: AccountActions.accountSearch,
            tryToSetCurrentAccount: AccountActions.tryToSetCurrentAccount,
            onSetPasswordAccount: AccountActions.setPasswordAccount,
            onChangeSetting: SettingsActions.changeSetting
            // onNewPrivateKeys: [ PrivateKeyActions.loadDbData, PrivateKeyActions.addKey ]
        });

        this._export(
            "loadDbData",
            "tryToSetCurrentAccount",
            "onCreateAccount",
            "getMyAccounts",
            "isMyAccount",
            "getMyAuthorityForAccount",
            "isMyKey"
        );

        this.getMyAccounts = this.getMyAccounts.bind(this);
    }

    _getInitialState() {
        this.account_refs = null;
        this.initial_account_refs_load = true; // true until all undefined accounts are found
        let referralAccount = "";
        if (window) {
            function getQueryParam(param) {
                var result =  window.location.search.match(
                    new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
                );

                return result ? result[3] : false;
            }
            let validQueries = ["r", "ref", "referrer", "referral"];
            for (let i = 0; i < validQueries.length; i++) {
                referralAccount = getQueryParam(validQueries[i]);
                if (referralAccount) break;
            }
        }
        if (referralAccount) {
            accountStorage.set("referralAccount", referralAccount); // Reset to empty string when the user returns with no ref code
        } else {
            accountStorage.remove("referralAccount");
        }

        return {
            update: false,
            subbed: false,
            accountsLoaded: false,
            refsLoaded: false,
            currentAccount: null,
            referralAccount: accountStorage.get("referralAccount", ""),
            passwordAccount: accountStorage.get(this._getCurrentAccountKey("passwordAccount"), ""),
            linkedAccounts: Immutable.Set(),
            myIgnoredAccounts: Immutable.Set(),
            unFollowedAccounts: Immutable.Set(accountStorage.get("unfollowed_accounts", [])),
            searchAccounts: Immutable.Map(),
            searchTerm: ""
        };
    }

    onSetPasswordAccount(account) {
        let key = this._getCurrentAccountKey("passwordAccount");
        if (!account) {
            accountStorage.remove(key);
        } else {
            accountStorage.set(key, account);
        }
        this.setState({
            passwordAccount: account
        });
    }

    _addIgnoredAccount(name) {
        if (this.state.unFollowedAccounts.includes(name) && !this.state.myIgnoredAccounts.has(name)) {
            this.state.myIgnoredAccounts = this.state.myIgnoredAccounts.add(name);
        }
    }

    loadDbData() {
        let linkedAccounts = Immutable.Set().asMutable();
        let chainId = Apis.instance().chain_id;

        return new Promise((resolve, reject) => {
            iDB.load_data("linked_accounts")
            .then(data => {
                let accountPromises = data.filter(a => {
                    if (a.chainId) {
                        return a.chainId === chainId;
                    } else {
                        return true;
                    }
                }).map(a => {
                    linkedAccounts.add(a.name);
                    this._addIgnoredAccount(a.name);
                    return FetchChain("getAccount", a.name);
                });

                this.setState({
                    linkedAccounts: linkedAccounts.asImmutable(),
                    accountsLoaded: true
                });
                Promise.all(accountPromises).then(() => {
                    ChainStore.subscribe(this.chainStoreUpdate.bind(this));
                    this.chainStoreUpdate();
                    this.setState({
                        subbed: true
                    });
                    resolve();
                }).catch(err => {
                    ChainStore.subscribe(this.chainStoreUpdate.bind(this));
                    this.chainStoreUpdate();
                    this.setState({
                        subbed: true
                    });
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });
        });

    }

    chainStoreUpdate() {
        this.addAccountRefs();
    }

    addAccountRefs() {
        //  Simply add them to the linkedAccounts list (no need to persist them)
        let account_refs = AccountRefsStore.getState().account_refs;
        if( ! this.initial_account_refs_load && this.account_refs === account_refs) {
            return this.setState({refsLoaded: true});
        }
        this.account_refs = account_refs;
        let pending = false;
        this.state.linkedAccounts = this.state.linkedAccounts.withMutations(linkedAccounts => {
            account_refs.forEach(id => {
                let account = ChainStore.getAccount(id);
                if (account === undefined) {
                    pending = true;
                    return;
                }
                if (account && !this.state.unFollowedAccounts.includes(account.get("name"))) {
                    linkedAccounts.add(account.get("name"));
                } else {
                    this._addIgnoredAccount(account.get("name"));
                }
            });
        });
        // console.log("AccountStore addAccountRefs linkedAccounts",this.state.linkedAccounts.size);
        this.setState({ linkedAccounts: this.state.linkedAccounts });
        this.initial_account_refs_load = pending;
        this.tryToSetCurrentAccount();
    }

    getMyAccounts() {
        if (!this.state.subbed) {
            return [];
        }

        let accounts = [];
        for(let account_name of this.state.linkedAccounts) {
            let account = ChainStore.getAccount(account_name);
            if(account === undefined) {
                // console.log(account_name, "account undefined");
                continue;
            }
            if(account == null) {
                console.log("WARN: non-chain account name in linkedAccounts", account_name);
                continue;
            }
            let auth = this.getMyAuthorityForAccount(account);

            if(auth === undefined) {
                // console.log(account_name, "auth undefined");
                continue;
            }

            if(auth === "full" || auth === "partial") {
                accounts.push(account_name);
            }

            // console.log("account:", account_name, "auth:", auth);
        }
        if (this.state.passwordAccount && accounts.indexOf(this.state.passwordAccount) === -1) accounts.push(this.state.passwordAccount);
        // console.log("accounts:", accounts, "linkedAccounts:", this.state.linkedAccounts && this.state.linkedAccounts.toJS());
        return accounts.sort();
    }

    /**
        @todo "partial"
        @return string "none", "full", "partial" or undefined (pending a chain store lookup)
    */
    getMyAuthorityForAccount(account, recursion_count = 1) {
        if (! account) return undefined;

        let owner_authority = account.get("owner");
        let active_authority = account.get("active");

        let owner_pubkey_threshold = pubkeyThreshold(owner_authority);
        if(owner_pubkey_threshold == "full") return "full";
        let active_pubkey_threshold = pubkeyThreshold(active_authority);
        if(active_pubkey_threshold == "full") return "full";

        let owner_address_threshold = addressThreshold(owner_authority);
        if(owner_address_threshold == "full") return "full";
        let active_address_threshold = addressThreshold(active_authority);
        if(active_address_threshold == "full") return "full";

        let owner_account_threshold, active_account_threshold;

        // if (account.get("name") === "secured-x") {
        //     debugger;
        // }
        if(recursion_count < 3) {
            owner_account_threshold = this._accountThreshold(owner_authority, recursion_count);
            if ( owner_account_threshold === undefined ) return undefined;
            if(owner_account_threshold == "full") return "full";

            active_account_threshold = this._accountThreshold(active_authority, recursion_count);
            if ( active_account_threshold === undefined ) return undefined;
            if(active_account_threshold == "full") return "full";
        }

        if(
            owner_pubkey_threshold === "partial" || active_pubkey_threshold === "partial" ||
            owner_address_threshold === "partial" || active_address_threshold === "partial" ||
            owner_account_threshold === "partial" || active_account_threshold === "partial"
        ) return "partial";
        return "none";
    }

    _accountThreshold(authority, recursion_count) {
        let account_auths = authority.get("account_auths");
        if( ! account_auths.size ) return "none";

        let auths = account_auths.map(auth => {
            let account = ChainStore.getAccount(auth.get(0));
            if(account === undefined) return undefined;
            return this.getMyAuthorityForAccount(account, ++recursion_count);
        });

        let final = auths.reduce((map, auth) => {
            return map.set(auth, true);
        }, Immutable.Map());

        return final.get("full") && final.size === 1 ? "full" :
               final.get("partial") && final.size === 1 ? "partial" :
               final.get("none") && final.size === 1 ? "none" :
               final.get("full") || final.get("partial") ? "partial" :
               undefined;
    }

    isMyAccount(account) {
        let authority = this.getMyAuthorityForAccount(account);
        if( authority === undefined ) return undefined;
        return authority === "partial" || authority === "full";
    }

    onAccountSearch(payload) {
        this.state.searchTerm = payload.searchTerm;
        this.state.searchAccounts = this.state.searchAccounts.clear();
        payload.accounts.forEach(account => {
            this.state.searchAccounts = this.state.searchAccounts.withMutations(map => {
                map.set(account[1], account[0]);
            });
        });
    }

    _getCurrentAccountKey(key = "currentAccount") {
        const chainId = Apis.instance().chain_id;
        return key + (chainId ? `_${chainId.substr(0, 8)}` : "");
    }

    tryToSetCurrentAccount() {
        const passwordAccountKey = this._getCurrentAccountKey("passwordAccount");
        const key = this._getCurrentAccountKey();
        if (accountStorage.has(passwordAccountKey)) {
            const acc = accountStorage.get(passwordAccountKey, null);
            this.setState({passwordAccount: acc});
            return this.setCurrentAccount(acc);
        } else if (accountStorage.has(key)) {
            return this.setCurrentAccount(accountStorage.get(key, null));
        }

        let {starredAccounts} = SettingsStore.getState();
        if (starredAccounts.size) {
            return this.setCurrentAccount(starredAccounts.first().name);
        }
        if (this.state.linkedAccounts.size) {
            return this.setCurrentAccount(this.state.linkedAccounts.first());
        }
    }

    setCurrentAccount(name) {
        if (this.state.passwordAccount) name = this.state.passwordAccount;
        const key = this._getCurrentAccountKey();
        if (!name) {
            this.state.currentAccount = null;
        } else {
            this.state.currentAccount = name;
        }

        accountStorage.set(key, this.state.currentAccount);
    }

    onSetCurrentAccount(name) {
        this.setCurrentAccount(name);
    }

    onCreateAccount(name_or_account) {
        let account = name_or_account;
        if (typeof account === "string") {
            account = {
                name: account
            };
        }

        if(account["toJS"])
            account = account.toJS();

        if(account.name == "" || this.state.linkedAccounts.get(account.name))
            return Promise.resolve();

        if( ! ChainValidation.is_account_name(account.name))
            throw new Error("Invalid account name: " + account.name);

        return iDB.add_to_store("linked_accounts", {
            name: account.name,
            chainId: Apis.instance().chain_id
        }).then(() => {
            console.log("[AccountStore.js] ----- Added account to store: ----->", account.name);
            this.state.linkedAccounts = this.state.linkedAccounts.add(account.name);
            if (this.state.linkedAccounts.size === 1) {
                this.setCurrentAccount(account.name);
            }
        });
    }

    onLinkAccount(name) {
        if( ! ChainValidation.is_account_name(name, true))
            throw new Error("Invalid account name: " + name);

        // Link
        iDB.add_to_store("linked_accounts", {
            name,
            chainId: Apis.instance().chain_id
        });
        this.state.linkedAccounts = this.state.linkedAccounts.add(name);

        // remove from unFollow
        this.state.unFollowedAccounts = this.state.unFollowedAccounts.delete(name);
        this.state.myIgnoredAccounts = this.state.myIgnoredAccounts.delete(name);
        accountStorage.set("unfollowed_accounts", this.state.unFollowedAccounts);

        // Update current account if only one account is linked
        if (this.state.linkedAccounts.size === 1) {
            this.setCurrentAccount(name);
        }
    }

    onUnlinkAccount(name) {
        if( ! ChainValidation.is_account_name(name, true))
            throw new Error("Invalid account name: " + name);

        // Unlink
        iDB.remove_from_store("linked_accounts", name);
        this.state.linkedAccounts = this.state.linkedAccounts.delete(name);

        // Add to unFollow
        this.state.unFollowedAccounts = this.state.unFollowedAccounts.add(name);
        this._addIgnoredAccount(name);
        // Limit to maxEntries accounts
        let maxEntries = 50;
        if (this.state.unFollowedAccounts.size > maxEntries) {
            this.state.unFollowedAccounts = this.state.unFollowedAccounts.takeLast(maxEntries);
        }

        accountStorage.set("unfollowed_accounts", this.state.unFollowedAccounts);

        // Update current account if no accounts are linked
        if (this.state.linkedAccounts.size === 0) {
            this.setCurrentAccount(null);
        } else {
            this.setCurrentAccount(this.state.linkedAccounts.first());
        }
    }

    checkAccountRefs() {
        //  Simply add them to the linkedAccounts list (no need to persist them)
        let account_refs = AccountRefsStore.getState().account_refs;

        account_refs.forEach(id => {
            let account = ChainStore.getAccount(id);
            if (account === undefined) {
                return;
            }
            if (account) {
                this._addIgnoredAccount(account.get("name"));
            }
        });
    }

    isMyKey(key) {
        return PrivateKeyStore.hasKey(key);
    }

    onChangeSetting(payload) {
        if (payload.setting === "passwordLogin" && payload.value === false) {
            this.onSetPasswordAccount(null);
            accountStorage.remove(this._getCurrentAccountKey());
        }
    }
}

export default alt.createStore(AccountStore, "AccountStore");

// @return 3 full, 2 partial, 0 none
function pubkeyThreshold(authority) {
    let available = 0;
    let required = authority.get("weight_threshold");
    let key_auths = authority.get("key_auths");
    for (let k of key_auths) {
        if (PrivateKeyStore.hasKey(k.get(0))) {
            available += k.get(1);
        }
        if(available >= required) break;
    }
    return available >= required ? "full" : available > 0 ? "partial" : "none";
}

// @return 3 full, 2 partial, 0 none
function addressThreshold(authority) {
    let available = 0;
    let required = authority.get("weight_threshold");
    let address_auths = authority.get("address_auths");
    if( ! address_auths.size) return "none";
    let addresses = AddressIndex.getState().addresses;
    for (let k of address_auths) {
        let address = k.get(0);
        let pubkey = addresses.get(address);
        if (PrivateKeyStore.hasKey(pubkey)) {
            available += k.get(1);
        }
        if(available >= required) break;
    }
    return available >= required ? "full" : available > 0 ? "partial" : "none";
}
