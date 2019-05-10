var slideIndex = 1;
showSlides(slideIndex);
//var timer = setInterval(checkAvione, 1000);
var a = document.getElementById("one");
var h = document.getElementsByClassName("hide");

function rightClick(){
  	if (a.src.match("images/rita.png")){
		a.src = "images/toon5.png";
	} else if (a.src.match("images/gauge2.png")){
		a.src = "images/gauge3.png";
	} 
	else if(a.src.match("images/toon5.png")){
	
	}
}
