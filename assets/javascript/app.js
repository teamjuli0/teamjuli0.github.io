$(document).ready(function () {

    var homeButton = $("#homeButton");
    var aboutMeButton = $("#aboutMeButton");
    var contactButton = $("#contactButton");
    var uniqueHeight = $(window).height()

    $("#rayRayWebsite").on("click", function () {
        var productLink = $(this).attr("href", "https://teamjuli0.github.io/SuperDuperAmazingSpectacular/index.html");
        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));
    });

    $("#triviaGameWebsite").on("click", function () {
        var productLink = $(this).attr("href", "https://teamjuli0.github.io/TriviaGame/");
        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));
    });

    $("#3rdWebsite").on("click", function () {
        var productLink = $(this).attr("href", "https://teamjuli0.github.io/SuperDuperAmazingSpectacular/index.html");
        productLink.attr("target", "_blank");
        window.open(productLink.attr("href"));
    });

    homeButton.on("click", function() {
        $("html, body").animate({scrollTop:$("#unique").offset().top}, "slow")
    })

    aboutMeButton.on("click", function() {
        $("html, body").animate({scrollTop:$(".aboutMe").offset().top}, "slow")
    })

    contactButton.on("click", function() {
        $("html, body").animate({scrollTop:$("#contact").offset().top}, "slow")
    })
})