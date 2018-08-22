$(document).ready(function () {

    var homeButton = $(".homeButton");
    var aboutMeButton = $(".aboutMeButton");
    var contactButton = $(".contactButton");

    $(".rayRayWebsite").on("click", function () {
        var productLink = $(this).attr("href", "https://teamjuli0.github.io/SuperDuperAmazingSpectacular/");
        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));
    });

    $(".triviaGameWebsite").on("click", function () {
        var productLink = $(this).attr("href", "https://teamjuli0.github.io/TriviaGame/");
        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));
    });

    $(".gifTastic").on("click", function () {
        var productLink = $(this).attr("href", "https://teamjuli0.github.io/GifTastic/");
        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));
    });

    homeButton.on("click", function () {
        $("html, body").animate({ scrollTop: $("#unique").offset().top }, "slow")
    })

    aboutMeButton.on("click", function () {
        $("html, body").animate({ scrollTop: $(".aboutMe").offset().top }, "slow")
    })

    contactButton.on("click", function () {
        $("html, body").animate({ scrollTop: $("#contact").offset().top }, "slow")
    })

    // $(".submit").on("click", function () {
    //     event.preventDefault();
    //     var email = $(".email").val().trim()
    //     var name = $(".name").val().trim()
    //     var message = $(".message").val().trim()
    //     var statusElm = $(".status")
        
    //     setTimeout(function(){statusElm.empty()}, 5000)

    //     if (email.length > 5 && email.includes("@") && email.includes(".") && name.length > 2 && message.length > 5) {
    //         statusElm.append('<h3 class="uk-logo">Message Is Valid!</h3>')
    //     } else {
    //         statusElm.append('<h3 class="uk-logo">Please Complete Form Correctly!</h3>')
    //     }
    //     $("#form")[0].reset();
    // })
})