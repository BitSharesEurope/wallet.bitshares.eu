import React from "react";
import {Link} from "react-router";
import Translate from "react-translate-component";
import { isIncognito } from "feature_detect";

export default class LoginSelector extends React.Component {

    constructor(props){
        super(props);

        this.state = {};
    }

    componentWillMount(){
        isIncognito((incognito)=>{
            this.setState({incognito});
        });
    }

    onSelect(route) {
        this.props.router.push("/create-account/" + route);
    }

    render() {
        if (this.props.children) {
            return this.props.children;
        }
        return (
            <div className="grid-content" style={{paddingTop: 30}}>
                <h2 className="text-center"><Translate content="wallet.login_type" /></h2>

                <div className="grid-block no-margin no-padding vertical medium-horizontal no-overflow login-selector">

                    {this.state.incognito ? null : <div className="box small-12 medium-5 large-4" onClick={this.onSelect.bind(this, "wallet")}>
                        <div className="block-content-header" style={{position: "relative"}}>
                            <Translate content="wallet.wallet_model" component="h4" />
                        </div>
                        <div className="box-content">
                            <Translate content="wallet.wallet_model_1" component="p" />
                            <Translate content="wallet.wallet_model_2" component="p" />

                            <Translate unsafe content="wallet.wallet_model_3" component="ul" />
                        </div>
                        <div className="button"><Link to="/create-account/wallet"><Translate content="wallet.use_wallet" /></Link></div>

                    </div>}

                    <div className="box small-12 medium-5 large-4 vertical" onClick={this.onSelect.bind(this, "password")}>
                        <div className="block-content-header" style={{position: "relative"}}>
                            <Translate content="wallet.password_model" component="h4" />
                        </div>
                        <div className="box-content">
                            <Translate content="wallet.password_model_1" component="p" />
                            <Translate content="wallet.password_model_2" unsafe component="p" />

                            <Translate unsafe content="wallet.password_model_3" component="ul" />
                        </div>
                        <div className="button"><Link to="/create-account/password"><Translate content="wallet.use_password" /></Link></div>
                    </div>
                </div>
            </div>
        );
    }
}
