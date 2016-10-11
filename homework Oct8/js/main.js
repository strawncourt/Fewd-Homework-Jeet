jQuery(document).ready(function(){
 
console.log("jQueryYES");

//pseudo, make an evnt handler 
// use click function below to make the event handler
	$("#submit-btn").on("click",function(event) {
	event.preventDefault();
	console.log("submitclicked");
	
	//pseudo, make an evnt handler 
	var city = $("#city-type").val();

	console.log("citytype: " + city);
	//pseudo, store var with what someone will input into the field get it back and send it to console
	// adding the single parenths in the val parenths clears the field....-------/////////
	var cityChange=(city + $("#city-type").val(''));

	city = city.trim();
	//pseudo, data type the var with the input for each city type
	//if its this or|| and then redo that with all cities

	if (city ===  "n"|| city=== "New York" || city==="New York City" || city==="NYC" ) { 
	
	$("body").css("background","url(./images/nyc.jpg");
	console.log("picture changed to nyc");

	} else if (city ==="San Francisco" || city=== "SF" || city==="Bay Area" ) { 
	$("body").css("background","url(./images/sf.jpg");
	console.log("picture changed to SF");

	} else if (city ==="Los Angeles" || city=== "LA" || city==="LAX" ) { 
	$("body").css("background","url(./images/la.jpg");
	console.log("picture changed to LA");

	} else if (city ==="Austin" || city=== "ATX") { 
	$("body").css("background","url(./images/austin.jpg");
	console.log("picture changed to ATX");

	} else if (city ==="Sydney" || city=== "SYD"){
	$("body").css("background","url(./images/sydney.jpg");
	}
	//return false;
	});


})

















