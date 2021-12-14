import React, {Component} from 'react';
import Sidebar from './sidebar.js'
import Alldata from './all_data.js'
class Dashboard extends Component{
    render () {
        return (
            <div className="d-flex">
               <Sidebar/>
               <Alldata/>
            </div>
        );
    }
}

export default Dashboard;