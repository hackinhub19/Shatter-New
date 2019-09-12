import React from 'react'
import { Form, Container, Divider, Button } from 'semantic-ui-react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
import '../CSS/signUp.css'
import Portis from '@portis/web3';
import Web3 from 'web3';
import token2 from './abi2'
import Topbar from './Topbar'
const portis = new Portis('467c1a86-08d3-49bd-b8d8-7211127ca579', 'ropsten');
const web3 = new Web3(portis.provider);



export default class SignUp extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            wallet_add: ''
        }
    }

    async componentDidMount() {
        await web3.eth.getAccounts()
            .then(accounts => {
                const address1 = accounts[0]
                this.setState({
                    wallet_add: address1
                })
            })
        console.log(this.state.wallet_add);
    }
    handleChange = (e, { value }) => this.setState({ value })
    selectCountry(val) {
        this.setState({ country: val });
    }
    handleSubmit = async e => {
        e.preventDefault();
        console.log(document.getElementById('country').value);
        await token2.methods.new_registration(document.getElementById('add').value, document.getElementById('name').value, document.getElementById('reg_num').value,
            document.getElementById('country')).send({ from: this.state.wallet_add }).on('transactionHash', function (hash) { console.log(hash) })
    }

    render() {
        const { value } = this.state;
        const { country, region } = this.state;
        return (
            <div className="head">
                <div className='topbar'>
                    Verify.

                </div>
                <div className="Logout">
                    <Button className="btn1">LogOut</Button>
                </div>
                <div className="admin">
                    <Button className="btn1">Admin</Button>
                </div>
                <div className="divider">
                    <Divider />
                </div>

                <div className="form">
                    <Container >
                        <Form >
                            <Form.Group widths='equal'>
                                <Form.Input fluid focus label='COMPANY NAME:' placeholder='Please enter your company name' id="name" />
                                <Form.Input fluid focus label='REGISTER NUMBER OF YOUR COMPANY' placeholder='Please enter a valid register number' id="reg_num" />
                            </Form.Group>
                            <Form.Group widths='equal' inline>
                                <label>ADDRESS:</label>
                                <Form.Input fluid label='PLACE' placeholder='street or layout' className='addressField' id="place" />
                                <Form.Input fluid label='CITY' placeholder='' className='addressField' id="city" />
                                <Form.Input fluid label='STATE' placeholder='Please enter State your company name' className='addressField' id="state" />
                                <CountryDropdown id="country"
                                    value={country}
                                    onChange={(val) => this.selectCountry(val)} />
                            </Form.Group>

                            <Form.TextArea label='Ethereum Address' id="add" placeholder='Please give describe the service you offer/products manucatured.' />
                            <Form.Button color='olive' onClick={this.handleSubmit}>Submit</Form.Button>

                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}

