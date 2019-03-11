import React, {Component} from "react";
import Translate from "react-translate-component";
import {
    Input,
    Card,
    Col,
    Row,
    Button,
    Switch,
    Tooltip,
    Icon,
    Table
} from "bitshares-ui-style-guide";
import AccountSelector from "../Account/AccountSelector";
import counterpart from "counterpart";
import AccountStore from "stores/AccountStore";
import {ChainStore} from "bitsharesjs";
import AmountSelector from "../Utility/AmountSelector";
import {Asset} from "common/MarketClasses";
import utils from "common/utils";
import {
    checkFeeStatusAsync,
    checkBalance,
    shouldPayFeeWithAssetAsync,
    estimateFeeAsync
} from "common/trxHelper";
import BalanceComponent from "../Utility/BalanceComponent";
import AccountActions from "actions/AccountActions";
import ApplicationApi from "../../api/ApplicationApi";
import DirectDebitModal from "../Modal/DirectDebitModal";

/* 
    table like view with "+" button
    lower component will be with some descriptive text and explanations.
*/

export default class DirectDebit extends Component {
    constructor() {
        super();
        this.state = {
            from_name: "",
            to_name: "",
            from_account: null,
            to_account: null,

            amount_counter: [],
            amount_index: 0,

            proposal_fee: 0,
            isModalVisible: false
        };
    }

    componentWillMount() {
        let currentAccount = AccountStore.getState().currentAccount;
        if (!this.state.from_name) this.setState({from_name: currentAccount});
        estimateFeeAsync("proposal_create").then(fee => {
            this.setState({
                proposal_fee: new Asset({amount: fee}).getAmount({real: true})
            });
        });
        // for peer 1 and peer 2 there is also calculation of memo cost (no memo set atm)
        estimateFeeAsync("transfer").then(fee => {
            this.setState({
                transfer_fee: new Asset({amount: fee}).getAmount({real: true})
            });
        });
    }

    showModal = () => {
        this.setState({
            isModalVisible: true
        });
    };

    hideModal = () => {
        this.setState({
            isModalVisible: false
        });
    };

    _onFilter = e => {
        // TODO:
        e.preventDefault();
    };

    render() {
        const {isModalVisible} = this.state;
        console.log("isModalVisible", isModalVisible);

        let smallScreen = window.innerWidth < 850 ? true : false;

        const dataSource = [
            {
                key: "1",
                id: 1,
                type: "receiver",
                authorized: "twat124",
                limit: "1000TEST",
                until: JSON.stringify(new Date()),
                available: "10000TEST"
            },
            {
                key: "2",
                id: 2,
                type: "giver",
                authorized: "twat123",
                limit: "0TEST",
                until: JSON.stringify(new Date()),
                available: "10000TEST"
            }
        ];

        const columns = [
            {
                title: "#",
                dataIndex: "id",
                key: "id"
            },
            {
                title: "Type",
                dataIndex: "type",
                key: "type"
            },
            {
                title: "Authorized",
                dataIndex: "authorized",
                key: "authorized"
            },
            {
                title: "Limit",
                dataIndex: "limit",
                key: "limit"
            },
            {
                title: "Until",
                dataIndex: "until",
                key: "until"
            },
            {
                title: "Available",
                dataIndex: "available",
                key: "available"
            },
            {
                title: "Actions",
                dataIndex: "action",
                key: "action",
                render: (text, record) => {
                    if (record.type) {
                        return record.type === "giver" ? (
                            <span>
                                <Button style={{marginRight: "10px"}}>
                                    Cancel
                                </Button>
                                <Button>Update</Button>
                            </span>
                        ) : (
                            <span>
                                <Button>Collect</Button>
                            </span>
                        );
                    } else {
                        return null;
                    }
                }
            }
        ];

        return (
            <Card>
                <Row>
                    <Col span={24} style={{padding: "10px"}}>
                        {/* TABLE HEADER */}
                        <div
                            style={{
                                marginBottom: "30px"
                            }}
                        >
                            <Input
                                placeholder={counterpart.translate(
                                    "explorer.witnesses.filter_by_name"
                                )}
                                onChange={this._onFilter}
                                style={{
                                    width: "200px",
                                    marginRight: "30px"
                                }}
                                addonAfter={<Icon type="search" />}
                            />
                            <Button onClick={this.showModal}>
                                {counterpart.translate(
                                    "showcases.direct_debit.create_new_mandate"
                                )}
                            </Button>
                        </div>

                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false}
                        />
                    </Col>
                </Row>

                <DirectDebitModal
                    isModalVisible={isModalVisible}
                    hideModal={this.hideModal}
                />
            </Card>
        );
    }
}
