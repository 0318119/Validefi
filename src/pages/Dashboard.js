import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/dashboard.css'
import Sidebar from '../components/Sidebar'
import Dashheader from '../components/Dashheader'
import Tabscontent from '../components/Tabscontent'
import DashFooter from '../components/DashFooter'

function Dashboard() {


  return (
    <>
      <div className="container-fluid">
          <Sidebar />
          <Dashheader />
          <Tabscontent/>
      </div>
      <DashFooter/>
    </>
  )
}

export default Dashboard