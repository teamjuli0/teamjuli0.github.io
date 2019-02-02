import React from 'react'
import Icon from '../images/group.png'

const Navbar = props => (
  <div>
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      style={{ height: '10vh', backgroundColor: 'white ' }}
    >
      <img src={Icon} style={{ width: '3vw', marginRight: '1vw' }} />
      <span
        className='navbar-brand'
        onClick={props.scrollHome}
        style={{ cursor: 'default' }}
      >
        teamjuli0
      </span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li
            className='nav-item active'
            onClick={props.scrollHome}
            style={{ cursor: 'default' }}
          >
            <span className='nav-link'>Home</span>
          </li>
          <li
            className='nav-item'
            onClick={props.scrollAboutMe}
            style={{ cursor: 'default' }}
          >
            <span className='nav-link'>About Me</span>
          </li>
          <li
            className='nav-item'
            onClick={props.scrollContact}
            style={{ cursor: 'default' }}
          >
            <span className='nav-link'>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
