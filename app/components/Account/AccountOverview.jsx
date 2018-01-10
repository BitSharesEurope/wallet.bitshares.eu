import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import BalanceComponent from "../Utility/BalanceComponent";
import TotalBalanceValue from "../Utility/TotalBalanceValue";
import SettleModal from "../Modal/SettleModal";
import {BalanceValueComponent} from "../Utility/EquivalentValueComponent";
import {Market24HourChangeComponent} from "../Utility/MarketChangeComponent";
import AssetName from "../Utility/AssetName";
import MarginPositions from "./MarginPositions";
import { RecentTransactions } from "./RecentTransactions";
import Proposals from "components/Account/Proposals";
import {ChainStore} from "bitsharesjs/es";
import SettingsActions from "actions/SettingsActions";
import assetUtils from "common/asset_utils";
import counterpart from "counterpart";
import Icon from "../Icon/Icon";
import {Link} from "react-router/es";
import ChainTypes from "../Utility/ChainTypes";
import EquivalentPrice from "../Utility/EquivalentPrice";
import BindToChainState from "../Utility/BindToChainState";
import LinkToAssetById from "../Utility/LinkToAssetById";
import utils from "common/utils";
import BorrowModal from "../Modal/BorrowModal";
import DepositModal from "../Modal/DepositModal";
import ReactTooltip from "react-tooltip";
import SimpleDepositWithdraw from "../Dashboard/SimpleDepositWithdraw";
import SimpleDepositBlocktradesBridge from "../Dashboard/SimpleDepositBlocktradesBridge";
import { Apis } from "bitsharesjs-ws";
import GatewayActions from "actions/GatewayActions";
import {Tabs, Tab} from "../Utility/Tabs";
import AccountOrders from "./AccountOrders";
import cnames from "classnames";
import TranslateWithLinks from "../Utility/TranslateWithLinks";
import { checkMarginStatus } from "common/accountHelper";
import SendModal from "../Modal/SendModal";

class AccountOverview extends React.Component {

    static propTypes = {
        balanceAssets: ChainTypes.ChainAssetsList,
        core_asset: ChainTypes.ChainAsset.isRequired
    };

    static defaultProps = {
        core_asset: "1.3.0"
    }

    constructor(props) {
        super();
        this.state = {
            sortKey: props.viewSettings.get("portfolioSort", "totalValue"),
            sortDirection: props.viewSettings.get("portfolioSortDirection", true), // alphabetical A -> B, numbers high to low
            settleAsset: "1.3.0",
            showHidden: false,
            depositAsset: null,
            withdrawAsset: null,
            bridgeAsset: null,
            alwaysShowAssets: [
                "BTS",
                "USD",
                "CNY",
                "HERO",
                "BTC",
                "SILVER",
                "GOLD"
            ]
        };

        this.priceRefs = {};
        this.valueRefs = {};
        this.changeRefs = {};
        for (let key in this.sortFunctions) {
            this.sortFunctions[key] = this.sortFunctions[key].bind(this);
        }
    }

