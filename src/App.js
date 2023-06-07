import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './styles/app.scss'

import Home from "./components/Home"
import About from "./components/About"
import Header from "./components/Header"
import Contact from "./components/Contact"
import ShowDetail from './components/ShowDetail'
import Form from './components/Form'
import Shows from './components/Shows'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shows' element={<Shows/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/shows/:id' element={<ShowDetail/>} />
        <Route path='/shows/:id/form' element={<Form/>} />
      </Routes>
    </Router>
  )
}

export default App