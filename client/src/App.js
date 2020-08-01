import React from 'react'
import './App.css'
import { ClickableLink } from './components'

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
              width: '100%',
              minHeight: '450px',
              border: '8px solid #f6f6f2',
              backgroundColor: 'rgba(47, 47, 45, 0)',
              borderRadius: '30px',
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
                minHeight: '450px',
                padding: '15px',
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
                  link='#'
                  name='SouthportAgencies.html'
                />
                <ClickableLink
                  margin={true}
                  link='https://trivia.teamjuli0.com'
                  name='Trivia!.html'
                />
                <ClickableLink
                  margin={true}
                  link='https://github.com/teamjuli0/liri-node-app'
                  name='LiriNodeApp.js'
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
                <ClickableLink margin={true} link='#' name='contact-info.txt' />
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
        </div>
      </div>
    </>
  )
}

export default App
