$(document).ready(function() {
    $(window).on("scroll", function() {
        
        if ($(window).scrollTop() > 100) {
            $("header").css("background-color", "rgba(255, 255, 255, .7)");
            $("header").css("backdrop-filter", "blur(4px)");
            $(".logo-title p").css("color", "#26124F");
            $(".header-nav a").css("color", "#26124F");
            $(".header-socials i").css("color", "#26124F");
        } else {
            $("header").css("background-color", "transparent");
            $("header").css("backdrop-filter", "none");
            $(".logo-title p").css("color", "white");
            $(".header-nav a").css("color", "white");
            $(".header-socials i").css("color", "white");
        }
       
    })
})

