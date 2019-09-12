import React, { PureComponent } from 'react'
import TopBar from './Components/Topbar'
import './CSS/main.css'
import { Input, Button, Header, Image, Table } from 'semantic-ui-react'
import processor from './Images/processor.png'
import token from './Components/abi'
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('467c1a86-08d3-49bd-b8d8-7211127ca579', 'ropsten');
const web3 = new Web3(portis.provider);

export class Mainpage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            wallet_add: '',
            cpu_id: 'Enter the Serial Number',
            motherboard_id: 'Enter the Serial Number',
            mm_id: 'Enter the Serial Number',

            hdd_id: 'Enter the Serial Number',
            ssd_id: 'Enter the Serial Number',
            graphics_id: 'Enter the Serial Number',
            battery_id: 'Enter the Serial Number',
            service_tag: 'Enter the Serial Number'
        }
    }

    async componentDidMount() {
        await web3.eth.getAccounts()
            .then(accounts => {
                const address1 = accounts[0]
                console.log(address1)
                this.setState({
                    wallet_add: address1
                })
            })
    }
    handle(event) {
        this.setState({
            data: event.target.value,
            // wallet_add: Promise.resolve(address)
        });
    }
    handleSubmit = (abc, def) => async e => {

        e.preventDefault();
        console.log(abc);
        console.log(def);
        var bufferText = Buffer.from(abc).toString('hex')
        const final = '0x'.concat('', bufferText);                    
        var bool= await token.methods.check(final).call({from: this.state.wallet_add});
        if(bool)
        {
        await token.methods.get_value1(final).call({ from: this.state.wallet_add })
            .then(result => {
                this.setState({
                    //cpu_id:Buffer(result[0], 'hex').toString(),
                    cpu_id: hex_to_ascii(result[0]),
                    motherboard_id: hex_to_ascii(result[1]),
                    mm_id: hex_to_ascii(result[2]),
                    hdd_id: hex_to_ascii(result[3])
                })
            })
        await token.methods.get_value2(final).call({ from: this.state.wallet_add })
            .then(result => {
                this.setState({
                    //cpu_id:Buffer(result[0], 'hex').toString(),
                    ssd_id: hex_to_ascii(result[0]),
                    graphics_id: hex_to_ascii(result[1]),
                    battery_id: hex_to_ascii(result[2]),
                    service_tag: hex_to_ascii(result[3])
                })
            })
        }
        else
        {
            console.log('Record not found');
        }
    }
    render() {


        return (
            <div className="background">
                <div>
                    <TopBar />
                </div>

                <div>
                    <div className="input">
                        <Input icon='pencil alternate' iconPosition="right" onChange={this.handle.bind(this)} placeholder="Enter device's Serial Number" fluid focus required />
                    </div>
                    <div className="button"><Button primary onClick={this.handleSubmit(this.state.data, this.state.wallet_add)}>Search</Button></div>
                </div>

                <div >
                    <Table basic='very' celled collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell className="head">Components</Table.HeaderCell>
                                <Table.HeaderCell className="head">Serial Number</Table.HeaderCell>
                                <Table.HeaderCell className="head">TimeStamp</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src={processor} rounded size='mini' />
                                        <Header.Content>
                                            CPU
              <Header.Subheader>Central Processing Unit</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.cpu_id}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/matthew.png' rounded size='small' />
                                        <Header.Content>
                                            Motherboard
              <Header.Subheader>Main Chipset</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.motherboard_id}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
                                        <Header.Content>
                                            RAM
              <Header.Subheader>Main Memory</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.mm_id}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                                        <Header.Content>
                                            HDD
              <Header.Subheader>Hard Disk</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.hdd_id}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                                        <Header.Content>
                                            SSD
              <Header.Subheader>Solid State Device</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.ssd_id}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                                        <Header.Content>
                                            Graphics Card
              <Header.Subheader>External GPU</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.graphics_id}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                                        <Header.Content>
                                            Service Tag
              <Header.Subheader>Service Number</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{this.state.service_tag}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}
function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

export default Mainpage
