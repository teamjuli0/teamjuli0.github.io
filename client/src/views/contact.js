import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          paddingTop: '15vh',
          height: '100vh',
          backgroundColor: '#ebebeb'
        }}
      >
        <p>LOOKING TO HIRE?</p>
        <a>
          <p>LinkedIn</p>

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
            <div class='uk-margin'>
              <h3 class='uk-logo'>Name</h3>
              <input
                type='text'
                id='name'
                name='name'
                class='uk-input uk-form-width-large name'
                placeholder='Your Name'
              />
            </div>
            <div class='uk-margin'>
              <h3 class='uk-logo'>Email</h3>
              <input
                type='text'
                id='email'
                name='email'
                class='uk-input uk-form-width-large email'
                placeholder='Your Email'
              />
            </div>
            <div class='uk-margin'>
              <h3 class='uk-logo'>Message</h3>
              <textarea
                id='message'
                name='message'
                class='uk-input uk-form-width-large message'
                rows='5 '
                id='message'
              />
            </div>

            <div>
              <button
                type='submit'
                value='Submit'
                class='uk-button uk-button-primary submit'
              >
                Submit
              </button>
            </div>
          </form>

          <div class='status' />
        </a>
      </div>
    )
  }
}

export default Contact
