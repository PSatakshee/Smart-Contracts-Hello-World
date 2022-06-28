//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
contract HelloWorld
{
    event messagechanged ( string oldmsg, string newmsg);
    string public message;
    constructor ( string memory firstmsg)
    {
        message = firstmsg;
    }
    function update( string memory newmessage) public
    {
        string memory oldmsg = message;
        message = newmessage;
        emit messagechanged(oldmsg, newmessage);
    }
}