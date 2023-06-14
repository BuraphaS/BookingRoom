import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './UserPage/DashBoard.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
 
    <BrowserRouter>
    
      <App/>

    </BrowserRouter>  
 
)
