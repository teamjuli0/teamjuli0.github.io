import React from 'react'
import './App.css'
import { ClickableLink } from './components'
import { Bitmoji, LinkedIn } from './images/'

const App = () => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          padding: '30px 0 60px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='css-selector container-fluid'
      >
        <div
          style={{
            width: '90%',
            maxWidth: '800px',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '60px',
              color: '#f6f6f2',
              fontFamily: 'Pacifico, cursive',
              textShadow: '2px 2px 2px rgba(0, 0, 0, .7)',
            }}
          >
            teamjuliO
          </p>
          <div
            style={{
              border: '6px solid #f6f6f2',
              borderRadius: '20px',
              boxShadow: '0 0 25px #4c4c4c',
              color: 'white',
              fontFamily: 'Fira Code, monospace',
              cursor: 'text',
              fontSize: '14px',
              overflowX: 'auto',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '380px',
                padding: '12px',
                backgroundColor: 'rgba(47, 47, 45, .8)',
                overflowX: 'auto',
              }}
            >
              <div>
                <span style={{ color: '#1abc9c', paddingRight: '5px' }}>
                  [teamjuli0@ryzen-manjaro ~]$
                </span>
                cd ~/development/projects
              </div>

              <div>
                <span style={{ color: '#1abc9c', paddingRight: '5px' }}>
                  [teamjuli0@ryzen-manjaro projects]$
                </span>
                ls
              </div>

              <div style={{ paddingLeft: '45px' }}>
                <ClickableLink
                  margin={true}
                  link='https://mandpautoservices.com/'
                  name='M&PAutoServices.html'
                />
                <ClickableLink
                  margin={true}
                  link='https://southportagenciesinc.teamjuli0.com/'
                  name='SouthportAgencies.html'
                />
                <ClickableLink
                  margin={true}
                  link='https://drive.google.com/file/d/1HgDDJIjVUSs4VXAW8WIX412aL_z6Tm-x/view?usp=sharing'
                  name='Experience(Resume).pdf'
                />
              </div>

              <div>
                <div>
                  <span style={{ color: '#1abc9c', paddingRight: '5px' }}>
                    [teamjuli0@ryzen-manjaro projects]$
                  </span>
                  cd <span style={{ letterSpacing: '.1px' }}>..</span>
                  /contact-information
                </div>
              </div>

              <div>
                <div>
                  <span style={{ color: '#1abc9c', paddingRight: '5px' }}>
                    [teamjuli0@ryzen-manjaro contact-information]$
                  </span>
                  ls
                </div>
              </div>

              <div style={{ paddingLeft: '45px' }}>
                <ClickableLink
                  margin={true}
                  link='https://www.linkedin.com/in/teamjuli0/'
                  name='linkedin.html'
                />
                <ClickableLink
                  margin={true}
                  link='mailto:valdezjulio95@gmail.com'
                  name='email.html'
                />
                {/* <ClickableLink margin={true} link='#' name='contact-info.txt' /> */}
              </div>

              <div>
                <div>
                  <span style={{ color: '#1abc9c', paddingRight: '5px' }}>
                    [teamjuli0@ryzen-manjaro contact-information]$
                  </span>
                  cat contact-info.txt
                </div>
              </div>

              <div style={{ padding: '0 45px' }}>
                Hi! My name is Julio Valdez, but I go by Lilo (like Lilo and
                Stitch, no relation). Up above, you'll see my most recent
                projects. Please feel free to poke around, all of the projects
                and social media words are clickable! If you have any questions
                or comments, don't hessitate to send me an{' '}
                <span>
                  <ClickableLink
                    link='mailto:valdezjulio95@gmail.com'
                    name='email'
                  />
                </span>
                ! And most importantly, don't forget to connect with me on
                <span>
                  {' '}
                  <ClickableLink
                    link='https://www.linkedin.com/in/teamjuli0/'
                    name='LinkedIn'
                  />
                </span>
                ! I am currently open to new job opportunities!
              </div>

              <div>
                <div
                  style={{
                    color: '#1abc9c',
                    paddingRight: '5px',
                    float: 'left',
                  }}
                >
                  [teamjuli0@ryzen-manjaro contact-information]$
                </div>
                <div
                  style={{
                    paddingTop: '1px',
                    height: '18px',
                    width: '7px',
                    backgroundColor: 'white',
                    float: 'left',
                    animationName: 'blink',
                    animationDuration: '1000ms',
                    animationIterationCount: 'infinite',
                    opacity: '1',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: '1',
              margin: '-40px 30px 0 auto',
              float: 'right',
              bottom: '0px',
              right: '0px',
              height: '80px',
              width: '80px',
              borderRadius: '50%',
              backgroundColor: '#1686b0',
              boxShadow: '0 0 15px black',
            }}
          >
            <a href='https://www.linkedin.com/in/teamjuli0/'>
              <img
                src={LinkedIn}
                style={{
                  height: '80px',
                  width: '80px',
                  border: '3px solid #9cbdca',
                  borderRadius: '50%',
                }}
              />
            </a>
          </div>
          <div
            style={{
              // backgroundImage: `url('${Bitmoji}')`,
              position: 'relative',
              float: 'right',
              margin: '-40px 15px 0 auto',
              backgroundColor: '#31363b',
              zIndex: '1',
              bottom: '0px',
              right: '0px',
              height: '80px',
              width: '80px',
              // backgroundSize: 'cover',
              borderRadius: '50%',
              boxShadow: '0 0 15px black',
            }}
          >
            <a href='https://teamjuli0.com'>
              <img
                src={Bitmoji}
                style={{
                  borderRadius: '50%',
                  border: '3px solid #cccccc',
                  height: '80px',
                  width: '80px',
                }}
              />
            </a>
          </div>
          <a
            href='#'
            type='button'
            // className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'
            style={{
              textDecoration: 'none',
              color: '#baeae1',
              position: 'relative',
              zIndex: '1',
              margin: '-40px 15px 0 auto',
              float: 'right',
              bottom: '0px',
              right: '0px',
            }}
          >
            <div
              style={{
                backgroundColor: '#12836d',
                height: '80px',
                width: '80px',
                borderRadius: '50%',
                boxShadow: '0 0 15px black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '3px solid #75d6c3',
                fontSize: '60px',
                padding: '12px 0 0 3px',
              }}
            >
              <p>?</p>
            </div>
          </a>
          <div
            className='modal fade'
            id='exampleModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Instructions
                  </h5>
                </div>
                <div className='modal-body'>
                  <p>
                    Welcome to my terminal portfolio! To check out my most
                    recent projects, LinkedIn, or send me an email, just click
                    on the blue links that appear throughout the terminal.
                    That's all there is to it, kinda fun right?
                  </p>
                </div>
                <div className='modal-footer'>
                  <button
                    className='modal-btn'
                    type='button'
                    data-dismiss='modal'
                  >
                    Take me back!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
