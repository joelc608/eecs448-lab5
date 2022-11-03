var currentImg = 1;



function nextPic(){
	if(currentImg < 5){
		currentImg += 1;
	}else{
		currentImg = 1;
	}
	document.getElementById("slideshow").src = "images/" + currentImg + ".jpg";
	
	
}

function prevPic(){
	if(currentImg > 1){
		currentImg -= 1;
	}else{
		currentImg = 5;
	}	
	document.getElementById("slideshow").src = "images/" + currentImg + ".jpg";
	
}