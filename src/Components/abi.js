import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('467c1a86-08d3-49bd-b8d8-7211127ca579', 'ropsten');
const web3 = new Web3(portis.provider);

var abi =[
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes",
				"name": "sn",
				"type": "bytes"
			}
		],
		"name": "get_value2",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes",
				"name": "sn",
				"type": "bytes"
			}
		],
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
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes",
				"name": "sn",
				"type": "bytes"
			}
		],
		"name": "get_value1",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
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
				"internalType": "bytes",
				"name": "sn",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "cid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "mid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "mmid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "hid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "sid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "gid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "bid",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "stag",
				"type": "bytes"
			}
		],
		"name": "new_model",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


var token = new web3.eth.Contract(abi, '0x50c1e9cf35a7ecee40057dd1c61c8f5e1ddeb175');
export default token;