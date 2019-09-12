import React, { PureComponent } from 'react'
import '../CSS/login.css'
import { Button } from 'semantic-ui-react'
import token2 from './abi2'
import ReactDOM from 'react-dom';

import Portis from '@portis/web3';

import Manufacturer from './manufacturer'
import Web3 from 'web3';
const portis = new Portis('467c1a86-08d3-49bd-b8d8-7211127ca579', 'ropsten');
const web3 = new Web3(portis.provider);

export class Login extends PureComponent {
    constructor() {
        super();
    }

    handleClick = async e => {
        e.preventDefault();
        var address = await web3.eth.getAccounts()
            .then(accounts => {
                const address1 = accounts[0]
                return address1;
            })
        console.log(address);
        var bool = await token2.methods.check().call({ from: address });
        console.log(bool);
        if (bool) {
            console.log('Inside ');

            ReactDOM.render(<Manufacturer company={address}/>, document.getElementById('root'));
        }
    }
    render() {
        return (
            <div className="abc">
                <div className="ui landing-image fluid container">
                    <p className="heading">Verify.</p>
                    <div className="btn">
                    <Button primary className="loginbutton" onClick={this.handleClick} >SIGN IN</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login
