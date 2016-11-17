
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "ajx.txt", true);
  xhttp.send();
} 
function contact() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "ajx.txt", true);
  xhttp.send();
} 

var imgcount=1
var ttl=6

function propertyA(){
	var Image = document.getElementById('hover1');
	imgcount = imgcount + 1;
	
	if (imgcount > ttl) {
		imgcount = 1;

	}
	if (imgcount < 1) {
		imgcount = ttl;
	}
	Image.src= "Image/dubai"+imgcount+".jpg";
}
var imgcount=1
var ttl=6

function propertyB(){
	var Image = document.getElementById('hover2');
	imgcount = imgcount + 1;
	
	if (imgcount > ttl) {
		imgcount = 1;

	}
	if (imgcount < 1) {
		imgcount = ttl;
	}
	Image.src= "Image/dubai"+imgcount+".jpg";
}
var imgcount=1
var ttl=6

function propertyC(){
	var Image = document.getElementById('hover3');
	imgcount = imgcount + 1;
	
	if (imgcount > ttl) {
		imgcount = 1;

	}
	if (imgcount < 1) {
		imgcount = ttl;
	}
	Image.src= "Image/dubai"+imgcount+".jpg";
}
var imgcount=1
var ttl=6

function propertyD(){
	var Image = document.getElementById('hover4');
	imgcount = imgcount + 1;
	
	if (imgcount > ttl) {
		imgcount = 1;

	}
	if (imgcount < 1) {
		imgcount = ttl;
	}
	Image.src= "Image/dubai"+imgcount+".jpg";
}

var imgcount=1
var ttl=6

function propertyE(){
	var Image = document.getElementById('hover5');
	imgcount = imgcount + 1;
	
	if (imgcount > ttl) {
		imgcount = 1;

	}
	if (imgcount < 1) {
		imgcount = ttl;
	}
	Image.src= "Image/dubai"+imgcount+".jpg";
}
var imgcount=1
var ttl=6
var imgcount=1
var ttl=6

function propertyF(){
	var Image = document.getElementById('hover6');
	imgcount = imgcount + 1;
	
	if (imgcount > ttl) {
		imgcount = 1;

	}
	if (imgcount < 1) {
		imgcount = ttl;
	}
	Image.src= "Image/dubai"+imgcount+".jpg";
}
var imgcount=1
var ttl=6

