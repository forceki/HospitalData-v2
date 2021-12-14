import React, { Component } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";
import Sidebar from './sidebar.js'
class Tablepri extends Component {
  render(){
  return (
   
        <CDBContainer>
          <CDBTable responsive>
            <CDBTableHeader>
            <tr>
                <th>#</th>
                <th>nama</th>
                <th>umur</th>
                <th>email</th>
                <th>nik</th>
                <th>alamat</th>
                <th>penyakit</th>
               
              </tr>
            </CDBTableHeader>
            <CDBTableBody>
              {this.props.Datas.filter(i => i.owner === this.props.account).length > 0
                ? this.props.Datas
                  .filter(i => i.owner === this.props.account)
                  .map((data,key)=> {
                    return(<tr key ={key}>
                     <td scope="row">{key+1}</td>
                    <td>{data.nama}</td> 
                    <td>{data.umur}</td> 
                    <td>{data.email}</td> 
                    <td>{data.nik}</td>  
                    <td>{data.alamat}</td>
                    <td>{data.penyakit}</td>
                    </tr>);
                  })
                :<tr><td colSpan="5" className="text-center">anda belum memasukan data apapun</td></tr>
              }
              
            </CDBTableBody>
          </CDBTable>
        </CDBContainer>

  );}
};
export default  Tablepri;