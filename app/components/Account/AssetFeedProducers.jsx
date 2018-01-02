import React from "react";
import AssetActions from "actions/AssetActions";
import AccountSelector from "../Account/AccountSelector";
import LinkToAccountById from "../Utility/LinkToAccountById";
import Translate from "react-translate-component";
import Icon from "../Icon/Icon";

export default class AccountFeedProducers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            producers: props.asset.getIn(["bitasset", "feeds"], []).map(a => {
                return a.first();
            }),
            producer_name: null,
            original: props.asset.getIn(["bitasset", "feeds"], []).map(a => {
                return a.first();
            }),
            hasChanged: false
        };
    }

    _onSubmit() {
        AssetActions.updateFeedProducers(
            this.props.account.get("id"),
            this.props.asset,
            this.state.producers.toArray()
        );
    }

    onChangeList(action = "add", id) {
        let current = this.state.producers;
        if (action === "add" && !current.includes(id)) {
            current = current.push(id);
        } else if (action === "remove" && current.includes(id)) {
            current = current.remove(current.indexOf(id));
        }
        this.setState({producers: current, hasChanged: current !== this.state.original});
    }

    onAccountChanged(account) {
        this.setState({
            new_producer_id: account ? account.get("id") : null
        });
    }

    onAccountNameChanged(name) {
        this.setState({
            producer_name: name
        });
    }

    onReset() {
        this.setState({
            producers: this.state.original,
            hasChanged: false
        });
    }

    render() {
        const {witnessFed, committeeFed} = this.props;

        if (witnessFed || committeeFed) {
            return (
                <div className="grid-content small-12 large-8 large-offset-2">
                    <Translate component="p" content="account.user_issued_assets.feed_not_allowed_1" className="has-error"></Translate>
                    <Translate component="p" content="account.user_issued_assets.feed_not_allowed_2"></Translate>
                </div>
            );
        }

        return (
            <div className="grid-content small-12 large-8 large-offset-2">
                <table className="table dashboard-table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{textAlign: "left"}}><Translate content="explorer.account.title" /></th>
                            <th><Translate content="account.perm.remove_text" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.producers.map((a, i) => {
                            return (
                                <tr key={a}>
                                    <td style={{textAlign: "left"}}>#{i + 1}</td>
                                    <td style={{textAlign: "left"}}><LinkToAccountById account={a} /></td>
                                    <td className="clickable" onClick={this.onChangeList.bind(this, "remove", a)}>
                                        <Icon name="cross-circle" className="icon-14px" />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div style={{paddingTop: "2rem"}}>
                    <AccountSelector
                        label={"account.user_issued_assets.add_feed"}
                        accountName={this.state.producer_name}
                        account={this.state.producer_name}
                        onChange={this.onAccountNameChanged.bind(this)}
                        onAccountChanged={this.onAccountChanged.bind(this)}
                        error={null}
                        tabIndex={1}
                        action_label="account.perm.confirm_add"
                        onAction={this.onChangeList.bind(this, "add", this.state.new_producer_id)}
                     />
                 </div>
                <div style={{paddingTop: "1.5rem"}}>
                    <div className={"button" + (!this.state.hasChanged ? " disabled" : "")} onClick={this._onSubmit.bind(this)}>Update</div>
                    <div className={"button" + (!this.state.hasChanged ? " disabled" : "")} onClick={this.onReset.bind(this)}>Reset</div>
                </div>
            </div>
        );
    }
}
