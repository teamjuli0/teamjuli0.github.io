import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          paddingTop: '15vh',
          height: '100vh',
          backgroundColor: '#ebebeb'
        }}
      >
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '6vw',
            color: '#666'
          }}
        >
          LOOKING TO HIRE?
        </p>
        <a>
          <p
            style={{
              fontSize: '4vw',
              marginBottom: '1vh',
              fontWeight: 100,
              color: '#157ec4',
              marginTop: '2vh'
            }}
          >
            LinkedIn
          </p>
        </a>
        <div style={{ width: '75vw', margin: 'auto' }}>
          <form
            id='form'
            action='http://getsimpleform.com/messages?form_api_token=f32af7d1b6983a428f4b3ca209662c46'
            method='post'
          >
            <input
              type='hidden'
              name='redirect_to'
              value='https://teamjuli0.github.io'
            />
            <div class='form-group'>
              <label for='name'>Name</label>
              <input
                type='text'
                class='form-control'
                id='name'
                placeholder='Your Name Here'
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email</label>
              <input
                type='text'
                class='form-control'
                id='email'
                placeholder='Your Email Here'
              />
            </div>
            <div class='form-group'>
              <label for='message'>Message</label>
              <textarea
                type='text'
                class='form-control'
                id='message'
                name='message'
                rows='5'
                placeholder='Comments or questions go here!'
              />
            </div>
            <div>
              <button
                type='submit'
                value='Submit'
                class='btn btn-primary submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class='status' />
      </div>
    )
  }
}

export default Contact
