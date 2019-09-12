pragma solidity ^0.5.11;
contract Login
{
    struct details
    {
        bytes company_name;
        bytes reg_num;
        bytes plant_location;
        bool present;
    }
    
    mapping(address => details) company;
    
    function new_registration(address _add, bytes memory name, bytes memory reg, bytes memory loc) public
    {
        require(msg.sender == 0x8a4c2E87B5f73146A98D4075Bcfd6b4162848f43);
        company[_add].company_name=name;
        company[_add].reg_num=reg;
        company[_add].plant_location=loc;
        company[_add].present=true;
    }
    
    function check() public view returns(bool)
    {
        if(company[msg.sender].present==true)
            return true;
        return false;
    }
    
}