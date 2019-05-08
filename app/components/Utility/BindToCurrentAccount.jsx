import React from "react";

import ChainTypes from "./ChainTypes";
import debounceRender from "react-debounce-render";
import BindToChainState from "./BindToChainState";
import {connect} from "alt-react";
import AccountStore from "../../stores/AccountStore";

export const bindToCurrentAccount = function bindToCurrentAccount(
    WrappedComponent
) {
    // ...and returns another component...
    let BindToCurrentAccount = class BindToCurrentAccount extends React.Component {
        static propTypes = {
            currentAccount: ChainTypes.ChainAccount
        };

        static defaultProps = {
            // set subscription
            autosubscribe: true
        };

        constructor(props) {
            super(props);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    BindToCurrentAccount = BindToChainState(BindToCurrentAccount);

    BindToCurrentAccount = debounceRender(BindToCurrentAccount, 100, {
        leading: false
    });

    return connect(
        BindToCurrentAccount,
        {
            listenTo() {
                return [AccountStore];
            },
            getProps() {
                let currentAccount =
                    AccountStore.getState().currentAccount ||
                    AccountStore.getState().passwordAccount ||
                    "please-login";
                return {
                    currentAccount: new Map([["name", currentAccount]])
                };
            }
        }
    );
};

export const hasLoaded = function hasLoaded(currentAccount) {
    return !!currentAccount && !!currentAccount.get("id");
};
