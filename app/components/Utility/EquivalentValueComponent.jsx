import React from "react";
import FormattedAsset from "./FormattedAsset";
import ChainTypes from "./ChainTypes";
import BindToChainState from "./BindToChainState";
import utils from "common/utils";
import { connect } from "alt-react";
import MarketsStore from "stores/MarketsStore";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import ReactTooltip from "react-tooltip";
import {MarketStatsCheck} from "../Utility/EquivalentPrice";

/**
 *  Given an asset amount, displays the equivalent value in baseAsset if possible
 *
 *  Expects three properties
 *  -'toAsset' which should be a asset id
 *  -'fromAsset' which is the asset id of the original asset amount
 *  -'amount' which is the amount to convert
 *  -'fullPrecision' boolean to tell if the amount uses the full precision of the asset
 */

class ValueComponent extends MarketStatsCheck {

    static propTypes = {
        toAsset: ChainTypes.ChainAsset.isRequired,
        fromAsset: ChainTypes.ChainAsset.isRequired,
        coreAsset: ChainTypes.ChainAsset.isRequired
    };

    static defaultProps = {
        toAsset: "1.3.0",
        fullPrecision: true,
        noDecimals: false,
        hide_asset: false,
        coreAsset: "1.3.0"
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ReactTooltip.rebuild();
    }

    shouldComponentUpdate(np) {
        return (
            super.shouldComponentUpdate(np) ||
            np.toAsset !== this.props.toAsset ||
            np.fromAsset !== this.props.fromAsset ||
            np.amount !== this.props.amount
        );
    }

    getValue() {
        let {amount, toAsset, fromAsset, coreAsset, fullPrecision, marketStats} = this.props;
        let toStats, fromStats;

        let toID = toAsset.get("id");
        let toSymbol = toAsset.get("symbol");
        let fromID = fromAsset.get("id");
        let fromSymbol = fromAsset.get("symbol");

        if (!fullPrecision) {
            amount = utils.get_asset_amount(amount, fromAsset);
        }

        if (coreAsset && marketStats) {
            let coreSymbol = coreAsset.get("symbol");

            toStats = marketStats.get(toSymbol + "_" + coreSymbol);
            fromStats = marketStats.get(fromSymbol + "_" + coreSymbol);
        }

        let price = utils.convertPrice(fromStats && fromStats.close ? fromStats.close : fromAsset, toStats && toStats.close ? toStats.close : toAsset, fromID, toID);

        return utils.convertValue(price, amount, fromAsset, toAsset);
    }

    render() {
        let {amount, toAsset, fromAsset, fullPrecision, marketStats, coreAsset} = this.props;
        let toStats, fromStats;

        let toID = toAsset.get("id");
        let toSymbol = toAsset.get("symbol");
        let fromID = fromAsset.get("id");
        let fromSymbol = fromAsset.get("symbol");

        if (!fullPrecision) {
            amount = utils.get_asset_amount(amount, fromAsset);
        }

        // console.log("marketStats:", marketStats.toJS());
        if (coreAsset && marketStats) {
            let coreSymbol = coreAsset.get("symbol");
            toStats = marketStats.get(toSymbol + "_" + coreSymbol);
            fromStats = marketStats.get(fromSymbol + "_" + coreSymbol);
        }

        let price = utils.convertPrice(fromStats && fromStats.close ? fromStats.close :
                                        fromID === "1.3.0" || fromAsset.has("bitasset") ? fromAsset : null,
                                        toStats && toStats.close ? toStats.close :
                                        (toID === "1.3.0" || toAsset.has("bitasset")) ? toAsset : null,
                                        fromID,
                                        toID);

        let eqValue = price ? utils.convertValue(price, amount, fromAsset, toAsset) : null;

        if (!eqValue && eqValue !== 0) {
            return <div className="tooltip inline-block" data-place="bottom" data-tip={counterpart.translate("tooltip.no_price")} style={{fontSize: "0.9rem"}}><Translate content="account.no_price" /></div>;
        }

        return <FormattedAsset hide_asset={this.props.hide_asset} noPrefix amount={eqValue} asset={toID} decimalOffset={toSymbol.indexOf("BTC") !== -1 ? 4 : this.props.noDecimals ? toAsset.get("precision") : 0}/>;
    }
}
ValueComponent = BindToChainState(ValueComponent, {keep_updating: true});

class EquivalentValueComponent extends React.Component {
    render() {
        return <ValueComponent {...this.props} />;
    }
}

EquivalentValueComponent = connect(EquivalentValueComponent, {
    listenTo() {
        return [MarketsStore];
    },
    getProps() {
        return {
            marketStats: MarketsStore.getState().allMarketStats
        };
    }
});

class BalanceValueComponent extends React.Component {

    static propTypes = {
        balance: ChainTypes.ChainObject.isRequired
    }

    render() {
        let amount = Number(this.props.balance.get("balance"));
        let fromAsset = this.props.balance.get("asset_type");

        return <EquivalentValueComponent hide_asset={this.props.hide_asset} amount={amount} fromAsset={fromAsset} noDecimals={true} toAsset={this.props.toAsset}/>;
    }
}
BalanceValueComponent = BindToChainState(BalanceValueComponent, {keep_updating: true});
export {EquivalentValueComponent, BalanceValueComponent};
