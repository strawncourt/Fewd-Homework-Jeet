$(document).ready(function() {
	console.log("helloworld");
    $(".hamburger").click(function() {
    	console.log("clicked");
        $(".NAV").slideToggle("fast");
        console.log("slidingout");
    });
});