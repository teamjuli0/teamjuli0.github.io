import React from 'react'
import { Navbar } from '../components/nav'
import { blueMountains, blueMountainsSquare } from '../images/backgrounds'

//width < || === 440px <-- use the following style for spinning image

class Home extends React.Component {
  state = {
    isMobile: false
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
        <Navbar />

        <div
          className='container-fluid'
          style={{
            width: '100vw',
            minHeight: '850px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 0
          }}
        >
          <div
            id='spinning-circle'
            style={{
              position: 'relative',
              zIndex: '-1',
              maxHeight: '850px',
              overflow: 'hidden'
            }}
          >
            <img
              src={blueMountainsSquare}
              className='rotate'
              style={
                this.state.isMobile
                  ? {
                      position: 'relative',
                      marginTop: '-38%',
                      marginLeft: '-100%',
                      height: '300%',
                      width: '300%'
                    }
                  : {
                      position: 'relative',
                      marginTop: '-42%',
                      marginLeft: '-25%',
                      height: '150%',
                      width: '150%'
                    }
              }
            />
          </div>
          <div
            className='row'
            style={{
              minHeight: '850px'
            }}
          >
            <div
              className='col-sm-12'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bolder',
                padding: 0
              }}
            >
              <div
                style={{
                  width: '85vw',
                  textAlign: 'center'
                }}
              >
                <p
                  style={{
                    fontSize: '70px',
                    margin: 0
                  }}
                >
                  The Truth is Out There.
                </p>
                <p
                  style={{
                    fontSize: '20px'
                  }}
                >
                  Anybody Got the URL?
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
