// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 3000;

// // In-memory data storage
// let energyBills = []; // Store energy bill data entries

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, '../frontend')));

// // Serve the main frontend file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
// });

// // API Endpoint to fetch all energy bills
// app.get('/energyBills', (req, res) => {
//     res.json(energyBills);
// });

// // API Endpoint to add a new energy bill
// app.post('/addEnergyBill', (req, res) => {
//     const { name, billId, houseAddress, energyUsed, dateTime, amountToPay } = req.body;

//     // Validate input
//     if (!name || !billId || !houseAddress || !energyUsed || !dateTime || !amountToPay) {
//         return res.status(400).send('All fields (name, billId, houseAddress, energyUsed, dateTime, amountToPay) must be provided.');
//     }

//     // Create new energy bill entry
//     const newEnergyBill = {
//         name,
//         billId,
//         houseAddress,
//         energyUsed,
//         dateTime,
//         amountToPay,
//         addedAt: new Date() // Timestamp for when the entry was added
//     };

//     // Add the entry to the data array
//     energyBills.push(newEnergyBill);

//     res.json({
//         message: 'Energy bill added successfully!',
//         energyBill: newEnergyBill,
//     });
// });

// // API Endpoint to fetch a specific energy bill by bill ID
// app.get('/energyBills/:billId', (req, res) => {
//     const { billId } = req.params;
//     const energyBill = energyBills.find(bill => bill.billId === billId);

//     if (energyBill) {
//         res.json(energyBill);
//     } else {
//         res.status(404).send('Energy bill not found.');
//     }
// });

// // API Endpoint to generate random energy bill data
// app.get('/generateRandomEnergyBill', (req, res) => {
//     const names = ['Alice', 'Bob', 'Charlie'];
//     const houseAddresses = ['123 Elm St', '456 Oak Ave', '789 Maple Dr'];
//     const now = new Date();
//     const energyUsed = Math.floor(Math.random() * 500) + 50; // Random between 50 and 550 kWh
//     const amountToPay = (energyUsed * 0.1).toFixed(4); // Assume 0.1 ETH per kWh

//     const randomBill = {
//         name: names[Math.floor(Math.random() * names.length)],
//         billId: `EB${Math.floor(1000 + Math.random() * 9000)}`, // Random ID
//         houseAddress: houseAddresses[Math.floor(Math.random() * houseAddresses.length)],
//         energyUsed,
//         dateTime: now.toLocaleString(),
//         amountToPay,
//     };

//     res.json(randomBill);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });



const express = require('express');
const cors = require('cors');
const path = require('path');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Twilio configuration
const accountSid = 'ACef1eb4bee25d97b7fed17e28108e708a'; // Replace with your Twilio Account SID
const authToken = 'bcde2d3be01c753c749202d26c690481';   // Replace with your Twilio Auth Token
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = '+12183093909'; // Replace with your Twilio phone number
const recipientPhoneNumber = '+917013745445'; // Replace with the recipient's phone number

// In-memory data storage
let energyBills = []; // Store energy bill data entries

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve the main frontend file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// API Endpoint to fetch all energy bills
app.get('/energyBills', (req, res) => {
    res.json(energyBills);
});

// API Endpoint to add a new energy bill
app.post('/addEnergyBill', (req, res) => {
    const { name, billId, houseAddress, energyUsed, dateTime, amountToPay } = req.body;

    // Validate input
    if (!name || !billId || !houseAddress || !energyUsed || !dateTime || !amountToPay) {
        return res.status(400).send('All fields (name, billId, houseAddress, energyUsed, dateTime, amountToPay) must be provided.');
    }

    // Create new energy bill entry
    const newEnergyBill = {
        name,
        billId,
        houseAddress,
        energyUsed,
        dateTime,
        amountToPay,
        addedAt: new Date() // Timestamp for when the entry was added
    };

    // Add the entry to the data array
    energyBills.push(newEnergyBill);

    res.json({
        message: 'Energy bill added successfully!',
        energyBill: newEnergyBill,
    });
});

// API Endpoint to fetch a specific energy bill by bill ID
app.get('/energyBills/:billId', (req, res) => {
    const { billId } = req.params;
    const energyBill = energyBills.find(bill => bill.billId === billId);

    if (energyBill) {
        res.json(energyBill);
    } else {
        res.status(404).send('Energy bill not found.');
    }
});

// API Endpoint to generate random energy bill data
app.get('/generateRandomEnergyBill', (req, res) => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const houseAddresses = ['123 Elm St', '456 Oak Ave', '789 Maple Dr'];
    const now = new Date();
    const energyUsed = Math.floor(Math.random() * 500) + 50; // Random between 50 and 550 kWh
    const amountToPay = (energyUsed * 0.1).toFixed(4); // Assume 0.1 ETH per kWh

    const randomBill = {
        name: names[Math.floor(Math.random() * names.length)],
        billId: `EB${Math.floor(1000 + Math.random() * 9000)}`, // Random ID
        houseAddress: houseAddresses[Math.floor(Math.random() * houseAddresses.length)],
        energyUsed,
        dateTime: now.toLocaleString(),
        amountToPay,
    };

    res.json(randomBill);
});

// Function to send Twilio SMS
const sendTwilioSMS = () => {
    const now = new Date().toLocaleString();
    const paymentLink = `http://localhost:${port}`;
    const message = `Hello! Your energy bill is ready. Visit ${paymentLink} to pay your bill. Date: ${now}`;

    twilioClient.messages
        .create({
            body: message,
            from: twilioPhoneNumber,
            to: recipientPhoneNumber,
        })
        .then(message => {
            console.log(`SMS sent: ${message.sid}`);
        })
        .catch(err => {
            console.error('Error sending SMS:', err);
        });
};

// Schedule SMS notification every minute
setInterval(sendTwilioSMS, 60 * 1000); // 60 seconds interval

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
