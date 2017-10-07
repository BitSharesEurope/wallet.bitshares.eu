import React from "react";
import { connect } from "alt-react";
import accountUtils from "common/account_utils";
import utils from "common/utils";
import Translate from "react-translate-component";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import BlockTradesGateway from "../DepositWithdraw/BlockTradesGateway";
import OpenLedgerFiatDepositWithdrawal from "../DepositWithdraw/openledger/OpenLedgerFiatDepositWithdrawal";
import OpenLedgerFiatTransactionHistory from "../DepositWithdraw/openledger/OpenLedgerFiatTransactionHistory";
import BlockTradesBridgeDepositRequest from "../DepositWithdraw/blocktrades/BlockTradesBridgeDepositRequest";
import HelpContent from "../Utility/HelpContent";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import { Apis } from "bitsharesjs-ws";
import { settingsAPIs, rudexAPIs } from "api/apiConfig";
import BitKapital from "../DepositWithdraw/BitKapital";
import RuDexGateway from "../DepositWithdraw/rudex/RuDexGateway";
import GatewayStore from "stores/GatewayStore";
import GatewayActions from "actions/GatewayActions";
import AccountImage from "../Account/AccountImage";

class AccountDepositWithdraw extends React.Component {

    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired,
        contained: React.PropTypes.bool
    };

    static defaultProps = {
        contained: false
    };

    constructor(props) {
        super();
        this.state = {
            olService: props.viewSettings.get("olService", "gateway"),
            rudexService: props.viewSettings.get("rudexService", "gateway"),
            btService: props.viewSettings.get("btService", "bridge"),
            metaService: props.viewSettings.get("metaService", "bridge"),
            activeService: props.viewSettings.get("activeService", 0)
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.account !== this.props.account ||
            !utils.are_equal_shallow(nextProps.blockTradesBackedCoins, this.props.blockTradesBackedCoins) ||
            !utils.are_equal_shallow(nextProps.openLedgerBackedCoins, this.props.openLedgerBackedCoins) ||
            nextState.olService !== this.state.olService ||
            nextState.rudexService !== this.state.rudexService ||
            nextState.btService !== this.state.btService ||
            nextState.metaService !== this.state.metaService ||
            nextState.activeService !== this.state.activeService
        );
    }

    componentWillMount() {
        accountUtils.getFinalFeeAsset(this.props.account, "transfer");
    }

    toggleOLService(service) {
        this.setState({
            olService: service
        });

        SettingsActions.changeViewSetting({
            olService: service
        });
    }

    toggleRuDEXService(service) {
        this.setState({
            rudexService: service
        });

        SettingsActions.changeViewSetting({
            rudexService: service
        });
    }

    toggleBTService(service) {
        this.setState({
            btService: service
        });

        SettingsActions.changeViewSetting({
            btService: service
        });
    }

    toggleMetaService(service) {
        this.setState({
            metaService: service
        });

        SettingsActions.changeViewSetting({
            metaService: service
        });
    }

    onSetService(e) {
        //let index = this.state.services.indexOf(e.target.value);
        this.setState({
            activeService: parseInt(e.target.value)
        });

        SettingsActions.changeViewSetting({
            activeService: parseInt(e.target.value)
        });
    }

    renderServices(blockTradesGatewayCoins, openLedgerGatewayCoins, rudexGatewayCoins) {
        //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
        let serList = [];
        let { account } = this.props;
        let { olService, btService, rudexService } = this.state;

        serList.push({
            name: "Openledger (OPEN.X)",
            template: (
                <div className="content-block">
                        {/* <div className="float-right">
                            <a href="https://www.ccedk.com/" target="__blank" rel="noopener noreferrer"><Translate content="gateway.website" /></a>
                        </div> */}
                        <div className="service-selector">
                            <ul className="button-group segmented no-margin">
                                <li onClick={this.toggleOLService.bind(this, "gateway")} className={olService === "gateway" ? "is-active" : ""}><a><Translate content="gateway.gateway" /></a></li>
                                <li onClick={this.toggleOLService.bind(this, "fiat")} className={olService === "fiat" ? "is-active" : ""}><a>Fiat</a></li>
                            </ul>
                        </div>

                        {olService === "gateway" && openLedgerGatewayCoins.length ?
                        <BlockTradesGateway
                            account={account}
                            coins={openLedgerGatewayCoins}
                            provider="openledger"
                        /> : null}

                        {olService === "fiat" ?
                        <div>
                            <div style={{paddingBottom: 15}}><Translate component="h5" content="gateway.fiat_text" /></div>

                            <OpenLedgerFiatDepositWithdrawal
                                rpc_url={settingsAPIs.RPC_URL}
                                account={account}
                                issuer_account="openledger-fiat" />
                            <OpenLedgerFiatTransactionHistory
                                rpc_url={settingsAPIs.RPC_URL}
                                account={account} />
                        </div> : null}
                    </div>
            )
        });

        serList.push({
            name: "RuDEX (RUDEX.X)",
            template: (
                <div className="content-block">
                    <div className="service-selector">
                        <ul className="button-group segmented no-margin">
                            <li onClick={this.toggleRuDEXService.bind(this, "gateway")}
                                className={rudexService === "gateway" ? "is-active" : ""}><a><Translate
                                content="gateway.gateway"/></a></li>
                            <li onClick={this.toggleRuDEXService.bind(this, "fiat")}
                                className={rudexService === "fiat" ? "is-active" : ""}><a>Fiat</a></li>
                        </ul>
                    </div>

                    {rudexService === "gateway" && rudexGatewayCoins.length ?
                        <RuDexGateway account={account} coins={rudexGatewayCoins}/> : null}

                    {rudexService === "fiat" ?
                        <div>
                            <Translate content="gateway.rudex.coming_soon" />
                        </div> : null}
                </div>
            )
        });

        serList.push({
            name: "BlockTrades (TRADE.X)",
            template: (
                <div>
                        <div className="content-block">
                            {/* <div className="float-right"><a href="https://blocktrades.us" target="__blank" rel="noopener noreferrer"><Translate content="gateway.website" /></a></div> */}

                            <div className="service-selector">
                                <ul className="button-group segmented no-margin">
                                    <li onClick={this.toggleBTService.bind(this, "bridge")} className={btService === "bridge" ? "is-active" : ""}><a><Translate content="gateway.bridge" /></a></li>
                                    <li onClick={this.toggleBTService.bind(this, "gateway")} className={btService === "gateway" ? "is-active" : ""}><a><Translate content="gateway.gateway" /></a></li>
                                </ul>
                            </div>

                            {btService === "bridge" ?
                            <BlockTradesBridgeDepositRequest
                                gateway="blocktrades"
                                issuer_account="blocktrades"
                                account={account}
                                initial_deposit_input_coin_type="btc"
                                initial_deposit_output_coin_type="bts"
                                initial_deposit_estimated_input_amount="1.0"
                                initial_withdraw_input_coin_type="bts"
                                initial_withdraw_output_coin_type="btc"
                                initial_withdraw_estimated_input_amount="100000"
                                initial_conversion_input_coin_type="bts"
                                initial_conversion_output_coin_type="bitbtc"
                                initial_conversion_estimated_input_amount="1000"
                            /> : null}

                            {btService === "gateway" ?
                            <div>
                                <h4 className="txtlabel cancel">This cryptocurrency gateway is shutting down as it is rarely if ever used</h4>
                                <p>Openledger's gateway continues to operate, and it offers more coins and a far more liquid trading environment. Note that we will be continuing the operation of our cryptocurrency bridge for quickly buying and selling cryptocurrency, since it is actively used by the Bitshares community.</p>

                                <p>We'll be shutting down this gateway in stages. In the first stage, which has just begun, we've disabled deposits to the gateway. Inevitably, someone may still use one of their old deposit addresses, in which case we'll manually refund them when you contact us. <b>We request that if you hold any TRADE assets, you perform a withdrawal of those assets during this stage.</b></p>

                                <p>Eventually, we will also disable withdrawals as well, but we will leave in place a 1-1 market order on OPEN.BTC_TRADE.BTC for a while after that to allow users to exchange any remaining TRADE.BTC for OPEN.BTC. We will place similar orders for any other TRADE assets that remain outstanding after withdrawals are disabled.</p>
                            </div> : null}
                        </div>
                        <div className="content-block">
                        </div>
                    </div>)
        });

        serList.push({
            name: "BitKapital",
            template: (<BitKapital viewSettings={this.props.viewSettings} account={account}/>)
        });

        return serList;
    }

    render() {
        let { account } = this.props;
        let { activeService } = this.state;

        let blockTradesGatewayCoins = this.props.blockTradesBackedCoins.filter(coin => {
            if (coin.backingCoinType.toLowerCase() === "muse") {
                return false;
            }
            return coin.symbol.toUpperCase().indexOf("TRADE") !== -1;
        })
        .map(coin => {
            return coin;
        })
        .sort((a, b) => {
            if (a.symbol < b.symbol)
                return -1;
            if (a.symbol > b.symbol)
                return 1;
            return 0;
        });

        let openLedgerGatewayCoins = this.props.openLedgerBackedCoins.map(coin => {
            return coin;
        })
        .sort((a, b) => {
            if (a.symbol < b.symbol)
                return -1;
            if (a.symbol > b.symbol)
                return 1;
            return 0;
        });

        let rudexGatewayCoins = this.props.rudexBackedCoins.map(coin => {
            return coin;
        })
        .sort((a, b) => {
            if (a.symbol < b.symbol)
                return -1;
            if (a.symbol > b.symbol)
                return 1;
            return 0;
        });

        let services = this.renderServices(blockTradesGatewayCoins, openLedgerGatewayCoins, rudexGatewayCoins);

        let options = services.map((services_obj, index) => {
            return <option key={index} value={index}>{services_obj.name}</option>;
        });
        return (
            <div className={this.props.contained ? "grid-content" : "grid-container"}>
                <div className={this.props.contained ? "" : "grid-content"} style={{paddingTop: "2rem"}}>

                    <Translate content="gateway.title" component="h2" />
                    <div className="grid-block vertical medium-horizontal no-margin no-padding">
                        <div className="medium-6 show-for-medium">
                            <HelpContent path="components/DepositWithdraw" section="deposit-short"/>
                        </div>
                        <div className="medium-5 medium-offset-1">
                            <HelpContent account={account.get("name")} path="components/DepositWithdraw" section="receive"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid-block vertical medium-horizontal no-margin no-padding">
                            <div className="medium-6 small-order-2 medium-order-1">
                                <Translate component="label" className="left-label" content="gateway.service" />
                                <select onChange={this.onSetService.bind(this)} className="bts-select" value={activeService} >
                                    {options}
                                </select>
                            </div>
                            <div className="medium-5 medium-offset-1 small-order-1 medium-order-2" style={{paddingBottom: 20}}>
                                <Translate component="label" className="left-label" content="gateway.your_account" />
                                <div className="inline-label">
                                    <AccountImage
                                        size={{height: 40, width: 40}}
                                        account={account.get("name")} custom_image={null}
                                    />
                                    <input type="text"
                                           value={account.get("name")}
                                           placeholder={null}
                                           disabled
                                           onChange={() => {}}
                                           onKeyDown={() => {}}
                                           tabIndex={1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-content no-padding" style={{paddingTop: 15}}>
                    {activeService && services[activeService] ? services[activeService].template : services[0].template}
                    </div>
                </div>
            </div>
        );
    }
};
AccountDepositWithdraw = BindToChainState(AccountDepositWithdraw);

class DepositStoreWrapper extends React.Component {

    componentWillMount() {
        if (Apis.instance().chain_id.substr(0, 8) === "4018d784") { // Only fetch this when on BTS main net
            GatewayActions.fetchCoins.defer(); // Openledger
            GatewayActions.fetchCoinsSimple.defer({backer: "RUDEX", url:rudexAPIs.BASE+rudexAPIs.COINS_LIST}); // RuDEX
            GatewayActions.fetchCoins.defer({backer: "TRADE"}); // Blocktrades
        }
    }

    render() {
        return <AccountDepositWithdraw {...this.props}/>;
    }
}

export default connect(DepositStoreWrapper, {
    listenTo() {
        return [AccountStore, SettingsStore, GatewayStore];
    },
    getProps() {
        return {
            account: AccountStore.getState().currentAccount,
            viewSettings: SettingsStore.getState().viewSettings,
            openLedgerBackedCoins: GatewayStore.getState().backedCoins.get("OPEN", []),
            rudexBackedCoins: GatewayStore.getState().backedCoins.get("RUDEX", []),
            blockTradesBackedCoins: GatewayStore.getState().backedCoins.get("TRADE", [])
        };
    }
});
