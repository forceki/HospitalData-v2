import React, { Component } from "react";
import Sidebar from "./sidebar"
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";

export class Table extends Component{
  render() {
  return (
    
    <div className="overflow-auto"> 
     <CDBContainer >
          <CDBTable responsive striped>
            <CDBTableHeader>
              <tr>
                <th>#</th>
                <th>nama</th>
                <th>umur</th>
                <th>email</th>
                <th>nik</th>
                <th>alamat</th>
                <th>penyakit</th>
                <th>owner</th>
              </tr>
            </CDBTableHeader>
            <CDBTableBody>
             { this.props.Datas && this.props.Datas.length > 0 
             ? this.props.Datas
             .sort((a,b) => { return b.id - a.id})
             .map((data,key) => {
              const userAccount = ["0xdbb80d2299e4d9e4125a2982C18d2C234c24a6f9","0x984e422f5424898c69f0d76F1EA396f21A5c0Ddd","0x54a7A223f39E508AC7F11935B2bFad22b75f939E"]
               if(data.owner === userAccount[0]){
                 data.owner = "RS Uber" }
               if(data.owner === userAccount[1]){
                 data.owner = "RS Bandung"
               }
               if(data.owner === userAccount[2]){
                 data.owner = "RS Arcamanik"
               }

               return(
                <tr key={key}>
                  <td scope="row">{key+1}</td>
                  <td>{data.nama}</td> 
                  <td>{data.umur}</td> 
                  <td>{data.email}</td> 
                  <td>{data.nik}</td>  
                  <td>{data.alamat}</td>
                  <td>{data.penyakit}</td>
                  <td>{data.owner}</td> 
                </tr>

               );
             })
             :  <tr><td colSpan="6" className="text-center">belum ada data yang di input</td></tr>
             }
              
            </CDBTableBody>
          </CDBTable>
    </CDBContainer>
    </div>
  );
}
};
export default  Table;