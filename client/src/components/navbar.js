import React from 'react'

const Navbar = () => (
  <div>
    <nav
      class='navbar navbar-expand-lg navbar-light fixed-top'
      style={{ height: '10vh', backgroundColor: 'white ' }}
    >
      <a class='navbar-brand' href='#'>
        teamjuli0
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon' />
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='#'>
              Home
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              About Me
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
