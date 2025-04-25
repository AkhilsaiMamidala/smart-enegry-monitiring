// // MetaMask and Contract Setup
// async function loadWeb3() {
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum);
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//   } else {
//     alert('MetaMask is not installed. Please install MetaMask to continue.');
//   }
// }

// let energyContract;
// const contractAddress = "0xd56eE8C83e9405C50b29a7635b2A384fEC28aCc9"; // Replace with your contract address
// const contractABI = [
//   {
//       "inputs": [
//           {
//               "internalType": "string",
//               "name": "_name",
//               "type": "string"
//           },
//           {
//               "internalType": "string",
//               "name": "_billId",
//               "type": "string"
//           },
//           {
//               "internalType": "string",
//               "name": "_houseAddress",
//               "type": "string"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_energyUsed",
//               "type": "uint256"
//           },
//           {
//               "internalType": "string",
//               "name": "_dateTime",
//               "type": "string"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_amountToPay",
//               "type": "uint256"
//           }
//       ],
//       "name": "saveEnergyBill",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint256",
//               "name": "_index",
//               "type": "uint256"
//           }
//       ],
//       "name": "getEnergyBill",
//       "outputs": [
//           {
//               "components": [
//                   {
//                       "internalType": "string",
//                       "name": "name",
//                       "type": "string"
//                   },
//                   {
//                       "internalType": "string",
//                       "name": "billId",
//                       "type": "string"
//                   },
//                   {
//                       "internalType": "string",
//                       "name": "houseAddress",
//                       "type": "string"
//                   },
//                   {
//                       "internalType": "uint256",
//                       "name": "energyUsed",
//                       "type": "uint256"
//                   },
//                   {
//                       "internalType": "string",
//                       "name": "dateTime",
//                       "type": "string"
//                   },
//                   {
//                       "internalType": "uint256",
//                       "name": "amountToPay",
//                       "type": "uint256"
//                   }
//               ],
//               "internalType": "struct SmartEnergy.EnergyBill",
//               "name": "",
//               "type": "tuple"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "energyBills",
//       "outputs": [
//           {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//           },
//           {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//           },
//           {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//           },
//           {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//           },
//           {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//           },
//           {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "name": "totalPayments",
//       "outputs": [
//           {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "anonymous": false,
//       "inputs": [
//           {
//               "indexed": true,
//               "internalType": "uint256",
//               "name": "billId",
//               "type": "uint256"
//           },
//           {
//               "indexed": true,
//               "internalType": "address",
//               "name": "sender",
//               "type": "address"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amountPaid",
//               "type": "uint256"
//           }
//       ],
//       "name": "BillPaid",
//       "type": "event"
//   }
// ];

// async function loadContract() {
//   const accounts = await web3.eth.getAccounts();
//   energyContract = new web3.eth.Contract(contractABI, contractAddress, { from: accounts[0] });
// }

// // Generate Random Energy Bill Data
// function getRandomEnergyBill() {
//   const names = ['Alice', 'Bob', 'Charlie'];
//   const houseAddresses = ['123 Elm St', '456 Oak Ave', '789 Maple Dr'];
//   const now = new Date();
//   const energyUsed = Math.floor(Math.random() * 500) + 50; // Random between 50 and 550 kWh
//   const amountToPay = (energyUsed * 0.1).toFixed(4); // Assume 0.1 ETH per kWh

//   return {
//     name: names[Math.floor(Math.random() * names.length)],
//     billId: `EB${Math.floor(1000 + Math.random() * 9000)}`, // Random ID
//     houseAddress: houseAddresses[Math.floor(Math.random() * houseAddresses.length)],
//     energyUsed,
//     dateTime: now.toLocaleString(),
//     amountToPay,
//   };
// }

// // Update Energy Bill Display
// function updateEnergyInfo(bill) {
//   document.getElementById('name').textContent = `Name: ${bill.name}`;
//   document.getElementById('billId').textContent = `Bill ID: ${bill.billId}`;
//   document.getElementById('houseAddress').textContent = `House Address: ${bill.houseAddress}`;
//   document.getElementById('energyUsed').textContent = `Energy Used: ${bill.energyUsed} kWh`;
//   document.getElementById('dateTime').textContent = `Date & Time: ${bill.dateTime}`;
//   document.getElementById('amountToPay').textContent = `Amount to Pay: ${bill.amountToPay} ETH`;
// }

// // Gate Control Logic
// document.getElementById('toggleSwitch').addEventListener('change', (e) => {
//   const status = document.getElementById('status');
//   if (e.target.checked) {
//     const bill = getRandomEnergyBill();
//     updateEnergyInfo(bill);
//     status.textContent = 'Status: Open';
//     document.getElementById('payBill').disabled = false;
//   } else {
//     status.textContent = 'Status: Closed';
//     document.getElementById('payBill').disabled = true;
//   }
// });

// // Save Energy Bill to Blockchain
// document.getElementById('payBill').addEventListener('click', async () => {
//   const accounts = await web3.eth.getAccounts();
//   const bill = {
//     name: document.getElementById('name').textContent.split(': ')[1],
//     billId: document.getElementById('billId').textContent.split(': ')[1],
//     houseAddress: document.getElementById('houseAddress').textContent.split(': ')[1],
//     energyUsed: parseInt(document.getElementById('energyUsed').textContent.split(': ')[1]),
//     dateTime: document.getElementById('dateTime').textContent.split(': ')[1],
//     amountToPay: parseFloat(document.getElementById('amountToPay').textContent.split(': ')[1]),
//   };

