import React from "react";
import Translate from "react-translate-component";
import {saveAs} from "file-saver";
import Operation from "../Blockchain/Operation";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import utils from "common/utils";
import {ChainTypes as grapheneChainTypes, FetchChain} from "bitsharesjs";
import ps from "perfect-scrollbar";
import counterpart from "counterpart";
import Icon from "../Icon/Icon";
import cnames from "classnames";
import PropTypes from "prop-types";
import PaginatedList from "../Utility/PaginatedList";
const {operations} = grapheneChainTypes;
const alignLeft = {textAlign: "left"};
import report from "bitshares-report";
import LoadingIndicator from "../LoadingIndicator";
import {Tooltip} from "bitshares-ui-style-guide";
const ops = Object.keys(operations);

function compareOps(b, a) {
    if (a.block_num === b.block_num) {
        return a.virtual_op - b.virtual_op;
    } else {
        return a.block_num - b.block_num;
    }
}

// function textContent(n) {
//     return n ? `"${n.textContent.replace(/[\s\t\r\n]/gi, " ")}"` : "";
// }

class RecentTransactions extends React.Component {
    static propTypes = {
        accountsList: ChainTypes.ChainAccountsList.isRequired,
        compactView: PropTypes.bool,
        limit: PropTypes.number,
        maxHeight: PropTypes.number,
        fullHeight: PropTypes.bool,
        showFilters: PropTypes.bool
    };

    static defaultProps = {
        limit: 25,
        maxHeight: 500,
        fullHeight: false,
        showFilters: false
    };

    constructor(props) {
        super();
        this.state = {
            limit: props.limit,
            fetchingAccountHistory: false,
            headerHeight: 85,
            filter: "all",
            accountHistoryError: false
        };
    }

    componentDidMount() {
        if (!this.props.fullHeight) {
            let t = this.refs.transactions;
            ps.initialize(t);

            this._setHeaderHeight();
        }
    }

