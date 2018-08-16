$(document).ready(function() {
    
    var home = $("#home");
    var aboutMe = $("#aboutMe");
    var contact = $("#contact");
    
    aboutMe.hide();
    contact.hide();

    $("#homeButton").on("click", function(){
        home.show();
        aboutMe.hide();
        contact.hide();
    })

    $("#aboutMeButton").on("click", function(){
        home.hide();
        aboutMe.show();
        contact.hide();
    })

    $("#contactButton").on("click", function(){
        home.hide();
        aboutMe.hide();
        contact.show();
    })

})