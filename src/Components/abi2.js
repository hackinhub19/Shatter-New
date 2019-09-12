import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('467c1a86-08d3-49bd-b8d8-7211127ca579', 'ropsten');
const web3 = new Web3(portis.provider);

var abi=[
	{
		"constant": true,
		"inputs": [],
		"name": "check",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "name",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "reg",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "loc",
				"type": "bytes"
			}
		],
		"name": "new_registration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var token2 = new web3.eth.Contract(abi,'0xdadc346cd0d1273a907639a23827de5f4b604cdd');

export default token2;