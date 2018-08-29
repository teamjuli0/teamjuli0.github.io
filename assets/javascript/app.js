$(document).ready(function() {




  // Redirect to new tab with GitHub links
  $(".rayRayWebsite").on("click", function() {
    var productLink = $(this).attr("href", "https://teamjuli0.github.io/SuperDuperAmazingSpectacular/");
    productLink.attr("target", "_blank");
    window.open(productLink.attr("href"));
  });

  $(".triviaGameWebsite").on("click", function() {
    var productLink = $(this).attr("href", "https://teamjuli0.github.io/TriviaGame/");
    productLink.attr("target", "_blank");
    window.open(productLink.attr("href"));
  });

  $(".gifTastic").on("click", function() {
    var productLink = $(this).attr("href", "https://teamjuli0.github.io/GifTastic/");
    productLink.attr("target", "_blank");
    window.open(productLink.attr("href"));
  });

  $(".liriNodeApp").on("click", function() {
    var productLink = $(this).attr("href", "https://github.com/teamjuli0/liri-node-app");
    productLink.attr("target", "_blank");
    window.open(productLink.attr("href"));
  });




  // Scroll to top of each section
  $(".homeButton").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#unique").offset().top
    }, "slow")
  })

  $(".aboutMeButton").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".aboutMe").offset().top
    }, "slow")
  })

  $(".contactButton").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#contact").offset().top
    }, "slow")
  })




  // Form validation for sending emails
  $(".submit").on("click", function() {

    // Reset our event.preventDefault()
    $("#form").unbind('submit');

    // Variables for our validation
    var email = $(".email").val().trim()
    var name = $(".name").val().trim()
    var message = $(".message").val().trim()
    var statusElm = $(".status")

    // Display a confirmation or rejection on submit button click
    setTimeout(function() {
      statusElm.empty()
    }, 5000)

    // Determine if email is valid or not
    if (email.length > 5 && email.includes("@") && email.includes(".") && name.length > 2 && message.length > 5) {
      statusElm.append('<h3 class="uk-logo">Email has been sent. Thank you!</h3>')
    } else {
      statusElm.append('<h3 class="uk-logo">Please Complete Form Correctly!</h3>')

      // If invalid, prevent form from sending email
      event.preventDefault();
    }
  })
})
