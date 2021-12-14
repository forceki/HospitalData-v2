import React ,{Component,setState} from 'react'
import './App.css';
import Login from './components/login_page.js'
import Dashboard from './components/all_data'
import Input from './components/input.js'
import Datapri from './components/data_private.js'
import Chartdata from './components/chart.js'
import Sidebar from './components/sidebar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hospital from "./contracts/Hospital.json";
import Web3 from "web3";




import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      account : " ",
      index : 0,
      Datas : [],
      setChart :"",
      loading : true
    }
    this.addData = this.addData.bind(this)

  }

  async componentDidMount() {
   
    await this.loadWeb3()
    await this.loadBlockChain()
  }

  async loadWeb3() {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("error, not eht detected !")
    }
  }

  async loadBlockChain(){
    const web3 = window.web3;
    //load accounts
    const accounts = await web3.eth.getAccounts()
    this.setState({account : accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Hospital.networks[networkId];

    if(networkData) {
      const hospital = new web3.eth.Contract(Hospital.abi,networkData.address)
      this.setState({ hospital });
      const index =  await hospital.methods.index().call() 
      console.log(index)
      this.setState({index})
      var user  = this.state.account

      this.setState({user})
      console.log(user)
      for(var i = 1; i <= index; i++){
        const data = await hospital.methods.Datas(i).call()
        
        this.setState({
          Datas : [...this.state.Datas, data]
        })
      } 
      console.log(this.state.Datas.penyakit)
      //set chart data
      var Penyakit = this.state.Datas
      var setPenyakit = []
      var count = {}
      console.log(setPenyakit)
      for(var b = 0; b < this.state.Datas.length; b++){
        console.log(b)
        // setPenyakit = setPenyakit[b].penyakit
       
        var a = Penyakit[b].penyakit
        setPenyakit.push(a)
      }
      console.log(setPenyakit)
      setPenyakit = setPenyakit.join(" ")
      console.log(setPenyakit)
      setPenyakit = setPenyakit.split(" ")
      console.log(setPenyakit)
      
     
      setPenyakit.forEach(function(i){count[i] = (count[i] || 0) + 1})
      console.log(count)

      this.setState({
        setChart : count
      })
      //set name owner  
      var userowner = this.state.account

      const userAccount = ["0xdbb80d2299e4d9e4125a2982C18d2C234c24a6f9","0x984e422f5424898c69f0d76F1EA396f21A5c0Ddd","0x54a7A223f39E508AC7F11935B2bFad22b75f939E"]
      if(userowner === userAccount[0]){
        userowner = "RS Uber" }
      if(userowner === userAccount[1]){
        userowner = "RS Bandung"
      }
      if(userowner === userAccount[2]){
        userowner = "RS Arcamanik"
      }
      this.setState({userowner})

      console.log(this.state.userowner)

      this.setState({loading : false})      
    } else {
      window.alert("error bang")
    }
  }
  

  addData(nama,umur,email,nik,alamat,penyakit){
    this.setState({loading:true})
    this.state.hospital.methods.addData(nama,umur,email,nik,alamat,penyakit).send({from : this.state.account})
    .once('receipt', async (receipt) => {
      this.setState({
          Datas : [...this.state.Datas, receipt.events.InsertData.returnValues]
      })
      
      window.location.reload()
    })
  }

 



  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div className="App">
      <Router>
      <div>
        <Switch>
          <Route exact 
          path="/" 
          render={ props => {
            return(
               <div style={{ display: 'flex', height :' 100vh', overflow: 'scroll initial' }}>
                 <Sidebar  userowner={this.state.userowner}/>
                 {this.state.loading 
                  ? <div>Wellcome, Please connect to metamask</div>
                  :
                   <Dashboard 
                  account = {this.state.account}
                  Datas = {this.state.Datas}
                  user = {this.state.user}
                  />} 
              </div>
            )
          }} /> 
          <Route exact 
          path="/input"
          render={props => {
            return(
              <div className="d-flex">
                    <Sidebar userowner ={this.state.userowner} />
                    {this.state.loading 
                    ? <div>Wellcome, Please connect to metamask</div>
                    :
                    <Input 
                    account = {this.state.account}
                    Datas = {this.state.Datas}
                    addData={this.addData}
                    />
                    }
              </div>
            );
          }}  />
          <Route exact path="/dataprivate"
          render={props => {
            return(
              <div className="d-flex">
                <Sidebar userowner={this.state.userowner} />
                {this.state.loading
                  ? <div>Wellcome, Please connect to metamask</div>
                  : <Datapri 
                    account ={this.state.account}
                    Datas = {this.state.Datas}
                  />
                }
              </div>
            );
          }}/>
          <Route exact path="/chartdata" 
          render={props => {
            return(
              <div className="d-flex">
                <Sidebar userowner ={this.state.userowner} />
                
                <Chartdata
                account = {this.state.account}
                Datas = {this.state.Datas}
                setChart = {this.state.setChart}
                />
                
              </div>
            );
          }} />
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
