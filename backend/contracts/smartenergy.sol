// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartEnergy {
    struct EnergyBill {
        string name;
        string billId;
        string houseAddress;
        uint energyUsed; // in kWh
        string dateTime;
        uint amountToPay; // in wei
    }

    EnergyBill[] public energyBills;
    mapping(address => uint) public totalPayments;

    event BillPaid(uint indexed billId, address indexed sender, uint amountPaid);

    function saveEnergyBill(
        string memory _name,
        string memory _billId,
        string memory _houseAddress,
        uint _energyUsed,
        string memory _dateTime,
        uint _amountToPay
    ) public payable {
        require(msg.value == _amountToPay, "Incorrect payment amount");
        energyBills.push(EnergyBill(_name, _billId, _houseAddress, _energyUsed, _dateTime, _amountToPay));
        totalPayments[msg.sender] += msg.value;

        emit BillPaid(energyBills.length - 1, msg.sender, msg.value);
    }

    function getEnergyBill(uint _index) public view returns (EnergyBill memory) {
        require(_index < energyBills.length, "Invalid bill index");
        return energyBills[_index];
    }
}
