import { Bar } from 'react-chartjs-2';
import React ,{Component} from 'react';
import Sidebar from './sidebar.js'
import  { Container,Row,Col }  from 'react-bootstrap';
import { a } from 'react-select/dist/Select-09b3775e.esm';


    
    



 class Chart extends Component {
constructor(props){
    super();
    this.state = {
        labels : [],
        datasets : [
            // {
            //     label : 'data',
            //     backgroundColor : 'rgba(75,192,192,1)',
            //     borderColor : 'rgba(255,255,255,255,1)',
            //     borderWidth : 1,
            //     data : []
            // }
        ],
        chartdata : ""
        }
}

     async componentWillMount() {
        // await this.getData()
         
     }

     async componentDidUpdate(setchart){
         if(this.props.setChart !== setchart.setChart){
            //  this.fetchData(this.props.setChart)
            var set = this.props.setChart
            var values = this.props.setChart
            set = Object.keys(set)
            this.setState({labels : set })
            values = Object.values(values)
            var data = {
                label : 'data',
                backgroundColor : 'rgba(17, 168, 173,1)',
                borderColor : 'rgba(0,0,0,0.2)',
                borderWidth : 1,
                data : values
            }
           this.setState({datasets : [...this.state.datasets , data]})
            console.log(data.data)
            console.log(set)
            console.log(values)
         }

         
     }
    
    //  async getData(setchar){
    //     // if(this.props.setChart !== setchar.setChart){
    //     //     console.log(this.props.setChart)
    //     // }
    //      var setdata = [12,12,43]
    //      var data = {
    //          label : 'data',
    //          backgroundColor : 'rgba(75,192,192,1)',
    //          borderColor : 'rgba(255,255,255,255,1)',
    //          borderWidth : 1,
    //          data : setdata
    //      }
    //     this.setState({datasets : [...this.state.datasets , data]})
        
    //  }

    render(){
        // console.log(this.props.setChart)
        // this.setState({
        //     datasets : this.props.setChart
        // })
        return (
         
             
              <Container className="container-fluid" >
                <Row className=" m-5">
                    <Col lg="11">
                        <Bar 
                            data={this.state}
                            options={{
                                title:{
                                    display:true,
                                    text:'All Hospital Data',
                                    fontSize:15
                                },
                                // legend:{
                                //     display:true,
                                //     position:'right'
                                // },
                                scales :{
                                    yAxes:[{
                                        ticks:{
                                        beginAtZero : true
                                        }
                                    }]
                                }
                                
                            }}  
                        />
                    </Col>
                </Row>
               </Container>
          
        );
    }
}

export default Chart;