import React from 'react'
import { VideoBg } from '../components/videoBackground'

class Home extends React.Component {
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
        <VideoBg>
          <div
            style={{
              margin: '50px 35px',
              color: '#f7f7f7',
              maxWidth: '280px',
            }}
          >
            <p
              style={{
                fontWeight: 'bolder',
                fontFamily: 'Merriweather',
                fontSize: '60px',
                // margin: '0',
                lineHeight: '70px',
              }}
            >
              Front End Web Developer
            </p>
            <p
              style={{
                margin: '0',
              }}
            >
              My name is Julio and I am a Fullstack Web Developer located in
            </p>
            <p
              style={{
                margin: '0',
              }}
            >
              Los Angeles, CA.
            </p>
            <div
              style={{
                width: '100%',
                marginTop: '-5px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '5px',
                  backgroundColor: 'white',
                  margin: '0 auto',
                  display: 'inline-block',
                  borderRadius: '5px 0 0 5px',
                }}
              ></div>
              <div
                style={{
                  width: '130px',
                  height: '5px',
                  margin: 'auto',
                  backgroundColor: '#42b0ba',
                  display: 'inline-block',
                  borderRadius: '0 5px 5px 0',
                }}
              ></div>
            </div>
          </div>
        </VideoBg>
      </>
    )
  }
}

export default Home