    sortFunctions = {
        alphabetic: function(a, b, force) {
            if (a.key > b.key) return this.state.sortDirection || force ? 1 : -1;
            if (a.key < b.key) return this.state.sortDirection || force ? -1 : 1;
            return 0;
        },
        priceValue: function(a, b) {
            let aRef = this.priceRefs[a.key];
            let bRef = this.priceRefs[b.key];
            if (aRef && bRef) {
                let aPrice = aRef.getFinalPrice(true);
                let bPrice = bRef.getFinalPrice(true);
                if (!aPrice && bPrice) return 1;
                if (aPrice && !bPrice) return -1;
                if (!aPrice && !bPrice) return this.sortFunctions.alphabetic(a, b, true);
                return this.state.sortDirection ? aPrice - bPrice : bPrice - aPrice;
            }
        },
        totalValue: function(a, b) {
            let aRef = this.valueRefs[a.key];
            let bRef = this.valueRefs[b.key];
            if (aRef && bRef) {
                let aValue = aRef.getValue();
                let bValue = bRef.getValue();
                if (!aValue && bValue) return 1;
                if (aValue && !bValue) return -1;
                if (!aValue && !bValue) return this.sortFunctions.alphabetic(a, b, true);
                return !this.state.sortDirection ? aValue - bValue : bValue - aValue;
            }
        },
        changeValue: function(a, b) {
            let aRef = this.changeRefs[a.key];
            let bRef = this.changeRefs[b.key];

            if (aRef && bRef) {
                let aValue = aRef.getValue();
                let bValue = bRef.getValue();
                let aChange = parseFloat(aValue) != "NaN" ? parseFloat(aValue) : aValue;
                let bChange = parseFloat(bValue) != "NaN" ? parseFloat(bValue) : bValue;
                let direction = typeof this.state.sortDirection !== "undefined" ? this.state.sortDirection : true;

                return direction ? aChange - bChange : bChange - aChange;
            }
        }
    }

    componentWillMount() {
        this._checkMarginStatus();
    }

    _checkMarginStatus(props = this.props) {
        checkMarginStatus(props.account).then(status => {
            let globalMarginStatus = null;
            for (let asset in status) {
                globalMarginStatus = status[asset].statusClass || globalMarginStatus;
            };
            this.setState({globalMarginStatus});
        });
    }

    componentWillReceiveProps(np) {
        if (np.account !== this.props.account) {
            this._checkMarginStatus(np);
            this.priceRefs = {};
            this.valueRefs = {};
            this.changeRefs = {};
            setTimeout(this.forceUpdate.bind(this), 500);
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !utils.are_equal_shallow(nextProps.balanceAssets, this.props.balanceAssets) ||
            !utils.are_equal_shallow(nextProps.backedCoins, this.props.backedCoins) ||
            !utils.are_equal_shallow(nextProps.balances, this.props.balances) ||
            nextProps.account !== this.props.account ||
            nextProps.settings !== this.props.settings ||
            nextProps.hiddenAssets !== this.props.hiddenAssets ||
            !utils.are_equal_shallow(nextState, this.state)
        );
    }

    _onSettleAsset(id, e) {
        e.preventDefault();
        this.setState({
            settleAsset: id
        });

        this.refs.settlement_modal.show();
    }

    _hideAsset(asset, status) {
        SettingsActions.hideAsset(asset, status);
    }

    _showDepositModal(asset, e) {
        e.preventDefault();
        this.setState({depositAsset: asset}, () => {
            this.refs.deposit_modal_new.show();
        });
    }

    _showDepositWithdraw(action, asset, fiatModal, e) {
        e.preventDefault();
        this.setState({
            [action === "bridge_modal" ? "bridgeAsset" : action === "deposit_modal" ? "depositAsset" : "withdrawAsset"]: asset,
            fiatModal
        }, () => {
            this.refs[action].show();
        });
    }

    _getSeparator(render) {
        return render ? <span>&nbsp;|&nbsp;</span> : null;
    }

    _onNavigate(route, e) {
        e.preventDefault();
        this.props.router.push(route);
    }

    triggerSend(asset) {
        this.setState({send_asset: asset}, () => {
            this.refs.send_modal.show();
        });
    }

