import React from "react";
import PropTypes from "prop-types";
import {connect} from "alt-react";
import AccountStore from "stores/AccountStore";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import {ChainStore, key} from "bitsharesjs/es";
import ReactTooltip from "react-tooltip";
import utils from "common/utils";
import SettingsActions from "actions/SettingsActions";
import PasswordInput from "components/Forms/PasswordInput";
import WalletDb from "stores/WalletDb";
import AccountNameInput from "./../Forms/AccountNameInput";
import AccountSelect from "../Forms/AccountSelect";
import LoadingIndicator from "../LoadingIndicator";
import Icon from "../Icon/Icon";

class AccountRegistrationForm extends React.Component {
    static propTypes = {
        continue: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            validAccountName: false,
            accountName: "",
            validPassword: false,
            registrarAccount: null,
            loading: false,
            generatedPassword: `P${key.get_random_key().toWif()}`
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onRegistrarAccountChange = this.onRegistrarAccountChange.bind(
            this
        );
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onAccountNameChange = this.onAccountNameChange.bind(this);
        this.accountNameInput = null;
    }

    componentWillMount() {
        SettingsActions.changeSetting({
            setting: "passwordLogin",
            value: true
        });
    }

    componentDidMount() {
        ReactTooltip.rebuild();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !utils.are_equal_shallow(nextState, this.state);
    }

    onAccountNameChange(e) {
        const state = {};
        if (e.valid !== undefined) {
            state.validAccountName = e.valid;
        }
        if (e.value !== undefined) {
            state.accountName = e.value;
        }
        this.setState(state);
    }

    onRegistrarAccountChange(registrarAccount) {
        this.setState({registrarAccount});
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.props.continue({
                accountName: this.state.accountName,
                password: this.state.generatedPassword
            });
        }
    }

    onPasswordChange(e) {
        this.setState({validPassword: e.valid});
    }

    isValid() {
        const firstAccount = AccountStore.getMyAccounts().length === 0;
        let valid = this.state.validAccountName;
        if (!WalletDb.getWallet()) {
            valid = valid && this.state.validPassword;
        }
        if (!firstAccount) {
            valid = valid && this.state.registrarAccount;
        }
        return valid;
    }

    renderAccountCreateForm() {
        const {registrarAccount} = this.state;

        const myAccounts = AccountStore.getMyAccounts();
        const firstAccount = myAccounts.length === 0;
        const valid = this.isValid();
        let isLTM = false;
        const registrar = registrarAccount
            ? ChainStore.getAccount(registrarAccount)
            : null;
        if (registrar) {
            if (registrar.get("lifetime_referrer") === registrar.get("id")) {
                isLTM = true;
            }
        }

        return (
            <div>
                <form onSubmit={this.onSubmit} noValidate>
                    <AccountNameInput
                        cheapNameOnly={firstAccount}
                        onChange={this.onAccountNameChange}
                        accountShouldNotExist
                        placeholder={
                            <span>
                                <span className="vertical-middle">
                                    {counterpart.translate("account.name")}
                                </span>
                                <span
                                    data-tip={counterpart.translate(
                                        "tooltip.registration.accountName"
                                    )}
                                >
                                    <Icon
                                        name="question-in-circle"
                                        className="icon-14px question-icon vertical-middle"
                                    />
                                </span>
                            </span>
                        }
                        noLabel
                    />

                    <PasswordInput
                        value={this.state.generatedPassword}
                        confirmation
                        onChange={this.onPasswordChange}
                        noLabel
                        placeholder={counterpart.translate("settings.password")}
                        copy
                        readonly
                        visible
                    />

                    {firstAccount ? null : (
                        <div className="full-width-content form-group no-overflow">
                            <label htmlFor="account">
                                <Translate content="account.pay_from" />
                            </label>
                            <AccountSelect
                                id="account"
                                account_names={myAccounts}
                                onChange={this.onRegistrarAccountChange}
                            />
                            {registrarAccount && !isLTM ? (
                                <div
                                    style={{textAlign: "left"}}
                                    className="facolor-error"
                                >
                                    <Translate content="wallet.must_be_ltm" />
                                </div>
                            ) : null}
                        </div>
                    )}
                    {this.state.loading ? (
                        <LoadingIndicator type="three-bounce" />
                    ) : (
                        <button
                            className="button-primary"
                            disabled={!valid || (registrarAccount && !isLTM)}
                        >
                            <Translate content="registration.continue" />
                        </button>
                    )}
                </form>
            </div>
        );
    }

    renderAccountCreateText() {
        const myAccounts = AccountStore.getMyAccounts();
        const firstAccount = myAccounts.length === 0;

        return (
            <div>
                <Translate
                    component="p"
                    className="model-description"
                    content="registration.accountDescription"
                />

                {firstAccount ? null : (
                    <Translate
                        component="p"
                        content="wallet.not_first_account"
                    />
                )}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderAccountCreateText()}
                {this.renderAccountCreateForm()}
            </div>
        );
    }
}

export default connect(
    AccountRegistrationForm,
    {
        listenTo() {
            return [AccountStore];
        },
        getProps() {
            return {};
        }
    }
);
