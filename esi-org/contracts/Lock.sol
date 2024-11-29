// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

contract Names {
 string private name;
 
 function setName (string memory _name) public {
 name = _name;
 }

 function getName () public view returns (string memory) {
 return name;
 }
}
