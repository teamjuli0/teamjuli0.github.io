import React from 'react'
import { Navbar, Slider } from '../components/'
import { AboutMe, Contact } from './'

class Home extends React.Component {
  scrollToAboutMe = () =>
    window.scrollTo({
      left: 0,
      top: window.innerHeight * 3,
      behavior: 'smooth'
    })
  scrollToContact = () =>
    window.scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' })

  render() {
    return (
      <>
        <Navbar />
        <div
          className='container-fluid'
          style={{
            marginTop: '12vh',
            fontFamily: 'Poppins, sans-serif',
            height: '88vh'
          }}
        >
          <div className='row' style={{ height: '25vh' }}>
            <div className='col-sm-1' />
            <div className='col-sm-10'>
              <p style={{ fontSize: '6vw', color: '#666' }}>
                YOU ARE ABSOLUTELY UNIQUE
              </p>
              <p
                style={{
                  fontSize: '1.25vw',
                  marginTop: '3vh',
                  fontWeight: 100,
                  color: '#157ec4'
                }}
              >
                JUST LIKE EVERYONE ELSE
              </p>
            </div>
          </div>
          <div style={{ height: '20vh' }}>
            <Slider />
          </div>
        </div>
        <AboutMe ref={input => (this.aboutMe = input)} />
        <Contact ref={input => (this.contact = input)} />
      </>
    )
  }
}

export default Home
