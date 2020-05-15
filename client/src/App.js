import React from 'react'
import { TopBanner, Home } from './views'
import { Navbar } from './components/nav'
import './App.css'

class App extends React.Component {
  state = {
    isMobile: false,
  }

  componentWillMount() {
    const isMobile = window.innerWidth < 440
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
    document.addEventListener('scroll', () => {
      const isMobile = window.innerWidth < 440
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile })
      }
    })
  }

  render() {
    return (
      <>
        {this.state.isMobile ? (
          <TopBanner mainHeader='50px' />
        ) : (
          <TopBanner mainHeader='60px' />
        )}
        {this.state.isMobile ? (
          <Navbar titleSize='35px' magicSize='13px' />
        ) : (
          <Navbar titleSize='40px' magicSize='15px' />
        )}
        <div
          className='container-fluid'
          style={{
            backgroundColor: '#3a4141',
            // height: '700px',
            padding: '20px 0 20px 0',
          }}
        >
          <Home />
        </div>
      </>
    )
  }
}

export default App
