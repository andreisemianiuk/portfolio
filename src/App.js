import React from 'react'
import './App.css'
import Header from './header/Header'
import Main from './main/Main'
import Skills from './skills/Skills'
import Services from './services/Services'
import Hire from './hire/Hire'
import Contacts from './contacts/Contacts'
import Footer from './footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Services/>
      <Hire/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