//   try {
//     const result = await energyContract.methods
//       .saveEnergyBill(
//         bill.name,
//         bill.billId,
//         bill.houseAddress,
//         bill.energyUsed,
//         bill.dateTime,
//         web3.utils.toWei(bill.amountToPay.toString(), 'ether')
//       )
//       .send({ from: accounts[0], value: web3.utils.toWei(bill.amountToPay.toString(), 'ether') });

//     alert(`Bill paid! Transaction Hash: ${result.transactionHash}`);
//   } catch (error) {
//     console.error(error);
//     alert('Transaction failed. Please try again.');
//   }
// });

// // Initialize
// window.onload = async () => {
//   await loadWeb3();
//   await loadContract();
// };






// MetaMask and Contract Setup
async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    alert('MetaMask is not installed. Please install MetaMask to continue.');
  }
}

let energyContract;
const contractAddress = "0xc8430Ea2323b6175Cf819d3040e59229ABeAE62A"; // Replace with your contract address
const contractABI = [
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_name",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "_billId",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "_houseAddress",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "_energyUsed",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "_dateTime",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "_amountToPay",
              "type": "uint256"
          }
      ],
      "name": "saveEnergyBill",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
          }
      ],
      "name": "getEnergyBill",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "billId",
                      "type": "string"
                  },
                  {
                      "internalType": "string",
                      "name": "houseAddress",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "energyUsed",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "dateTime",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountToPay",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct SmartEnergy.EnergyBill",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "energyBills",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "totalPayments",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "billId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountPaid",
              "type": "uint256"
          }
      ],
      "name": "BillPaid",
      "type": "event"
  }
];

async function loadContract() {
  const accounts = await web3.eth.getAccounts();
  energyContract = new web3.eth.Contract(contractABI, contractAddress, { from: accounts[0] });
}

// Generate Random Energy Bill Data
function getRandomEnergyBill() {
  const names = ['Alice', 'Bob', 'Charlie'];
  const houseAddresses = ['123 Elm St', '456 Oak Ave', '789 Maple Dr'];
  const now = new Date();
  const energyUsed = Math.floor(Math.random() * 500) + 50; // Random between 50 and 550 kWh
  const amountToPay = (energyUsed * 0.1).toFixed(4); // Assume 0.1 ETH per kWh

  // Get the last used name from localStorage
  const lastUsedName = localStorage.getItem('lastUsedName');

  // Filter out the last used name
  const availableNames = names.filter(name => name !== lastUsedName);

  // Select a new name randomly
  const selectedName = availableNames[Math.floor(Math.random() * availableNames.length)];

  // Save the selected name as the last used name in localStorage
  localStorage.setItem('lastUsedName', selectedName);

  return {
    name: selectedName,
    billId: `EB${Math.floor(1000 + Math.random() * 9000)}`, // Random ID
    houseAddress: houseAddresses[Math.floor(Math.random() * houseAddresses.length)],
    energyUsed,
    dateTime: now.toLocaleString(),
    amountToPay,
  };
}

// Update Energy Bill Display
function updateEnergyInfo(bill) {
  document.getElementById('name').textContent = `Name: ${bill.name}`;
  document.getElementById('billId').textContent = `Bill ID: ${bill.billId}`;
  document.getElementById('houseAddress').textContent = `House Address: ${bill.houseAddress}`;
  document.getElementById('energyUsed').textContent = `Energy Used: ${bill.energyUsed} kWh`;
  document.getElementById('dateTime').textContent = `Date & Time: ${bill.dateTime}`;
  document.getElementById('amountToPay').textContent = `Amount to Pay: ${bill.amountToPay} ETH`;
}

// Save Transaction History
function saveTransactionToHistory(bill, transactionHash) {
  const historyData = JSON.parse(localStorage.getItem('historyData')) || [];
  historyData.push({ ...bill, transactionHash });
  localStorage.setItem('historyData', JSON.stringify(historyData));
}

// Gate Control Logic
document.getElementById('toggleSwitch').addEventListener('change', (e) => {
  const status = document.getElementById('status');
  if (e.target.checked) {
    const bill = getRandomEnergyBill();
    updateEnergyInfo(bill);
    status.textContent = 'Status: Open';
    document.getElementById('payBill').disabled = false;
  } else {
    status.textContent = 'Status: Closed';
    document.getElementById('payBill').disabled = true;
  }
});

// Save Energy Bill to Blockchain
document.getElementById('payBill').addEventListener('click', async () => {
  const accounts = await web3.eth.getAccounts();
  const bill = {
    name: document.getElementById('name').textContent.split(': ')[1],
    billId: document.getElementById('billId').textContent.split(': ')[1],
    houseAddress: document.getElementById('houseAddress').textContent.split(': ')[1],
    energyUsed: parseInt(document.getElementById('energyUsed').textContent.split(': ')[1]),
    dateTime: document.getElementById('dateTime').textContent.split(': ')[1],
    amountToPay: parseFloat(document.getElementById('amountToPay').textContent.split(': ')[1]),
  };

  try {
    const result = await energyContract.methods
      .saveEnergyBill(
        bill.name,
        bill.billId,
        bill.houseAddress,
        bill.energyUsed,
        bill.dateTime,
        web3.utils.toWei(bill.amountToPay.toString(), 'ether')
      )
      .send({ from: accounts[0], value: web3.utils.toWei(bill.amountToPay.toString(), 'ether') });

    saveTransactionToHistory(bill, result.transactionHash);
    alert(`Bill paid! Transaction Hash: ${result.transactionHash}`);
  } catch (error) {
    console.error(error);
    alert('Transaction failed. Please try again.');
  }
});

// Initialize
window.onload = async () => {
  await loadWeb3();
  await loadContract();
};
