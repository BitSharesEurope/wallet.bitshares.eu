import React from "react";
import {PropTypes} from "react";
import {FormattedDate} from "react-intl";
import Ps from "perfect-scrollbar";
import utils from "common/utils";
import Translate from "react-translate-component";
import PriceText from "../Utility/PriceText";
import TransitionWrapper from "../Utility/TransitionWrapper";
import AssetName from "../Utility/AssetName";
import Icon from "../Icon/Icon";
import { ChainStore } from "bitsharesjs/es";
import { LimitOrder, CallOrder } from "common/MarketClasses";

class TableHeader extends React.Component {

    render() {
        let {baseSymbol, quoteSymbol} = this.props;

        return (
            <thead>
                <tr>
                    <th style={{paddingLeft: 10, textAlign: this.props.leftAlign ? "left" : ""}}><Translate className="header-sub-title" content="exchange.price" /></th>
                    <th style={this.props.leftAlign ? {textAlign: "left"} : null}>{baseSymbol ? <span className="header-sub-title"><AssetName dataPlace="top" name={quoteSymbol} /></span> : null}</th>
                    <th style={this.props.leftAlign ? {textAlign: "left"} : null}>{baseSymbol ? <span className="header-sub-title"><AssetName dataPlace="top" name={baseSymbol} /></span> : null}</th>
                    <th style={{width: "28%", textAlign: this.props.leftAlign ? "left" : ""}}><Translate className="header-sub-title" content="transaction.expiration" /></th>
                    <th />
                </tr>
            </thead>
        );
    }
}

TableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

class OrderRow extends React.Component {

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.order.for_sale !== this.props.order.for_sale ||
            nextProps.order.id !== this.props.order.id ||
            nextProps.quote !== this.props.quote ||
            nextProps.base !== this.props.base
        );
    }

    render() {
        let {base, quote, order, showSymbols} = this.props;
        const isBid = order.isBid();
        const isCall = order.isCall();
        let tdClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

        let priceSymbol = showSymbols ? <span>{` ${base.get("symbol")}/${quote.get("symbol")}`}</span> : null;
        let valueSymbol = showSymbols ? " " + base.get("symbol") : null;
        let amountSymbol = showSymbols ? " " + quote.get("symbol") : null;

        return (
            <tr key={order.id}>
                <td className={tdClass} style={{paddingLeft: 10}}>
                    <PriceText price={order.getPrice()} base={base} quote={quote} />
                    {priceSymbol}
                </td>
                <td>{utils.format_number(order[!isBid ? "amountForSale" : "amountToReceive"]().getAmount({real: true}), quote.get("precision"))} {amountSymbol}</td>
                <td>{utils.format_number(order[!isBid ? "amountToReceive" : "amountForSale"]().getAmount({real: true}), base.get("precision"))} {valueSymbol}</td>
                <td style={{width: "28%"}}>
                    {isCall ? null : <FormattedDate
                        value={order.expiration}
                        format="short"
                    />}
                </td>
                <td className="text-center" style={{ padding: "2px 5px"}}>
                    {isCall ? null : <a style={{marginRight: 0}} className="order-cancel" onClick={this.props.onCancel}>
                        <Icon name="cross-circle" className="icon-14px" />
                    </a>}
                </td>
            </tr>
        );
        // }
    }
}

OrderRow.defaultProps = {
    showSymbols: false
};


class MyOpenOrders extends React.Component {

    constructor() {
        super();

        this._getOrders = this._getOrders.bind(this);
    }

    componentDidMount() {
        let asksContainer = this.refs.asks;
        if (asksContainer) Ps.initialize(asksContainer);
    }

    componentDidUpdate() {
        let asksContainer = this.refs.asks;
        if (asksContainer) Ps.update(asksContainer);
    }

    _getOrders() {
        const { currentAccount, base, quote } = this.props;
        const orders = currentAccount.get("orders"), call_orders = currentAccount.get("call_orders");
        const baseID = base.get("id"), quoteID = quote.get("id");
        const assets = {
            [base.get("id")]: {precision: base.get("precision")},
            [quote.get("id")]: {precision: quote.get("precision")}
        };
        let limitOrders = orders.map(order => {
            let o = ChainStore.getObject(order);
            if (!o) return null;
            let sellBase = o.getIn(["sell_price", "base", "asset_id"]), sellQuote = o.getIn(["sell_price", "quote", "asset_id"]);
            if (sellBase === baseID && sellQuote === quoteID ||
                sellBase === quoteID && sellQuote === baseID
            ) {
                return new LimitOrder(o.toJS(), assets, quote.get("id"));
            }
        }).filter(a => !!a).toArray();

        let callOrders = call_orders.map(order => {
            let o = ChainStore.getObject(order);
            if (!o) return null;
            let sellBase = o.getIn(["call_price", "base", "asset_id"]), sellQuote = o.getIn(["call_price", "quote", "asset_id"]);
            if (sellBase === baseID && sellQuote === quoteID ||
                sellBase === quoteID && sellQuote === baseID
            ) {
                return this.props.feedPrice ? new CallOrder(o.toJS(), assets, quote.get("id"), this.props.feedPrice) : null;
            }
        }).filter(a => !!a).filter(a => a.isMarginCalled()).toArray();

        return limitOrders.concat(callOrders);
    }

    render() {
        let {base, quote, quoteSymbol, baseSymbol} = this.props;
        if (!base || !quote) return null;

        const orders = this._getOrders();
        let emptyRow = <tr><td style={{textAlign: "center"}} colSpan="5"><Translate content="account.no_orders" /></td></tr>;

        let bids = orders.filter(a => {
            return a.isBid();
        }).sort((a, b) => {
            return b.getPrice() - a.getPrice();
        }).map(order => {
            let price = order.getPrice();
            return <OrderRow price={price} key={order.id} order={order} base={base} quote={quote} onCancel={this.props.onCancel.bind(this, order.id)}/>;
        });

        let asks = orders.filter(a => {
            return !a.isBid();
        }).sort((a, b) => {
            return a.getPrice() - b.getPrice();
        }).map(order => {
            let price = order.getPrice();
            return <OrderRow price={price} key={order.id} order={order} base={base} quote={quote} onCancel={this.props.onCancel.bind(this, order.id)}/>;
        });

        let rows = [];

        if (asks.length) {
            rows = rows.concat(asks);
        }

        if (bids.length) {
            rows = rows.concat(bids);
        }

        rows.sort((a, b) => {
            return a.props.price - b.props.price;
        });

        return (
            <div
                style={{marginBottom: "15px"}}
                key="open_orders"
                className={this.props.className}
            >

                <div className="exchange-bordered small-12" style={{height: 266}}>
                    <div className="exchange-content-header">
                        <Translate content="exchange.my_orders" />
                    </div>
                    <table className="table order-table table-hover">
                        <TableHeader leftAlign type="sell" baseSymbol={baseSymbol} quoteSymbol={quoteSymbol}/>
                    </table>

                    <div className="grid-block no-padding market-right-padding" ref="asks" style={{overflow: "hidden", maxHeight: 200}}>
                        <table style={{paddingBottom: 5}}  className="table order-table table-hover">
                            <TransitionWrapper
                                component="tbody"
                                transitionName="newrow"
                            >
                                {rows.length ? rows : emptyRow}
                            </TransitionWrapper>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

MyOpenOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

MyOpenOrders.propTypes = {
    base: PropTypes.object.isRequired,
    quote: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired,
    quoteSymbol: PropTypes.string.isRequired,
    baseSymbol: PropTypes.string.isRequired
};

export { OrderRow, TableHeader, MyOpenOrders };
