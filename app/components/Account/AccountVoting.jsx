import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import accountUtils from "common/account_utils";
import WalletApi from "api/WalletApi";
import WalletDb from "stores/WalletDb.js";
import {ChainStore, FetchChainObjects} from "bitsharesjs/es";
import WorkerApproval from "./WorkerApproval";
import AccountVotingProxy from "./AccountVotingProxy";
import VotingAccountsList from "./VotingAccountsList";
import HelpContent from "../Utility/HelpContent";
import cnames from "classnames";
import {Tabs, Tab} from "../Utility/Tabs";
import FormattedAsset from "../Utility/FormattedAsset";
import BindToChainState from "../Utility/BindToChainState";
import ChainTypes from "../Utility/ChainTypes";
import {EquivalentValueComponent} from "../Utility/EquivalentValueComponent";
import {Link} from "react-router";

let wallet_api = new WalletApi();

class AccountVoting extends React.Component {

    static propTypes = {
        initialBudget: ChainTypes.ChainObject.isRequired,
        globalObject: ChainTypes.ChainObject.isRequired,
        dynamicGlobal: ChainTypes.ChainObject.isRequired
    };

    static defaultProps = {
        initialBudget: "2.13.1",
        globalObject: "2.0.0",
        dynamicGlobal: "2.1.0"
    };

    constructor(props) {
        super(props);
        this.state = {
            proxy_account_id: "",//"1.2.16",
            witnesses: null,
            committee: null,
            vote_ids: Immutable.Set(),
            lastBudgetObject: null,
            showExpired: false,
            all_witnesses: Immutable.List(),
            all_committee: Immutable.List()
        };
        this.onProxyAccountChange = this.onProxyAccountChange.bind(this);
        this.onPublish = this.onPublish.bind(this);
        this.onReset = this.onReset.bind(this);
        this._onUpdate = this._onUpdate.bind(this);
        this._getVoteObjects = this._getVoteObjects.bind(this);
    }

    componentWillUnmount() {
        ChainStore.unsubscribe(this._onUpdate);
    }

    _onUpdate() {
        this.forceUpdate();
    }

    updateAccountData(account) {
        let options = account.get("options");
        let proxy_account_id = options.get("voting_account");
        if (proxy_account_id === "1.2.5" ) {
            proxy_account_id = "";
        }

        let votes = options.get("votes");
        let vote_ids = votes.toArray();
        let vids = Immutable.Set( vote_ids );
        ChainStore.getObjectsByVoteIds(vote_ids);
        FetchChainObjects(ChainStore.getObjectByVoteID, vote_ids, 5000).then(vote_objs => {
            //console.log( "Vote Objs: ", vote_objs );
            let witnesses = new Immutable.List();
            let committee = new Immutable.List();
            let workers = new Immutable.Set();
            vote_objs.forEach( obj => {
                let account_id = obj.get("committee_member_account");
                if (account_id) {
                    committee = committee.push(account_id);
                } else if( account_id = obj.get( "worker_account" ) ) {
                   // console.log( "worker: ", obj );
               //     workers = workers.add(obj.get("id"));
                } else if( account_id = obj.get("witness_account") ) {
                    witnesses = witnesses.push(account_id);
                }
            });
            let state = {
                proxy_account_id: proxy_account_id,
                witnesses: witnesses,
                committee: committee,
                workers: workers,
                vote_ids: vids,
                prev_proxy_account_id: proxy_account_id,
                prev_witnesses: witnesses,
                prev_committee: committee,
                prev_workers: workers,
                prev_vote_ids : vids
            };
            this.setState(state);
        });
    }

    isChanged() {
        let s = this.state;
        return s.proxy_account_id !== s.prev_proxy_account_id ||
               s.witnesses !== s.prev_witnesses ||
               s.committee !== s.prev_committee ||
               !Immutable.is(s.vote_ids, s.prev_vote_ids);
    }

    componentWillMount() {
        this.updateAccountData(this.props.account);
        accountUtils.getFinalFeeAsset(this.props.account, "account_update");
        this.getBudgetObject();
        ChainStore.subscribe(this._onUpdate);
    }

