// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const NameOfContracts = buildModule("NameOfContracts", (m) => {

 const name = m.contract("Names");

 return { name };
});


module.exports = NameOfContracts;