    _renderBalances(balanceList, optionalAssets, visible) {
        const {core_asset} = this.props;
        let {settings, hiddenAssets, orders} = this.props;
        let preferredUnit = settings.get("unit") || core_asset.get("symbol");
        let showAssetPercent = settings.get("showAssetPercent", false);

        const renderBorrow = (asset, account) => {
            let isBitAsset = asset && asset.has("bitasset_data_id");
            let modalRef = "cp_modal_" + asset.get("id");
            return {
                isBitAsset,
                borrowModal: !isBitAsset ? null : <BorrowModal
                    ref={modalRef}
                    quote_asset={asset.get("id")}
                    backing_asset={asset.getIn(["bitasset", "options", "short_backing_asset"])}
                    account={account}
                />,
                borrowLink: !isBitAsset ? null : <a onClick={() => {ReactTooltip.hide();this.refs[modalRef].show();}}><Icon name="dollar" className="icon-14px" /></a>
            };
        };

        let balances = [];
        const emptyCell = "-";
        balanceList.forEach( balance => {
            let balanceObject = ChainStore.getObject(balance);
            let asset_type = balanceObject.get("asset_type");
            let asset = ChainStore.getObject(asset_type);

            let directMarketLink, settleLink, transferLink;
            let symbol = "";
            if (!asset) return null;

            const assetName = asset.get("symbol");
            const notCore = asset.get("id") !== "1.3.0";
            const notCorePrefUnit = preferredUnit !== core_asset.get("symbol");

            let {market} = assetUtils.parseDescription(asset.getIn(["options", "description"]));
            symbol = asset.get("symbol");
            if (!market) market = "USD";
            let preferredMarket = market ? market : preferredUnit;


            if (notCore && preferredMarket === symbol) preferredMarket = core_asset.get("symbol");

            /* Table content */
            directMarketLink = notCore ?
                <Link to={`/market/${asset.get("symbol")}_${preferredMarket}`}><Icon name="trade" className="icon-14px" /></Link> :
                notCorePrefUnit ? <Link to={`/market/${asset.get("symbol")}_${preferredUnit}`}><Icon name="trade" className="icon-14px" /></Link> :
                emptyCell;
            transferLink = <a onClick={this.triggerSend.bind(this, asset.get("id"))}><Icon name="transfer" className="icon-14px" /></a>;

            let {isBitAsset, borrowModal, borrowLink} = renderBorrow(asset, this.props.account);

            /* Popover content */
            settleLink = <a href onClick={this._onSettleAsset.bind(this, asset.get("id"))}>
                <Icon name="settle" className="icon-14px" />
            </a>;

            const includeAsset = !hiddenAssets.includes(asset_type);
            const hasBalance = !!balanceObject.get("balance");
            const hasOnOrder = !!orders[asset_type];

            const thisAssetName = asset.get("symbol").split(".");
            const canDeposit =
                !!this.props.backedCoins.get("OPEN", []).find(a => a.backingCoinType === thisAssetName[1]) ||
                !!this.props.backedCoins.get("RUDEX", []).find(a => a.backingCoin === thisAssetName[1]) ||
                asset.get("symbol") == "BTS";

            const canDepositWithdraw = false;  //!!this.props.backedCoins.get("OPEN", []).find(a => a.symbol === asset.get("symbol"));
            const canWithdraw = canDepositWithdraw && (hasBalance && balanceObject.get("balance") != 0);
            const canBuy = !!this.props.bridgeCoins.get(symbol);

            balances.push(
                <tr key={asset.get("symbol")} style={{maxWidth: "100rem"}}>
                    <td style={{textAlign: "left"}}>
                        <LinkToAssetById asset={asset.get("id")} />
                    </td>
                    <td style={{textAlign: "right"}}>
                        {hasBalance || hasOnOrder ? <BalanceComponent balance={balance} hide_asset /> : null}
                    </td>
                    <td style={{textAlign: "right"}} className="column-hide-small">
                        <EquivalentPrice
                            refCallback={(c) => {if (c && c.refs.bound_component) this.priceRefs[asset.get("symbol")] = c.refs.bound_component;}}
                            fromAsset={asset.get("id")}
                            hide_symbols
                        />
                    </td>
                    <td style={{textAlign: "right"}} className="column-hide-small">
                        <Market24HourChangeComponent
                            refCallback={(c) => { if (c && c.refs.bound_component) this.changeRefs[asset.get("symbol")] = c.refs.bound_component; }}
                            base={asset.get("id")}
                            quote={preferredUnit}
                            marketId={asset.get("symbol")+"_" + preferredUnit}
                            hide_symbols
                        />
                    </td>
                    <td style={{textAlign: "right"}} className="column-hide-small">
                        {hasBalance || hasOnOrder ?
                            <BalanceValueComponent
                                balance={balance}
                                toAsset={preferredUnit}
                                hide_asset
                                refCallback={(c) => {if (c && c.refs.bound_component) this.valueRefs[asset.get("symbol")] = c.refs.bound_component;}}
                            /> : null}
                    </td>
                    {showAssetPercent ? <td style={{textAlign: "right"}}>
                        {hasBalance ? <BalanceComponent balance={balance} asPercentage={true}/> : null}
                    </td> : null}
                    <td>
                        {transferLink}
                    </td>
                    <td>
                        {canBuy && this.props.isMyAccount ?
                        <span>
                            <a onClick={this._showDepositWithdraw.bind(this, "bridge_modal", assetName, false)}>
                                <Icon name="dollar" className="icon-14px" />
                            </a>
                        </span> : emptyCell}
                    </td>
                    <td>
                        {canDeposit && this.props.isMyAccount? (
                            <span>
                                <Icon style={{cursor: "pointer"}} name="deposit" className="icon-14x" onClick={this._showDepositModal.bind(this, assetName)} />
                            </span>
                        ) : emptyCell}
                    </td>
                    <td>
                        {canWithdraw && this.props.isMyAccount? (
                            <span>
                                <a className={!canWithdraw ? "disabled" : ""} onClick={canWithdraw ? this._showDepositWithdraw.bind(this, "withdraw_modal", assetName, false) : () => {}}>
                                    <Icon name="withdraw" className="icon-14px" />
                                </a>
                            </span>
                        ) : emptyCell}
                    </td>
                    <td>
                        {directMarketLink}
                    </td>
                    <td>
                        {isBitAsset ? <div className="inline-block" data-place="bottom" data-tip={counterpart.translate("tooltip.borrow", {asset: symbol})}>{borrowLink}{borrowModal}</div> : emptyCell}
                    </td>
                    <td>
                        {isBitAsset ? <div className="inline-block" data-place="bottom" data-tip={counterpart.translate("tooltip.settle", {asset: symbol})}>{settleLink}</div> : emptyCell}
                    </td>
                    <td style={{textAlign: "center"}} className="column-hide-small" data-place="bottom" data-tip={counterpart.translate("tooltip." + (includeAsset ? "hide_asset" : "show_asset"))}>
                        <a style={{marginRight: 0}} className={includeAsset ? "order-cancel" : "action-plus"} onClick={this._hideAsset.bind(this, asset_type, includeAsset)}>
                            <Icon name={includeAsset ? "cross-circle" : "plus-circle"} className="icon-14px" />
                        </a>
                    </td>
                </tr>
            );
        });

        if (optionalAssets) {
            optionalAssets.filter(asset => {
                let isAvailable = false;
                /*
                this.props.backedCoins.get("OPEN", []).forEach(coin => {
                    if (coin && (coin.symbol === asset)) {
                        isAvailable = true;
                    }
                });
               */
                if (!!this.props.bridgeCoins.get(asset)) {
                    isAvailable = true;
                }
                let keep = true;
                balances.forEach(a => {
                    if (a.key === asset) keep = false;
                });
                return keep && isAvailable;
            }).forEach(a => {
                let asset = ChainStore.getAsset(a);
                if (asset && this.props.isMyAccount) {
                    const includeAsset = !hiddenAssets.includes(asset.get("id"));

                    const thisAssetName = asset.get("symbol").split(".");
                    const canDeposit = false
                    /*
                    const canDeposit =
                        !!this.props.backedCoins.get("OPEN", []).find(a => a.backingCoinType === thisAssetName[1]) ||
                        !!this.props.backedCoins.get("RUDEX", []).find(a => a.backingCoin === thisAssetName[1]) ||
                        asset.get("symbol") == "BTS";
                    */

                    const canBuy = !!this.props.bridgeCoins.get(asset.get("symbol"));

                    const notCore = asset.get("id") !== "1.3.0";
                    let {market} = assetUtils.parseDescription(asset.getIn(["options", "description"]));
                    if (!market) market = "USD";
                    let preferredMarket = market ? market : core_asset ? core_asset.get("symbol") : "BTS";
                    let directMarketLink = notCore ? <Link to={`/market/${asset.get("symbol")}_${preferredMarket}`}><Icon name="trade" className="icon-14px" /></Link> : emptyCell;
                    let {isBitAsset, borrowModal, borrowLink} = renderBorrow(asset, this.props.account);
                    if (includeAsset && visible || !includeAsset && !visible) balances.push(
                        <tr key={asset.get("symbol")} style={{maxWidth: "100rem"}}>
                            <td style={{textAlign: "left"}}>
                                <LinkToAssetById asset={asset.get("id")} />
                            </td>
                            <td>{emptyCell}</td>
                            <td className="column-hide-small">{emptyCell}</td>
                            <td className="column-hide-small">{emptyCell}</td>
                            <td className="column-hide-small">{emptyCell}</td>
                            <td>{emptyCell}</td>
                            <td style={{textAlign: "center"}}>
                                {canBuy  && this.props.isMyAccount ?
                                <span>
                                    <a onClick={this._showDepositWithdraw.bind(this, "bridge_modal", a, false)}>
                                        <Icon name="dollar" className="icon-14px" />
                                    </a>
                                </span> : emptyCell}
                            </td>
                            <td>
                            {canDeposit && this.props.isMyAccount? (
                                <span>
                                    <Icon style={{cursor: "pointer"}} name="deposit" className="icon-14x" onClick={this._showDepositModal.bind(this, asset.get("symbol"))} />
                                </span>) : emptyCell}
                            </td>
                            <td>{emptyCell}</td>
                            <td style={{textAlign: "center"}}>
                                {directMarketLink}
                            </td>
                            <td>
                                {isBitAsset ?
                                    <div className="inline-block" data-place="bottom" data-tip={counterpart.translate("tooltip.borrow", {asset: asset.get("symbol")})}>
                                        {borrowLink}{borrowModal}
                                    </div> : emptyCell}
                            </td>
                            <td>{emptyCell}</td>
                            <td style={{textAlign: "center"}} className="column-hide-small" data-place="bottom" data-tip={counterpart.translate("tooltip." + (includeAsset ? "hide_asset" : "show_asset"))}>
                                <a style={{marginRight: 0}} className={includeAsset ? "order-cancel" : "action-plus"} onClick={this._hideAsset.bind(this, asset.get("id"), includeAsset)}>
                                    <Icon name={includeAsset ? "cross-circle" : "plus-circle"} className="icon-14px" />
                                </a>
                            </td>
                        </tr>
                    );
                }
            });
        }

        balances.sort(this.sortFunctions[this.state.sortKey]);
        return balances;
    }