    _setHeaderHeight() {
        let height = this.refs.header.offsetHeight;

        if (height !== this.state.headerHeight) {
            this.setState({
                headerHeight: height
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            !utils.are_equal_shallow(
                this.props.accountsList,
                nextProps.accountsList
            )
        )
            return true;
        if (this.props.maxHeight !== nextProps.maxHeight) return true;
        if (this.state.headerHeight !== nextState.headerHeight) return true;
        if (this.state.filter !== nextState.filter) return true;
        if (this.props.customFilter) {
            if (
                !utils.are_equal_shallow(
                    this.props.customFilter.fields,
                    nextProps.customFilter.fields
                ) ||
                !utils.are_equal_shallow(
                    this.props.customFilter.values,
                    nextProps.customFilter.values
                )
            ) {
                return true;
            }
        }

        if (this.props.maxHeight !== nextProps.maxHeight) return true;
        if (
            nextState.limit !== this.state.limit ||
            nextState.fetchingAccountHistory !==
                this.state.fetchingAccountHistory
        )
            return true;
        for (let key = 0; key < nextProps.accountsList.length; ++key) {
            let npa = nextProps.accountsList[key];
            let nsa = this.props.accountsList[key];
            if (npa && nsa && npa.get("history") !== nsa.get("history"))
                return true;
        }
        return false;
    }

    _onIncreaseLimit() {
        this.setState({
            limit: this.state.limit + 30
        });
    }

    _getHistory(accountsList, filterOp, customFilter) {
        let history = [];
        let seen_ops = new Set();
        for (let account of accountsList) {
            if (account) {
                let h = account.get("history");
                if (h)
                    history = history.concat(
                        h
                            .toJS()
                            .filter(
                                op =>
                                    !seen_ops.has(op.id) && seen_ops.add(op.id)
                            )
                    );
            }
        }
        if (filterOp) {
            history = history.filter(a => {
                return a.op[0] === operations[filterOp];
            });
        }

        if (customFilter) {
            history = history.filter(a => {
                let finalValue = customFilter.fields.reduce((final, filter) => {
                    switch (filter) {
                        case "asset_id":
                            return (
                                final &&
                                a.op[1]["amount"][filter] ===
                                    customFilter.values[filter]
                            );
                            break;
                        default:
                            return (
                                final &&
                                a.op[1][filter] === customFilter.values[filter]
                            );
                            break;
                    }
                }, true);
                return finalValue;
            });
        }
        return history;
    }

    _getAccountHistoryES(account_id, limit, start) {
        var esNode = "https://wrapper.elasticsearch.bitshares.ws";

        console.log(
            "query",
            esNode +
                "/get_account_history?account_id=" +
                account_id +
                "&from_=" +
                start +
                "&size=" +
                limit +
                "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
        );
        return new Promise(function(resolve, reject) {
            fetch(
                esNode +
                    "/get_account_history?account_id=" +
                    account_id +
                    "&from_=" +
                    start +
                    "&size=" +
                    limit +
                    "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
            )
                .then(res => res.json())
                .then(result => {
                    var ops = result.map(r => {
                        return {
                            id: r.account_history.operation_id,
                            op: {
                                type: r.operation_type,
                                data: r.operation_history.op_object
                            },
                            result: JSON.parse(
                                r.operation_history.operation_result
                            ),
                            block_num: r.block_data.block_num,
                            block_time: r.block_data.block_time + "Z"
                        };
                    });
                    resolve(ops);
                })
                .catch(err => {
                    console.warn("query failed", err);
                    resolve([]);
                });
        });
    }

    async _generateCSV() {
        if (__DEV__) {
            console.log("intializing fetching of ES data");
        }
        this.setState({fetchingAccountHistory: true});
        let start = 0,
            limit = 150;
        let account = this.props.accountsList[0].get("id");
        let accountName = (await FetchChain("getAccount", account)).get("name");
        let recordData = {};

        function pad(number, length) {
            let str = "" + number;
            while (str.length < length) {
                str = "0" + str;
            }
            return str;
        }

        while (true) {
            let res = await this._getAccountHistoryES(account, limit, start);
            if (!res.length) break;

            await report.resolveBlockTimes(res);

            /* Before parsing results we need to know the asset info (precision) */
            await report.resolveAssets(res);

            res.map(function(record) {
                const trx_id = record.id;
                // let timestamp = api.getBlock(record.block_num);
                const type = ops[record.op.type];
                const data = record.op.data;

                switch (type) {
                    case "vesting_balance_withdraw":
                        data.amount = data.amount_;
                        break;

                    case "transfer":
                        data.amount = data.amount_;
                        break;
                }
                switch (type) {
                    default:
                        recordData[trx_id] = {
                            timestamp: new Date(record.block_time),
                            type,
                            data
                        };
                }
            });

            start += res.length;
        }
        if (!Object.keys(recordData).length) {
            return this.setState({
                fetchingAccountHistory: false,
                accountHistoryError: true
            });
        }
        recordData = report.groupEntries(recordData);
        let parsedData = report.parseData(recordData, account, accountName);

        let formatDate = function(d) {
            return (
                ("0" + d.getDate()).slice(-2) +
                "." +
                ("0" + (d.getMonth() + 1)).slice(-2) +
                "." +
                d.getFullYear() +
                " " +
                ("0" + d.getHours()).slice(-2) +
                ":" +
                ("0" + d.getMinutes()).slice(-2) +
                ":" +
                ("0" + d.getSeconds()).slice(-2) +
                " GMT" +
                ((d.getTimezoneOffset() < 0 ? "+" : "-") + // Note the reversed sign!
                    pad(
                        parseInt(
                            Math.floor(Math.abs(d.getTimezoneOffset() / 60))
                        ),
                        2
                    ) +
                    pad(Math.abs(d.getTimezoneOffset() % 60), 2))
            );
        };

        let csvString = "";
        for (let line of parsedData) {
            if (line.length >= 11 && line[10] instanceof Date) {
                line[10] = formatDate(line[10]);
            }
            csvString += line.join(",") + "\n";
        }
        let blob = new Blob([csvString], {type: "text/csv;charset=utf-8"});
        let today = new Date();
        saveAs(
            blob,
            "bitshares-account-history-" +
                accountName +
                "-" +
                today.getFullYear() +
                "-" +
                ("0" + (today.getMonth() + 1)).slice(-2) +
                "-" +
                ("0" + today.getDate()).slice(-2) +
                "-" +
                ("0" + today.getHours()).slice(-2) +
                ("0" + today.getMinutes()).slice(-2) +
                ".csv"
        );
        this.setState({
            fetchingAccountHistory: false,
            accountHistoryError: null
        });
    }

    _onChangeFilter(e) {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        let {
            accountsList,
            compactView,
            filter,
            customFilter,
            style,
            maxHeight
        } = this.props;
        let {limit, headerHeight} = this.state;
        let current_account_id =
            accountsList.length === 1 && accountsList[0]
                ? accountsList[0].get("id")
                : null;
        let history = this._getHistory(
            accountsList,
            this.props.showFilters && this.state.filter !== "all"
                ? this.state.filter
                : filter,
            customFilter
        ).sort(compareOps);
        let historyCount = history.length;

        style = style ? style : {width: "100%", height: "100%"};

        let options = null;
        if (true || this.props.showFilters) {
            options = [
                "all",
                "transfer",
                "limit_order_create",
                "limit_order_cancel",
                "fill_order",
                "account_create",
                "account_update",
                "asset_create",
                "witness_withdraw_pay",
                "vesting_balance_withdraw"
            ].map(type => {
                return (
                    <option value={type} key={type}>
                        {counterpart.translate("transaction.trxTypes." + type)}
                    </option>
                );
            });
        }

        let hideFee = false;

        let display_history = history.length
            ? history.slice(0, limit).map(o => {
                  return (
                      <Operation
                          includeOperationId={true}
                          operationId={o.id}
                          style={alignLeft}
                          key={o.id}
                          op={o.op}
                          result={o.result}
                          txIndex={o.trx_in_block}
                          block={o.block_num}
                          current={current_account_id}
                          hideFee={hideFee}
                          inverted={false}
                          hideOpLabel={compactView}
                          fullDate={true}
                      />
                  );
              })
            : [
                  <tr key="no_recent">
                      <td colSpan={compactView ? "2" : "3"}>
                          <Translate content="operation.no_recent" />
                      </td>
                  </tr>
              ];
        let action = (
            <tr className="total-value" key="total_value">
                <td style={{textAlign: "center"}}>&nbsp;</td>
                <td />
                <td />
                <td />
                <td />
            </tr>
        );

        return (
            <div className="recent-transactions no-overflow" style={style}>
                <div className="generic-bordered-box">
                    {this.props.dashboard ? null : (
                        <div ref="header">
                            <div className="block-content-header">
                                <span>
                                    {this.props.title ? (
                                        this.props.title
                                    ) : (
                                        <Translate content="account.recent" />
                                    )}
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="header-selector">
                        <div className="selector">
                            <div className={cnames("inline-block")}>
                                {this.props.showFilters ? (
                                    <Tooltip
                                        placement="bottom"
                                        title={counterpart.translate(
                                            "tooltip.filter_ops"
                                        )}
                                    >
                                        <select
                                            style={{
                                                paddingTop: 5,
                                                width: "auto"
                                            }}
                                            className="bts-select no-margin"
                                            value={this.state.filter}
                                            onChange={this._onChangeFilter.bind(
                                                this
                                            )}
                                        >
                                            {options}
                                        </select>
                                    </Tooltip>
                                ) : null}
                            </div>
                            {historyCount > 0 ? (
                                <Tooltip
                                    placement="bottom"
                                    title={counterpart.translate(
                                        "transaction.csv_tip"
                                    )}
                                >
                                    <a
                                        className="inline-block"
                                        onClick={this._generateCSV.bind(this)}
                                        style={{marginLeft: "1rem"}}
                                    >
                                        <Icon name="excel" size="1_5x" />
                                    </a>
                                </Tooltip>
                            ) : null}
                        </div>
                        {this.state.accountHistoryError && (
                            <div
                                className="has-error"
                                style={{paddingLeft: "0.75rem"}}
                            >
                                <Translate content="account.history_error" />
                            </div>
                        )}
                    </div>
                    <div
                        className="box-content grid-block no-margin"
                        style={
                            !this.props.fullHeight
                                ? {
                                      maxHeight: maxHeight - headerHeight
                                  }
                                : null
                        }
                        ref="transactions"
                    >
                        <PaginatedList
                            withTransition
                            className={
                                "table table-striped " +
                                (compactView ? "compact" : "") +
                                (this.props.dashboard
                                    ? " dashboard-table table-hover"
                                    : "")
                            }
                            header={
                                <tr>
                                    <th
                                        className="column-hide-tiny"
                                        style={alignLeft}
                                    >
                                        <Translate content="account.transactions.id" />
                                    </th>
                                    <th
                                        className="column-hide-tiny"
                                        style={alignLeft}
                                    >
                                        <Translate content="account.transactions.type" />
                                    </th>
                                    <th style={alignLeft}>
                                        <Translate content="account.transactions.info" />
                                    </th>
                                    {!hideFee && (
                                        <th style={alignLeft}>
                                            <Translate content="account.transactions.fee" />
                                        </th>
                                    )}
                                    <th>
                                        <Translate content="account.transactions.time" />
                                    </th>
                                </tr>
                            }
                            rows={display_history}
                            label="utility.total_x_operations"
                            extraRow={action}
                        />
                    </div>
                    {this.state.fetchingAccountHistory && <LoadingIndicator />}
                </div>
            </div>
        );
    }
}
RecentTransactions = BindToChainState(RecentTransactions);

class TransactionWrapper extends React.Component {
    static propTypes = {
        asset: ChainTypes.ChainAsset.isRequired,
        to: ChainTypes.ChainAccount.isRequired,
        fromAccount: ChainTypes.ChainAccount.isRequired
    };

    static defaultProps = {
        asset: "1.3.0"
    };

    render() {
        return (
            <span className="wrapper">{this.props.children(this.props)}</span>
        );
    }
}
TransactionWrapper = BindToChainState(TransactionWrapper);

export {RecentTransactions, TransactionWrapper};
