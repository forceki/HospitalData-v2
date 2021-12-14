import React, { Component } from "react"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { f } from "react-select/dist/index-c7a4d7ce.esm";

 class Sidebar extends Component { 
    render () {
      function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }
  return (
    <div style={{ display: 'flex', height :' 100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            {this.props.userowner}
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact="true" to="/" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/input">
              <CDBSidebarMenuItem icon="table">Input</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dataprivate" >
              <CDBSidebarMenuItem icon="user"  onClick={refreshPage} >Private</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/chartdata" onClick={refreshPage}>
              <CDBSidebarMenuItem icon="chart-line">Chart</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact="true" to="/hero404" target="_blank" >
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            {this.props.userowner}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
 }
}
export default Sidebar;