    _toggleHiddenAssets() {
        this.setState({
            showHidden: !this.state.showHidden
        });
    }

    _toggleSortOrder(key) {
        if (this.state.sortKey === key) {
            SettingsActions.changeViewSetting({
                portfolioSortDirection: !this.state.sortDirection
            });
            this.setState({
                sortDirection: !this.state.sortDirection
            });
        } else {
            SettingsActions.changeViewSetting({
                portfolioSort: key
            });
            this.setState({
                sortKey: key
            });
        }
    }

    render() {
        let {account, hiddenAssets, settings, orders} = this.props;
        let {showHidden} = this.state;

        if (!account) {
            return null;
        }

        let call_orders = [], collateral = {}, debt = {};

        if (account.toJS && account.has("call_orders")) call_orders = account.get("call_orders").toJS();
        let includedBalances, hiddenBalances;
        let account_balances = account.get("balances");

        let includedBalancesList = Immutable.List(), hiddenBalancesList = Immutable.List();
        call_orders.forEach( (callID) => {
            let position = ChainStore.getObject(callID);
            if (position) {
                let collateralAsset = position.getIn(["call_price", "base", "asset_id"]);
                if (!collateral[collateralAsset]) {
                    collateral[collateralAsset] = parseInt(position.get("collateral"), 10);
                } else {
                    collateral[collateralAsset] += parseInt(position.get("collateral"), 10);
                }
                let debtAsset = position.getIn(["call_price", "quote", "asset_id"]);
                if (!debt[debtAsset]) {
                    debt[debtAsset] = parseInt(position.get("debt"), 10);
                } else {
                    debt[debtAsset] += parseInt(position.get("debt"), 10);
                }
            }
        });

        if (account_balances) {
            // Filter out balance objects that have 0 balance or are not included in open orders
            account_balances = account_balances.filter((a, index) => {
                let balanceObject = ChainStore.getObject(a);
                if (balanceObject && (!balanceObject.get("balance") && !orders[index])) {
                    return false;
                } else {
                    return true;
                }
            });

            // Separate balances into hidden and included
            account_balances.forEach((a, asset_type) => {
                if (hiddenAssets.includes(asset_type)) {
                    hiddenBalancesList = hiddenBalancesList.push(a);
                } else {
                    includedBalancesList = includedBalancesList.push(a);
                }
            });

            let included = this._renderBalances(includedBalancesList, this.state.alwaysShowAssets, true);
            includedBalances = included;
            let hidden = this._renderBalances(hiddenBalancesList, this.state.alwaysShowAssets);
            hiddenBalances = hidden;
        }

        let totalBalanceList = includedBalancesList.concat(hiddenBalancesList);

        let portFolioValue =
            <TotalBalanceValue
                noTip
                balances={totalBalanceList}
                hide_asset
            />;
        let ordersValue =
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                openOrders={orders}
                hide_asset
            />;
        let marginValue =
                <TotalBalanceValue
                    noTip
                    balances={Immutable.List()}
                    debt={debt}
                    collateral={collateral}
                    hide_asset
                />;
        let debtValue =
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                debt={debt}
                hide_asset
            />;
        let collateralValue =
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                collateral={collateral}
                hide_asset
            />;

        const preferredUnit = settings.get("unit") || this.props.core_asset.get("symbol");
        const totalValueText = <TranslateWithLinks
            noLink
            string="account.total"
            keys={[
                {type: "asset", value: preferredUnit, arg: "asset"}
            ]}
        />;

        includedBalances.push(<tr key="portfolio" className="total-value"><td style={{textAlign: "left"}}>{totalValueText}</td><td></td><td className="column-hide-small"></td><td></td><td className="column-hide-small" style={{textAlign: "right"}}>{portFolioValue}</td><td colSpan="9"></td></tr>);

        let showAssetPercent = settings.get("showAssetPercent", false);

        // Find the current Openledger coins
        // const currentDepositAsset = this.props.backedCoins.get("OPEN", []).find(c => {
        //     return c.symbol === this.state.depositAsset;
        // }) || {};
        const currentWithdrawAsset = this.props.backedCoins.get("OPEN", []).find(c => {
            return c.symbol === this.state.withdrawAsset;
        }) || {};
        const currentBridges = this.props.bridgeCoins.get(this.state.bridgeAsset) || null;

        const preferredAsset = ChainStore.getAsset(preferredUnit);
        let assetName = !!preferredAsset ? preferredAsset.get("symbol") : "";
        if (preferredAsset) {
            const {prefix, name} = utils.replaceName(assetName, !!preferredAsset.get("bitasset_data_id"));
            assetName = (prefix || "") + name;
        }
        const hiddenSubText = <span style={{visibility: "hidden"}}>H</span>;

        return (
            <div className="grid-content app-tables no-padding" ref="appTables">
                <div className="content-block small-12">
                    <div className="tabs-container generic-bordered-box">
                        <Tabs defaultActiveTab={0} segmented={false} setting="overviewTab" className="account-tabs" tabsClass="account-overview no-padding bordered-header content-block">

                            <Tab title="account.portfolio" subText={portFolioValue}>
                                <div className="hide-selector">
                                    <div className={cnames("inline-block", {inactive: showHidden && hiddenBalances.length})} onClick={showHidden ? this._toggleHiddenAssets.bind(this) : () => {}}>
                                        <Translate content="account.hide_hidden" />
                                    </div>
                                    {hiddenBalances.length ? <div className={cnames("inline-block", {inactive: !showHidden})} onClick={!showHidden ? this._toggleHiddenAssets.bind(this) : () => {}}>
                                        <Translate content="account.show_hidden" />
                                    </div> : null}

                                    {/* Send Modal */}
                                    <SendModal id="send_modal_portfolio" ref="send_modal" from_name={this.props.account.get("name")} asset_id={this.state.send_asset || "1.3.0"}/>

                                </div>

                                <table className="table dashboard-table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{textAlign: "left"}} className="clickable" onClick={this._toggleSortOrder.bind(this, "alphabetic")}><Translate component="span" content="account.asset" /></th>
                                            <th style={{textAlign: "right"}}><Translate content="account.qty" /></th>
                                            <th onClick={this._toggleSortOrder.bind(this, "priceValue")} className="column-hide-small clickable" style={{textAlign: "right"}}><Translate content="exchange.price" /> (<AssetName name={preferredUnit} />)</th>
                                            <th onClick={this._toggleSortOrder.bind(this, "changeValue")}  className="column-hide-small clickable" style={{textAlign: "right"}}><Translate content="account.hour_24_short" /></th>
                                            <th onClick={this._toggleSortOrder.bind(this, "totalValue")} style={{textAlign: "right"}} className="column-hide-small clickable">
                                                <TranslateWithLinks
                                                    noLink
                                                    string="account.eq_value_header"
                                                    keys={[
                                                        {type: "asset", value: preferredUnit, arg: "asset"}
                                                    ]}
                                                />
                                            </th>
                                            {showAssetPercent ? <th style={{textAlign: "right"}}><Translate component="span" content="account.percent" /></th> : null}
                                            <th><Translate content="header.payments" /></th>
                                            <th><Translate content="exchange.buy" /></th>
                                            <th><Translate content="modal.deposit.submit" /></th>
                                            <th><Translate content="modal.withdraw.submit" /></th>
                                            <th><Translate content="account.trade" /></th>
                                            <th><Translate content="exchange.borrow" /></th>
                                            <th><Translate content="account.settle" /></th>
                                            <th className="column-hide-small"><Translate content={!showHidden ? "exchange.hide" : "account.perm.show"} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {showHidden && hiddenBalances.length ? hiddenBalances : includedBalances}
                                    </tbody>
                                </table>
                            </Tab>

                            <Tab title="account.open_orders" subText={ordersValue}>
                                <AccountOrders {...this.props}>
                                    <tbody>
                                        <tr className="total-value">
                                            <td colSpan="7" style={{textAlign: "right"}}>
                                                {totalValueText}
                                            </td>
                                            <td colSpan="2" style={{textAlign: "left"}}>{ordersValue}</td>
                                            {this.props.isMyAccount ? <td></td> : null}
                                        </tr>
                                    </tbody>
                                </AccountOrders>
                            </Tab>

                            <Tab title="account.collaterals" subText={<span className={this.state.globalMarginStatus}>{marginValue}</span>}>
                                <div className="content-block">
                                    <div className="generic-bordered-box">
                                        <MarginPositions preferredUnit={preferredUnit} className="dashboard-table" callOrders={call_orders} account={account}>
                                            <tr className="total-value">
                                                <td>
                                                    {totalValueText}
                                                </td>
                                                <td>{debtValue}</td>
                                                <td className="column-hide-medium">{collateralValue}</td>
                                                <td></td>
                                                <td>{marginValue}</td>
                                                <td className="column-hide-small"></td>
                                                <td className="column-hide-small"></td>
                                                <td colSpan="3"></td>
                                            </tr>
                                        </MarginPositions>
                                    </div>
                                </div>
                            </Tab>

                            <Tab title="account.activity" subText={hiddenSubText}>
                                <RecentTransactions
                                    accountsList={Immutable.fromJS([account.get("id")])}
                                    compactView={false}
                                    showMore={true}
                                    fullHeight={true}
                                    limit={15}
                                    showFilters={true}
                                    dashboard
                                />
                            </Tab>

                            {account.get("proposals") && account.get("proposals").size ?
                            <Tab title="explorer.proposals.title" subText={account.get("proposals") ? account.get("proposals").size : 0}>

                                    <Proposals className="dashboard-table" account={account.get("id")}/>
                            </Tab> : null}
                        </Tabs>



                        <SettleModal ref="settlement_modal" asset={this.state.settleAsset} account={account.get("name")}/>
                    </div>
                </div>

                {/* Deposit Modal */}
                {/* <SimpleDepositWithdraw
                    ref="deposit_modal"
                    action="deposit"
                    fiatModal={this.state.fiatModal}
                    account={this.props.account.get("name")}
                    sender={this.props.account.get("id")}
                    asset={this.state.depositAsset}
                    modalId="simple_deposit_modal"
                    balances={this.props.balances}
                    {...currentDepositAsset}
                    isDown={this.props.gatewayDown.get("OPEN")}
                /> */}

                {/* Withdraw Modal*/}
                <SimpleDepositWithdraw
                    ref="withdraw_modal"
                    action="withdraw"
                    fiatModal={this.state.fiatModal}
                    account={this.props.account.get("name")}
                    sender={this.props.account.get("id")}
                    asset={this.state.withdrawAsset}
                    modalId="simple_withdraw_modal"
                    balances={this.props.balances}
                    {...currentWithdrawAsset}
                    isDown={this.props.gatewayDown.get("OPEN")}
                />

                {/* Deposit Modal */}
                <DepositModal
                    ref="deposit_modal_new"
                    modalId="deposit_modal_new"
                    asset={this.state.depositAsset}
                    account={this.props.account.get("name")}
                    backedCoins={this.props.backedCoins}
                />

                {/* Bridge modal */}
                <SimpleDepositBlocktradesBridge
                    ref="bridge_modal"
                    action="deposit"
                    account={this.props.account.get("name")}
                    sender={this.props.account.get("id")}
                    asset={this.state.bridgeAsset}
                    modalId="simple_bridge_modal"
                    balances={this.props.balances}
                    bridges={currentBridges}
                    isDown={this.props.gatewayDown.get("TRADE")}
                />
            </div>

        );
    }
}

