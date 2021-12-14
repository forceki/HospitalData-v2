import React, { Component , setState} from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from "cdbreact";
import  { Form,Button,Container,Row,Col,Dropdown }  from 'react-bootstrap';
import Sidebar from './sidebar.js'
import Select from "react-select";
import '../../node_modules/react-select/dist/react-select.esm'
// const BASE_URL = "http://localhost:5000"




var index = 0

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      multivalue : [],
      data : [],
      value : '',
      options : [
        {value : 'Covid-19',label :'Covid-19'},
        {value : 'Demam',label :'Demam'},
        {value : 'Flue',label :'Flue'},
        {value : 'Influenza',label :'Influenza'},
        {value : 'Tuberkulosis-(TBC)',label :'Tuberkulosis-(TBC)'},
        {value : 'Muntaber',label :'Muntaber'},
        {value : 'Tifus',label :'Tifus'},
        {value : 'Pneumonia',label :'Pneumonia'},
        {value : 'Hepatitis',label :'Hepatitis'},
        {value : 'PES',label :'PES'},
        {value : 'Kolera',label :'Kolera'},
        {value : 'Polio',label :'Polio'},
        {value : 'AIDS',label :'AIDS'},
        {value : 'DBD',label :'DBD'},
        {value : 'Malaria',label :'Malaria'},
        {value : 'Toksoplasmosis',label :'Toksoplasmosis'},
        {value : 'Batuk',label :'Batuk'},
        {value : 'Osteoporosis',label :'Osteoporosis'},
        {value : 'Diabetes',label :'Diabetes'},
        {value : 'Arthritis',label :'Arthritis'},
        {value : 'Stroke',label :'Stroke'},
        {value : 'Asma',label :'Asma'},
      ]
    }

    this.multiHandleChange = this.multiHandleChange.bind(this)
    
  }
  
  multiHandleChange(option){
    var array = []
    this.setState(state => {  
      return {multivalue: option};
    })   
   
  }


  render(){
   
    return (
      
      <Container className="mt-5">
        
          <form  onSubmit={(event) => {
            event.preventDefault()
            const name = this.Name.value;
            const umur = this.Umur.value;
            const nik = this.Nik.value;
            const alamat = this.Alamat.value;
            var email = this.Email.value;
            email = email.toLowerCase(email);
            var penyakit = []
            for(var a = 0; a < this.state.multivalue.length; a++){ 
              var setPenyakit = this.state.multivalue[a].value
              penyakit.push(setPenyakit)
            }
            penyakit = penyakit.join(' ')
            
            
            this.props.addData(name,umur,email,nik,alamat,penyakit)
            console.log(name,nik,alamat,email,penyakit)
          }}>
                      <div className="text-center mt-4 mb-4">
                        <p className="h4"> Tambah Pasien </p>
                      </div>
                 <CDBCard className="d-flex" >
                    <CDBCardBody className="">
                     
                      <label htmlFor="defaultContactName" className="text-muted m-0">
                      Nama Pasien
                      </label>
                      <CDBInput className="mt-n3" type="text" inputRef={(input) => {this.Name = input}} required="true" />
                      
                      <label htmlFor="defaultContactSubject" className="text-muted m-0" >
                       NIK
                      </label>
                      <CDBInput className="mt-n3" inputRef={(input) => {this.Nik = input}} required="true"/>
                      <label htmlFor="defaultContactSubject" className="text-muted m-0">
                      Alamat
                      </label>
                      <CDBInput className="mt-n3" type="text" inputRef={(input) => {this.Alamat = input}} required="true"/>
                    </CDBCardBody>

                    <CDBCardBody className="">
                     <label htmlFor="defaultContactName" className="text-muted m-0">
                      Umur
                      </label>
                      <CDBInput className="mt-n3" type="text" inputRef={(input) => {this.Umur = input}} required="true"/>
                      <label htmlFor="defaultContactName" className="text-muted m-0">
                       Email
                      </label>
                      <CDBInput className="mt-n3" type="email" inputRef={(input) => {this.Email = input}}  required="true"/>
                      
                      <label htmlFor="defaultContactName" className="text-muted m-0">
                       Penyakit
                      </label>
                      {this.state.data}
                      <Select className="mt-2"
                            isMulti
                            name="filters"
                            placeholder="select & search"
                            value={this.state.multivalue}
                            options={this.state.options}
                            onChange={this.multiHandleChange}
                            closeMenuOnSelect={false}
                            inputRef={(input) => {this.Penyakit = input} }
                      />
                      
                    </CDBCardBody>
                     
                  </CDBCard>
                      <CDBBtn
                        outline
                        type="submit"
                        color="danger"
                        style={{width:"40%"}}
                        className="btn-block mt-3 mx-auto"
                       
                        >
                        Send
                     </CDBBtn>
                        
          </form>
  </Container>

  );
  }
};
export default  Input;
