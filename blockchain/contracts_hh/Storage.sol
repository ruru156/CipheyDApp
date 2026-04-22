// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {

    struct Record {
        string encryptedText;
        string decryptedText;
        address user;
        uint timestamp;
    }

    Record[] public records;

    event Stored(address user, string encryptedText, string decryptedText);

    function storeResult(string memory _enc, string memory _dec) public {
        records.push(Record(_enc, _dec, msg.sender, block.timestamp));
        emit Stored(msg.sender, _enc, _dec);
    }

    function getCount() public view returns (uint) {
        return records.length;
    }
}