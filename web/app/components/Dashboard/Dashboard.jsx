import React from "react";
import Immutable from "immutable";
import DashboardList from "./DashboardList";
import { RecentTransactions } from "../Account/RecentTransactions";
import Translate from "react-translate-component";
import MarketCard from "./MarketCard";
import utils from "common/utils";
import { Apis } from "bitsharesjs-ws";
var logo = require("assets/logo-ico-blue.png");
import LoadingIndicator from "../LoadingIndicator";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";


class Dashboard extends React.Component {

    constructor() {
        super();
        let marketsByChain = {
            "4018d784":[
                ["BTS", "CNY"],
                ["CNY", "OPEN.BTC"],
                ["CNY", "USD"],
                ["OPEN.BTC", "BTS", false],
                ["USD", "OPEN.BTC"],
                ["USD", "OPEN.USDT"],
                ["BTS", "USD"],
                ["BTS", "GOLD"],
                ["BTS", "BLOCKPAY"],
                ["OPEN.BTC", "BLOCKPAY", false],
                ["BTS", "OBITS"],
                ["OPEN.BTC", "KAPITAL"],
                ["BTS", "SILVER"],
                ["OPEN.BTC", "OPEN.DGD", false],
                ["BTS", "BTWTY"],
                [ "BTS", "OPEN.ETH"],
                ["BTS", "ICOO"],
                ["OPEN.BTC", "OPEN.STEEM"],
                ["OPEN.USDT", "OPEN.BTC", false],
                ["BTS", "OPEN.STEEM"],
                ["OPEN.BTC", "OPEN.MAID"],
                ["BTS", "OPEN.MAID"],
                ["HEMPSWEET", "OPEN.BTC"]
            ],
            "39f5e2ed": [
                ["TEST", "PEG.FAKEUSD"],
                ["TEST", "BTWTY"]
            ]
        };
        let chainID = Apis.instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);

        this.state = {
            width: null,
            showIgnored: false,
            featuredMarkets: marketsByChain[chainID] || marketsByChain["4018d784"],
            newAssets: [

            ],
            removeBackupWarning: SettingsStore.getState().settings.get("removeBackupWarning", false)
        };

