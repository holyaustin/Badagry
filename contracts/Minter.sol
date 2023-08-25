// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract Minter is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
 
    // address owner;
    uint private monthly_value;
    address private owner;

    constructor() ERC721("Badagry Minter", "BADGY") {
    owner = payable(msg.sender);
    }

     /* Mints a File*/
    function createFile(string memory tokenURI ) public payable returns (uint) {
      _tokenIds.increment();
      uint256 newTokenId = _tokenIds.current();
      
      _mint(msg.sender, newTokenId);
      _setTokenURI(newTokenId, tokenURI);
      // createStorageItem(newTokenId);
      return newTokenId;
    }

    
    function withdraw(uint value) external {
        require(msg.sender == owner, "Address is not the owner");
        require(value <= address(this).balance, "Value higher than balance.");

        (bool success, ) = owner.call{value: value}("");
        require(success, "There was an error!");
    }

}