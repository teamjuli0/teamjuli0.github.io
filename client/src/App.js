import React, { Component } from 'react'
import './App.css'
import Home from './views/home'
import AboutMe from './views/aboutMe'
import Contact from './views/contact'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <AboutMe />
        <Contact />
      </div>
    )
  }
}

export default App
