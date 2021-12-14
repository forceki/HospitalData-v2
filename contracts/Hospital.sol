pragma solidity >= 0.5.0;

contract Hospital {
    uint public index = 0;
    mapping(uint => data)  public Datas;

    struct data{
        uint id;
        string nama;
        string umur;
        string email;
        string nik;
        string alamat;
        string penyakit;
        address owner;
    }

    event InsertData(uint id, string nama, string umur, string email, string nik, string alamat, string penyakit, address owner);


    function addData(string memory _nama, string memory _umur, string memory _email, string memory _nik, string memory _alamat,  string memory _penyakit) public {
        require(bytes(_penyakit).length > 0, "masi kosong");
        index++;
        Datas[index] = data(index,_nama,_umur,_email,_nik,_alamat,_penyakit,msg.sender);
        emit InsertData(index, _nama, _umur, _email,_nik,_alamat, _penyakit, msg.sender);
    }



}