import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Sidebar from './Components/Sidebar'

const NewApp = () => {
  return (
     <>
        <Router>
        <Sidebar>

            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/' element={<App/>} />
                <Route path='/' element={<App/>} />
                <Route path='/' element={<App/>} />
                <Route path='/' element={<App/>} />
                <Route path='/' element={<App/>} />
            </Routes>
        </Sidebar>
        </Router>
     </>
  )
}

export default NewApp