        this._setDimensions = this._setDimensions.bind(this);
    }

    componentDidMount() {
        this._setDimensions();

        window.addEventListener("resize", this._setDimensions, false);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !utils.are_equal_shallow(nextState.featuredMarkets, this.state.featuredMarkets) ||
            !utils.are_equal_shallow(nextProps.lowVolumeMarkets, this.props.lowVolumeMarkets) ||
            !utils.are_equal_shallow(nextState.newAssets, this.state.newAssets) ||
            nextProps.linkedAccounts !== this.props.linkedAccounts ||
            nextProps.ignoredAccounts !== this.props.ignoredAccounts ||
            nextState.width !== this.state.width ||
            nextProps.accountsReady !== this.props.accountsReady ||
            nextState.showIgnored !== this.state.showIgnored
        );
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._setDimensions, false);
    }

    _onCloseWarning() {
        let newVal = !this.state.removeBackupWarning
        this.setState({
            removeBackupWarning: newVal
        });
        SettingsActions.changeSetting({setting: "removeBackupWarning", value: newVal });
        this.forceUpdate(); // Not sure why this is needed
    }

    _setDimensions() {
        let width = window.innerWidth;

        if (width !== this.state.width) {
            this.setState({width});
        }
    }

    _onToggleIgnored() {
        this.setState({
            showIgnored: !this.state.showIgnored
        });
    }

    render() {
        let { linkedAccounts, myIgnoredAccounts, accountsReady } = this.props;
        let {width, showIgnored, featuredMarkets, newAssets} = this.state;
        let names = linkedAccounts.toArray().sort();
        let ignored = myIgnoredAccounts.toArray().sort();

        let accountCount = linkedAccounts.size + myIgnoredAccounts.size;

        if (!accountsReady) {
            return <LoadingIndicator />;
        }

        let markets = featuredMarkets.filter(pair => {
            let isLowVolume = this.props.lowVolumeMarkets.get(pair[1] + "_" + pair[0]) || this.props.lowVolumeMarkets.get(pair[0] + "_" + pair[1]);
            return !isLowVolume;
        }).map((pair, index) => {

            let className = "";
            if (index > 5) {
                className += "show-for-medium";
            }
            if (index > 8) {
                className += " show-for-large";
            }

            if (index >= 16) return null;

            return (
                <MarketCard
                    key={pair[0] + "_" + pair[1]}
                    new={newAssets.indexOf(pair[1]) !== -1}
                    className={className}
                    quote={pair[0]}
                    base={pair[1]}
                    invert={pair[2]}
                />
            );
        }).filter(a => !!a);

        if (!accountCount) {
            return (
                <div ref="wrapper" className="grid-block page-layout vertical">
                    <div ref="container" className="grid-block vertical medium-horizontal"  style={{padding: "25px 10px 0 10px"}}>
                        <div className="grid-block vertical small-12 medium-5">
                            <div className="Dashboard__intro-text">
                                <h4><img style={{position: "relative", top: -15, margin: 0}} src={logo}/><Translate content="account.intro_text_title" /></h4>

                                <Translate unsafe content="account.intro_text_1" component="p" />
                                <Translate unsafe content="account.intro_text_2" component="p" />
                                <Translate unsafe content="account.intro_text_3" component="p" />
                                <Translate unsafe content="account.intro_text_4" component="p" />

                                <div className="button create-account" onClick={() => {this.props.router.push("create-account");}}>
                                    <Translate content="header.create_account" />
                                </div>
                            </div>
                        </div>
                        <div className="grid-container small-12 medium-7" style={{paddingTop: 44}}>
                            <Translate content="exchange.featured" component="h4" style={{paddingLeft: 30}}/>
                            <div className="grid-block small-up-2 medium-up-3 large-up-4 no-overflow">
                                {markets}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        let warning = (!this.state.removeBackupWarning) ?
                <div className="grid-container">
                    <div className="grid-block no-overflow">
                        <div className="callout warning">
                          <Translate content="dashboard.warning_title" component="h4" />
                          <Translate content="dashboard.warning_text" component="p" />
                          <div className="button success" onClick={() => {this.props.router.push("/wallet/backup/create");}}>
                           <Translate content="settings.backup_text" />
                          </div>
                          <div className="button success" onClick={() => {this.props.router.push("/wallet/backup/restore");}}>
                           <Translate content="settings.restore" />
                          </div>
                          <button className={"button outline"} type="button"
                                  onClick={this._onCloseWarning.bind(this)}>
                                  Understood!
                          </button>
                        </div>
                    </div>
                </div>
               : null;

        return (
            <div ref="wrapper" className="grid-block page-layout vertical">
                {warning}
                <div ref="container" className="grid-container" style={{padding: "25px 10px 0 10px"}}>
                    <Translate content="exchange.featured" component="h4" />
                    <div className="grid-block small-up-2 medium-up-3 large-up-4 no-overflow">
                        {markets}
                    </div>

                    {accountCount ? <div className="generic-bordered-box" style={{marginBottom: 5}}>
                        <div className="block-content-header" style={{marginBottom: 15}}>
                            <Translate content="account.accounts" />
                        </div>
                        <div className="box-content">
                            <DashboardList
                                accounts={Immutable.List(names)}
                                ignoredAccounts={Immutable.List(ignored)}
                                width={width}
                                onToggleIgnored={this._onToggleIgnored.bind(this)}
                                showIgnored={showIgnored}
                            />
                            {/* {showIgnored ? <DashboardList accounts={Immutable.List(ignored)} width={width} /> : null} */}
                        </div>
                    </div> : null}

                    {accountCount ? <RecentTransactions
                        style={{marginBottom: 20, marginTop: 20}}
                        accountsList={this.props.linkedAccounts}
                        limit={10}
                        compactView={false}
                        fullHeight={true}
                        showFilters={true}
                    /> : null}

                </div>
            </div>
        );
    }
}

export default Dashboard;
