import React from 'react'
import {
    useLocation
    } from 'react-router-dom';

const Dashboard = () => {
    const location =useLocation();
    return(
  <div className="app">
  <h3>Dashboard</h3>
  <h3>Info that i got is {location.state}</h3>
  </div>
    )
}

export default Dashboard
