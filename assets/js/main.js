$(document).ready(function() {
        $(".nav-link").removeClass("selected");
        
	if(window.location.pathname == "/about/") {
                $("#about-link").addClass("selected");
        } else if(window.location.pathname == "/code/") {
                $("#code-link").addClass("selected");
        } else {
                $("#articles-link").addClass("selected");
        }
});