AccountOverview = BindToChainState(AccountOverview);

class BalanceWrapper extends React.Component {

    static propTypes = {
        balances: ChainTypes.ChainObjectsList,
        orders: ChainTypes.ChainObjectsList
    };

    static defaultProps = {
        balances: Immutable.List(),
        orders: Immutable.List()
    };

    componentWillMount() {
        if (Apis.instance().chain_id.substr(0, 8) === "4018d784") { // Only fetch this when on BTS main net
            GatewayActions.fetchCoins();
            GatewayActions.fetchBridgeCoins();
        }
    }

    render() {
        let balanceAssets = this.props.balances.map(b => {
            return b && b.get("asset_type");
        }).filter(b => !!b);

        let ordersByAsset = this.props.orders.reduce((orders, o) => {
            let asset_id = o.getIn(["sell_price", "base", "asset_id"]);
            if (!orders[asset_id]) orders[asset_id] = 0;
            orders[asset_id] += parseInt(o.get("for_sale"), 10);
            return orders;
        }, {});

        for (let id in ordersByAsset) {
            if (balanceAssets.indexOf(id) === -1) {
                balanceAssets.push(id);
            }
        }

        return (
            <AccountOverview {...this.state} {...this.props} orders={ordersByAsset} balanceAssets={Immutable.List(balanceAssets)} />
        );
    };
}

export default BindToChainState(BalanceWrapper);
