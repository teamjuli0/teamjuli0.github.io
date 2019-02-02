import React from 'react'

const Navbar = props => (
  <div>
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      style={{ height: '10vh', backgroundColor: 'white ' }}
    >
      <span className='navbar-brand' onClick={props.scrollHome}>
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
          <li className='nav-item active' onClick={props.scrollHome}>
            <span className='nav-link'>Home</span>
          </li>
          <li className='nav-item' onClick={props.scrollAboutMe}>
            <span className='nav-link'>About Me</span>
          </li>
          <li className='nav-item' onClick={props.scrollContact}>
            <span className='nav-link'>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
