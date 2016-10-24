$(document).ready(function(){
	console.log("helloworldnew")
//set a variable to be total

   // Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; 
   //use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
    //When the user changes the input of the drop-down, update the background image based on what they selected
    //Use $.append() in your iteration on the drop-down menu
    //Use the $.attr() function to update html classes
   // Get the value of user input using $.val()
   // Use the $.change event handler to capture user actions
    //Use if/else if/else conditionals to control the flow of your application
    //Display your pseudocode as Javascript comments


// created array 
var names = ["Ale", "Belgian", "India Pale Ale", "Lager", "Pilsner", "Porter", "Saison", "Sours", "Stout"]
//ar names = $("#citytype").val()
var selectedBeer = $("#beer-type").val();

//for loop

for(var i=0; i< names.length;i ++){
	$("select").append('<option value="'+names[i]+'">'+names[i]+'</option>');
	//$("select#city-type").append($(names))



}
//created a function 
$("select").change(function (stuff){
//if else 
	if($("#beer-type").val()==="Ale" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","nyc");
		//$("body").css("background","url(./images/nyc.jpg");
	}else if($("#beer-type").val()==="SF" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","sf");
		//$("body").css("background","url(./images/sf.jpg");
	}else if($("#beer-type").val()==="LA" ) {
		console.log($("#city-type").val())
		$("body").attr("class","la");
		//$("body").css("background","url(./images/la.jpg");
	}else if($("#beer-type").val()==="ATX" ) {
		console.log($("#city-type").val())
		$("body").attr("class","austin");
		//$("body").css("background","url(./images/austin.jpg");
	}else if($("#beer-type").val()==="SYD" ) {
		console.log($("#city-type").val())
		$("body").attr("class","sydney");
		//$("body").css("background","url(./images/sydney.jpg");
	}
})

})






