pragma solidity ^0.5.11;

contract SUPPLYCHAIN
{
    
    enum State {Ready}
    struct ID
    {
        bytes cpu_id;
        bytes motherboard_id;
        bytes memory_id;
        bytes hdd_id;
        bytes ssd_id;
        bytes graphics_id;
        bytes battery_id;
        bytes service_tag;
        bool present;
        State state;
    }
    mapping(bytes => ID) private product_id;
    
    function new_model(bytes memory sn,bytes memory cid,bytes memory mid,bytes memory mmid,bytes memory hid,bytes memory sid,bytes memory gid,bytes memory bid,bytes memory stag) public 
    {
        product_id[sn].cpu_id=cid;
        product_id[sn].motherboard_id=mid;
        product_id[sn].memory_id=mmid;
        product_id[sn].hdd_id=hid;
        product_id[sn].ssd_id=sid;
        product_id[sn].graphics_id=gid;
        product_id[sn].battery_id=bid;
        product_id[sn].service_tag=stag;
        product_id[sn].present=true;
        product_id[sn].state=State.Ready;
    }
    
    function get_value1(bytes memory sn) public view returns(bytes memory,bytes memory,bytes memory,bytes memory)
    {
        require(product_id[sn].state==State.Ready);
        return(product_id[sn].cpu_id, product_id[sn].motherboard_id, product_id[sn].memory_id,product_id[sn].hdd_id );
    }
    function get_value2(bytes memory sn) public view returns(bytes memory,bytes memory,bytes memory,bytes memory)
    {
        require(product_id[sn].state==State.Ready);
        return(product_id[sn].ssd_id, product_id[sn].graphics_id, product_id[sn].battery_id, product_id[sn].service_tag);
    }
    
    function check(bytes memory sn) public view returns(bool)
    {
        if(product_id[sn].present==true)
            return true;
        return false;
    }
}