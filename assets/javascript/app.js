$(document).ready(function() {
  AOS.init()

  $('.navbar-brand').on('click', function() {
    window.location.href = 'https://github.com/teamjuli0?tab=repositories'
  })

  $('.home').on('click', function() {
    $('.container-fluid').fadeOut(500, function() {
      window.location.href = 'index.html'
    })
  })

  $('.projects').on('click', function() {
    $('.container-fluid').fadeOut(500, function() {
      window.location.href = 'projects.html'
    })
  })

  $('.contact').on('click', function() {
    $('.container-fluid').fadeOut(500, function() {
      window.location.href = 'contact.html'
    })
  })

  $('.portfolioImg').on('click', function() {
    window.location = 'https://teamjuli0.github.io/'
  })

  $('.tabernaculo').on('click', function() {
    window.open('https://tabernaculo.netlify.con')
  })

  $('.triviaGame').on('click', function() {
    window.open('https://fast-thicket-56056.herokuapp.com/')
  })

  $('.liri').on('click', function() {
    window.open('https://github.com/teamjuli0/liri-node-app')
  })

  // Scroll to top of each section
  $('.homeButton').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $('#unique').offset().top
      },
      'slow'
    )
  })

  // Form validation for sending emails
  $('.submit').on('click', function() {
    // Reset our event.preventDefault()
    $('#form').unbind('submit')

    // Variables for our validation
    var email = $('.email')
      .val()
      .trim()
    var name = $('.name')
      .val()
      .trim()
    var message = $('.message')
      .val()
      .trim()
    var statusElm = $('.status')

    // Display a confirmation or rejection on submit button click
    setTimeout(function() {
      statusElm.empty()
    }, 5000)

    // Determine if email is valid or not
    if (email.length > 5 && email.includes('@') && email.includes('.') && name.length > 2 && message.length > 5) {
      statusElm.append('<h3 class="uk-logo">Email has been sent. Thank you!</h3>')
    } else {
      statusElm.append('<h3 class="uk-logo">Please Complete Form Correctly!</h3>')

      // If invalid, prevent form from sending email
      event.preventDefault()
    }
  })
})
