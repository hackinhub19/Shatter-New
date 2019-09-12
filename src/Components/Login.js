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
      var address=  await web3.eth.getAccounts()
            .then(accounts => {
                const address1 = accounts[0]
                return address1;
            })
        console.log(address);
        var bool = await token2.methods.check().call({from: address});
        console.log(bool);
        if(bool)
        {
            console.log('Inside ');

            ReactDOM.render(<Manufacturer companyaddress={address}/>, document.getElementById('root'));
        }
    }
    render() {
        return (
            <div>
                <Button primary className="loginbutton" onClick={this.handleClick}>Signin</Button>
            </div>
        )
    }
}

export default Login




//"0xC5494c6443eA56fdaab1262f51F57cD76EbB9d2f"
//"0x414243"
//"0x3132333441423541"
//"0x4368656e6e6169"