    componentDidMount() {
        this.getBudgetObject();
        this._getVoteObjects();
        this._getVoteObjects("committee");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.account !== this.props.account) {
            this.updateAccountData(nextProps.account);
        }
        this.getBudgetObject();
    }

    _getVoteObjects(type = "witnesses", vote_ids) {
        let current = this.state[`all_${type}`];
        const isWitness = type === "witnesses";
        let lastIdx;
        if (!vote_ids) {
            vote_ids = [];
            let active = this.props.globalObject.get(isWitness ? "active_witnesses" : "active_committee_members");
            const lastActive = active.last() || `1.${isWitness ? "6" : "5"}.1`;
            lastIdx = parseInt(lastActive.split(".")[2], 10);
            for (var i = 1; i <= lastIdx + 10; i++) {
                vote_ids.push(`1.${isWitness ? "6" : "5"}.${i}`);
            }
        } else {
            lastIdx = parseInt(vote_ids[vote_ids.length - 1].split(".")[2], 10);
        }
        FetchChainObjects(ChainStore.getObject, vote_ids, 5000, {}).then(vote_objs => {
            this.state[`all_${type}`] = current.concat(Immutable.List(vote_objs.filter(a => !!a).map(a => a.get(isWitness ? "witness_account" : "committee_member_account"))));
            if (!!vote_objs[vote_objs.length - 1]) { // there are more valid vote objs, fetch more
                vote_ids = [];
                for (var i = lastIdx + 11; i <= lastIdx + 20; i++) {
                    vote_ids.push(`1.${isWitness ? "6" : "5"}.${i}`);
                }
                return this._getVoteObjects(type, vote_ids);
            }
            this.forceUpdate();
        });
    }

    onPublish() {
        let updated_account = this.props.account.toJS();
        let updateObject = {account: updated_account.id};
        let new_options = {memo_key: updated_account.options.memo_key};
        // updated_account.new_options = updated_account.options;
        let new_proxy_id = this.state.proxy_account_id;
        new_options.voting_account = new_proxy_id ? new_proxy_id : "1.2.5";
        new_options.num_witness = this.state.witnesses.size;
        new_options.num_committee = this.state.committee.size;

        updateObject.new_options = new_options;
        // Set fee asset
        updateObject.fee = {
            amount: 0,
            asset_id: accountUtils.getFinalFeeAsset(updated_account.id, "account_update")
        };

        // Remove votes for expired workers
        let {vote_ids} = this.state;
        let workers = this._getWorkerArray();
        let now = new Date();

        function removeVote(list, vote) {
            if (list.includes(vote)) {
                list = list.delete(vote);
            }
            return list;
        }

        workers.forEach(worker => {
            if (worker) {
                if (new Date(worker.get("work_end_date")) <= now) {
                    vote_ids = removeVote(vote_ids, worker.get("vote_for"));
                }

                // TEMP Remove vote_against since they're no longer used
                vote_ids = removeVote(vote_ids, worker.get("vote_against"));
            }
        });


        // Submit votes
        FetchChainObjects(ChainStore.getWitnessById, this.state.witnesses.toArray(), 4000).then( res => {
            let witnesses_vote_ids = res.map(o => o.get("vote_id"));
            return Promise.all([Promise.resolve(witnesses_vote_ids), FetchChainObjects(ChainStore.getCommitteeMemberById, this.state.committee.toArray(), 4000)]);
        }).then( res => {
            updateObject.new_options.votes = res[0]
                .concat(res[1].map(o => o.get("vote_id")))
                .concat(vote_ids.filter( id => {
                    return id.split(":")[0] === "2";
                }).toArray())
                .sort((a, b) => {
                    let a_split = a.split(":");
                    let b_split = b.split(":");

                    return parseInt(a_split[1], 10) - parseInt(b_split[1], 10);
                });
            var tr = wallet_api.new_transaction();
            tr.add_type_operation("account_update", updateObject);
            WalletDb.process_transaction(tr, null, true);
        });
    }

    onReset() {
        let s = this.state;
        if (this.refs.voting_proxy && this.refs.voting_proxy.refs.bound_component) this.refs.voting_proxy.refs.bound_component.onResetProxy();
        this.setState({
            proxy_account_id: s.prev_proxy_account_id,
            witnesses: s.prev_witnesses,
            committee: s.prev_committee,
            workers: s.prev_workers,
            vote_ids: s.prev_vote_ids
        }, () => {
            this.updateAccountData(this.props.account);
        });
    }

    onAddItem(collection, item_id){
        let state = {};
        state[collection] = this.state[collection].push(item_id);
        this.setState(state);
    }

    onRemoveItem(collection, item_id){
        let state = {};
        state[collection] = this.state[collection].filter(i => i !== item_id);
        this.setState(state);
    }

    onChangeVotes( addVotes, removeVotes) {
        let state = {};
        state.vote_ids = this.state.vote_ids;
        if (addVotes.length) {
            addVotes.forEach(vote => {
                state.vote_ids = state.vote_ids.add(vote);
            });

        }
        if (removeVotes) {
            removeVotes.forEach(vote => {
                state.vote_ids = state.vote_ids.delete(vote);
            });
        }

        this.setState(state);
    }

    onProxyAccountChange(proxy_account) {
        this.setState({
            proxy_account_id: proxy_account ? proxy_account.get("id") : ""
        });
    }

    validateAccount(collection, account) {
        if(!account) return null;
        if(collection === "witnesses") {
            return FetchChainObjects(ChainStore.getWitnessById, [account.get("id")], 3000).then(res => {
                return res[0] ? null : "Not a witness";
            });
        }
        if(collection === "committee") {
            return FetchChainObjects(ChainStore.getCommitteeMemberById, [account.get("id")], 3000).then(res => {
                return res[0] ? null : "Not a committee member";
            });
        }
        return null;
    }

    onClearProxy() {
        this.setState({
            proxy_account_id: ""
        });
    }

    _getTotalVotes(worker) {
        return parseInt(worker.get("total_votes_for"), 10) - parseInt(worker.get("total_votes_against"), 10);
    }

    getBudgetObject() {
        let {lastBudgetObject} = this.state;
        let budgetObject;

        budgetObject = ChainStore.getObject(lastBudgetObject ? lastBudgetObject : "2.13.1");
        if (budgetObject) {
            let timestamp = budgetObject.get("time");
            let now = new Date();

            let idIndex = parseInt(budgetObject.get("id").split(".")[2], 10);
            let currentID = idIndex + Math.floor((now - new Date(timestamp + "+00:00").getTime()) / 1000 / 60 / 60) - 1;
            let newID = "2.13." + Math.max(idIndex, currentID);

            ChainStore.getObject(newID);

            this.setState({lastBudgetObject: newID});
            if (newID !== currentID) {
                this.forceUpdate();
            }
        } else {
            if (lastBudgetObject !== "2.13.1") {
                let newBudgetObjectId = parseInt(lastBudgetObject.split(".")[2], 10) - 1;
                this.setState({
                    lastBudgetObject: "2.13." + (newBudgetObjectId - 1)
                });
            }
        }
    }

    _toggleExpired() {
        this.setState({
            showExpired: !this.state.showExpired
        });
    }

    _getWorkerArray() {
        let workerArray = [];

        for (let i = 0; i < 100; i++) {
            let id = "1.14." + i;
            let worker = ChainStore.getObject(id, false, false);
            if (worker === null) {
                break;
            }
            workerArray.push(worker);
        };

        return workerArray;
    }

    render() {
        let preferredUnit = this.props.settings.get("unit") || "1.3.0";
        let proxy_is_set = this.props.account.getIn(["options", "voting_account"]) !== "1.2.5";
        let publish_buttons_class = cnames("button", {disabled : !this.isChanged()});

        let {globalObject} = this.props;
        let {showExpired} = this.state;

        let budgetObject;
        if (this.state.lastBudgetObject) {
            budgetObject = ChainStore.getObject(this.state.lastBudgetObject);
        }

        let totalBudget = 0;
        let unusedBudget = 0;
        let workerBudget = globalObject ? parseInt(globalObject.getIn(["parameters", "worker_budget_per_day"]), 10) : 0;

        if (budgetObject) {
            workerBudget = Math.min(24 * budgetObject.getIn(["record", "worker_budget"]), workerBudget);
            totalBudget = Math.min(24 * budgetObject.getIn(["record", "worker_budget"]), workerBudget);
        }

        let now = new Date();
        let workerArray = this._getWorkerArray();

        let workers = workerArray
        .filter(a => {
            if (!a) {
                return false;
            }

            return (
                new Date(a.get("work_end_date")) > now &&
                new Date(a.get("work_begin_date")) <= now
            );

        })
        .sort((a, b) => {
            return this._getTotalVotes(b) - this._getTotalVotes(a);
        })
        .map((worker, index) => {
            let dailyPay = parseInt(worker.get("daily_pay"), 10);
            workerBudget = workerBudget - dailyPay;

            return (
                <WorkerApproval
                    preferredUnit={preferredUnit}
                    rest={workerBudget + dailyPay}
                    rank={index + 1}
                    key={worker.get("id")}
                    worker={worker.get("id")}
                    vote_ids={this.state.vote_ids}
                    onChangeVotes={this.onChangeVotes.bind(this)}
                />
            );
        });

        unusedBudget = Math.max(0, workerBudget);

        let newWorkers = workerArray
        .filter(a => {
            if (!a) {
                return false;
            }

            return (
                new Date(a.get("work_begin_date")) >= now
            );

        })
        .sort((a, b) => {
            return this._getTotalVotes(b) - this._getTotalVotes(a);
        })
        .map((worker, index) => {
            let dailyPay = parseInt(worker.get("daily_pay"), 10);
            workerBudget = workerBudget - dailyPay;

            return (
                <WorkerApproval
                    preferredUnit={preferredUnit}
                    rest={workerBudget + dailyPay}
                    rank={index + 1}
                    key={worker.get("id")}
                    worker={worker.get("id")}
                    vote_ids={this.state.vote_ids}
                    onChangeVotes={this.onChangeVotes.bind(this)}
                />
            );
        });

        let expiredWorkers = workerArray
        .filter(a => {
            if (!a) {
                return false;
            }

            return (
                new Date(a.get("work_end_date")) <= now
            );

        })
        .sort((a, b) => {
            return this._getTotalVotes(b) - this._getTotalVotes(a);
        })
        .map((worker, index) => {
            let dailyPay = parseInt(worker.get("daily_pay"), 10);
            workerBudget = workerBudget - dailyPay;

            return (
                <WorkerApproval
                    preferredUnit={preferredUnit}
                    rest={workerBudget + dailyPay}
                    rank={index + 1}
                    key={worker.get("id")}
                    worker={worker.get("id")}
                    vote_ids={this.state.vote_ids}
                    onChangeVotes={this.onChangeVotes.bind(this)}
                />
            );
        });

        return (
            <div className="grid-content">
                <HelpContent style={{maxWidth: "800px"}} path="components/AccountVoting" />

                <div className="content-block">
                    <button className={cnames(publish_buttons_class, {success: this.isChanged()})} onClick={this.onPublish} tabIndex={4}>
                        <Translate content="account.votes.publish"/>
                    </button>
                    <button className={"button outline " + publish_buttons_class} onClick={this.onReset} tabIndex={8}>
                        <Translate content="account.perm.reset"/>
                    </button>
                </div>

                <Tabs setting="votingTab" tabsClass="no-padding bordered-header" contentClass="grid-content no-padding">

                        <Tab title="account.votes.proxy_short">
                            <div className="content-block">
                                <HelpContent style={{maxWidth: "800px"}} path="components/AccountVotingProxy" />
                                <AccountVotingProxy
                                    ref="voting_proxy"
                                    existingProxy={this.props.account.getIn(["options", "voting_account"])}
                                    account={this.props.account}
                                    onProxyAccountChanged={this.onProxyAccountChange}
                                    onClearProxy={this.onClearProxy.bind(this)}
                                />
                            </div>
                        </Tab>

                        <Tab title="explorer.witnesses.title">
                            <div className={cnames("content-block", {disabled : proxy_is_set})}>
                                <HelpContent style={{maxWidth: "800px"}} path="components/AccountVotingWitnesses" />
                                <VotingAccountsList
                                    type="witness"
                                    label="account.votes.add_witness_label"
                                    items={this.state.all_witnesses}
                                    validateAccount={this.validateAccount.bind(this, "witnesses")}
                                    onAddItem={this.onAddItem.bind(this, "witnesses")}
                                    onRemoveItem={this.onRemoveItem.bind(this, "witnesses")}
                                    tabIndex={proxy_is_set ? -1 : 2}
                                    supported={this.state.witnesses}
                                    withSelector={false}
                                    active={globalObject.get("active_witnesses")}
                                />
                            </div>
                        </Tab>

                        <Tab title="explorer.committee_members.title">
                            <div className={cnames("content-block", {disabled : proxy_is_set})}>
                                <HelpContent style={{maxWidth: "800px"}} path="components/AccountVotingCommittee" />
                                <VotingAccountsList
                                    type="committee"
                                    label="account.votes.add_committee_label"
                                    items={this.state.all_committee}
                                    validateAccount={this.validateAccount.bind(this, "committee")}
                                    onAddItem={this.onAddItem.bind(this, "committee")}
                                    onRemoveItem={this.onRemoveItem.bind(this, "committee")}
                                    tabIndex={proxy_is_set ? -1 : 3}
                                    supported={this.state.committee}
                                    withSelector={false}
                                    active={globalObject.get("active_committee_members")}
                                />
                            </div>
                        </Tab>

                        <Tab title="account.votes.workers_short">

                            <div className={cnames("content-block")}>
                                <HelpContent style={{maxWidth: "800px"}} path="components/AccountVotingWorkers" />

                                <div style={{paddingBottom: 20}}>
                                    <Link to="/create-worker"><div className="button">Create a new worker</div></Link>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Translate content="account.votes.total_budget" />:</td>
                                            <td style={{paddingLeft: 20, textAlign: "right"}}>
                                                &nbsp;{globalObject ? <FormattedAsset amount={totalBudget} asset="1.3.0" decimalOffset={5}/> : null}
                                                <span>&nbsp;({globalObject ? <EquivalentValueComponent fromAsset="1.3.0" toAsset={preferredUnit} amount={totalBudget}/> : null})</span>
                                            </td></tr>
                                        <tr><td><Translate content="account.votes.unused_budget" />:</td><td style={{paddingLeft: 20, textAlign: "right"}}> {globalObject ? <FormattedAsset amount={unusedBudget} asset="1.3.0" decimalOffset={5}/> : null}</td></tr>
                                    </tbody>
                                </table>
                                <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th><Translate content="account.user_issued_assets.description" /></th>
                                        <th className="hide-column-small"><Translate content="account.votes.creator" /></th>
                                        <th className="hide-column-small"><Translate content="account.votes.total_votes" /></th>
                                        <th className="hide-column-small">
                                            <Translate content="account.votes.daily_pay" />
                                            <div style={{paddingTop: 5, fontSize: "0.8rem"}}>(<Translate content="account.votes.daily" />)</div>
                                        </th>
                                        <th className="hide-column-large">
                                            <div><Translate content="account.votes.unclaimed" /></div>
                                            <div style={{paddingTop: 5, fontSize: "0.8rem"}}>(<Translate content="account.votes.recycled" />)</div>
                                            </th>
                                        <th className="hide-column-small"><Translate content="account.votes.funding" /></th>
                                        <th></th>
                                        <th><Translate content="account.votes.status.title" /> </th>
                                    </tr>
                                </thead>
                                {newWorkers.length ? (
                                <tbody>
                                    <tr><td colSpan="5"><Translate component="h4" content="account.votes.new" /></td></tr>
                                    {newWorkers}
                                    <tr><td colSpan="5"><Translate component="h4" content="account.votes.active" /></td></tr>
                                </tbody>
                                ) : null}
                                <tbody>
                                    {workers}
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td colSpan="3">
                                            <div className="inline-block"><Translate component="h4" content="account.votes.expired" /></div>
                                            <span>&nbsp;&nbsp;
                                                <button onClick={this._toggleExpired.bind(this)} className="button outline small">
                                                    {showExpired ? <Translate content="exchange.hide" />: <Translate content="account.perm.show" />}
                                                </button>
                                            </span>

                                        </td>
                                    </tr>
                                    {showExpired ? expiredWorkers : null}
                                </tbody>
                            </table>
                            </div>
                        </Tab>
                </Tabs>
            </div>
        );
    }
}

export default BindToChainState(AccountVoting);
