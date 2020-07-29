import React from 'react'
import { logoBlackLetters } from '../../images/logos'
import { burgerMenu } from '../../images/ect/'

const Navbar = (props) => (
  <>
    <div uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky'>
      <nav className='uk-navbar-container' uk-navbar='dropbar: true'>
        <div className='uk-navbar-left'>
          <ul className='uk-navbar-nav'>
            <li>
              <a href='#'>
                <img
                  src={burgerMenu}
                  style={{
                    height: '30px',
                  }}
                />
              </a>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>
                  <li className='uk-active'>
                    <a href='#'>Active</a>
                  </li>
                  <li>
                    <a href='#'>Item</a>
                  </li>
                  <li className='uk-nav-header'>Header</li>
                  <li>
                    <a href='#'>Item</a>
                  </li>
                  <li>
                    <a href='#'>Item</a>
                  </li>
                  <li className='uk-nav-divider'></li>
                  <li>
                    <a href='#'>Item</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='uk-navbar-center'>
          <div
            style={{
              margin: 'auto',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: '-2px 0 0 0',
                fontWeight: 'bolder',
                color: 'white',
                fontSize: props.titleSize,
              }}
            >
              TEAMJULIO
            </p>
            <p
              style={{
                margin: '-10px 0 0 0',
                fontSize: props.magicSize,
                fontWeight: 'bold',
                color: '#2ea8b3',
              }}
            >
              THE MAGIC STARTS HERE
            </p>
          </div>
        </div>
      </nav>
    </div>
  </>
)

export default Navbar
