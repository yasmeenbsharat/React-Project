import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Portfolio from './Components/Portfolio/Portfolio'
import About  from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'
import Contact from './Components/Contact/Contact'
import { Route,Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar />
         <Header />
         <Routes >
         <Route path='/' element={''}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
         </Routes>
        <Footer />
      </div>
    )
  }
}

