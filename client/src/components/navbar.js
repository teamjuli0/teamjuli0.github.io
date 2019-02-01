import React from 'react'

const Navbar = () => (
  <div>
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      style={{ height: '10vh', backgroundColor: 'white ' }}
    >
      <a className='navbar-brand' href='#'>
        teamjuli0
      </a>
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
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About Me
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
