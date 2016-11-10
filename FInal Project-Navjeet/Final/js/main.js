$(document).ready(function(){
	console.log("helloworldnew")


 $(".hamburger").click(function() {
        $(".horizontal-nav").slideToggle();
        console.log("clickednav");
    });	
//set a variable to be total

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
		$("body").attr("class","ale");
		//$(".fullscreenVid").css("background","url(./images/brewing.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","visible");
		$(".beertext .bText").css("display","none");
		$(".beertext .ipaText").css("display","none");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .pilsnerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .saisonText").css("display","none");


		
	}else if($("#beer-type").val()==="Belgian" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","belgian");
		//$(".fullscreenVid").css("background","url(./images/medusa2.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","visible");
		$(".bText").css("display","block");
		$(".beertext .ipaText").css("display","none");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .stoutText").css("display","none");


	}else if($("#beer-type").val()==="India Pale Ale" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","IndiaPaleAle");
		//$(".fullscreenVid").css("background","url(./images/ipa.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .lagerText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("visibility","hidden");
		$(".beertext .ipaText").css("visibility","visible");
		$(".ipaText").css("display","block");
		$(".beertext .bText").css("display","none");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .stoutText").css("display","none");


	}else if($("#beer-type").val()==="Lager" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","lager");
		//$(".fullscreenVid").css("background","url(./images/lager.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .ipaText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("visibility","hidden");
		$(".beertext .lagerText").css("visibility","visible");
		$(".beertext .porterText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .stoutText").css("display","none");
		$(".lagerText").css("display","block");
		

	}else if($("#beer-type").val()==="Pilsner" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","pilsner");
		//$(".fullscreenVid").css("background","url(./images/pilsner.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .ipaText").css("visibility","hidden");
		$(".beertext .lagerText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("visibility","visible");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .stoutText").css("display","none");
		$(".pilsnerText").css("display","block");

	}else if($("#beer-type").val()==="Porter" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","porter");
		//$(".fullscreenVid").css("background","url(./images/porter.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .ipaText").css("visibility","hidden");
		$(".beertext .lagerText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("display","none");
		$(".beertext .porterText").css("visibility","visible");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .stoutText").css("display","none");
		$(".beertext .sourText").css("display","none");
		$(".porterText").css("display","block");

	}else if($("#beer-type").val()==="Saison" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","saison");
		//$(".fullscreenVid").css("background","url(./images/saison.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .ipaText").css("visibility","hidden");
		$(".beertext .lagerText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("visibility","hidden");
		$(".beertext .porterText").css("visibility","hidden");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .pilsnerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .ipaText").css("display","none");
		$(".beertext .stoutText").css("display","none");
		$(".beertext .sourText").css("display","none");
		$(".beertext .saisonText").css("visibility","visible");
		$(".saisonText").css("display","block");

	}else if($("#beer-type").val()==="Sours" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","sour");
		//$(".fullscreenVid").css("background","url(./images/sour.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .pilsnerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .ipaText").css("display","none");
		$(".beertext .stoutText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .sourText").css("visibility","visible");
		$(".sourText").css("display","block");

	}else if($("#beer-type").val()==="Stout" ) {
		console.log($("#beer-type").val())
		$("body").attr("class","stout");
		//$(".fullscreenVid").css("background","url(./images/stout.jpg");
		$(".fullscreenVid video").hide();
		$("section#hero").css("visibility","hidden");
		$(".beertext .aleText").css("visibility","hidden");
		$(".beertext .bText").css("visibility","hidden");
		$(".beertext .lagerText").css("display","none");
		$(".beertext .pilsnerText").css("display","none");
		$(".beertext .porterText").css("display","none");
		$(".beertext .ipaText").css("display","none");
		$(".beertext .sourText").css("display","none");
		$(".beertext .ipaText").css("display","none");
		$(".beertext .saisonText").css("display","none");
		$(".beertext .stoutText").css("visibility","visible");
		$(".stoutText").css("display","block");
	}
})

})






