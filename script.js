$(document).ready(function(){
    // Smooth scroll to sections
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $("#contactForm").on("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Redirect to the thank-you page after form submission
        window.location.href = "thank-you.html";
    });
    
    // Placeholder for additional JS functionality
    console.log("GameHub scripts loaded.");
});