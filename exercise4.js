function componentToHex(value) {
  return value.toString(16).padStart(2, '0').toUpperCase();
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function setColors(){
	let borderRed = parseInt(document.getElementById("redBorderInput").value);
	let borderGreen = parseInt(document.getElementById("greenBorderInput").value);
	let borderBlue = parseInt(document.getElementById("blueBorderInput").value);
	let borderWidth = document.getElementById("widthBorderInput").value;
	
	let backgroundRed = parseInt(document.getElementById("redBackgroundInput").value);
	let backgroundGreen = parseInt(document.getElementById("greenBackgroundInput").value);
	let backgroundBlue = parseInt(document.getElementById("blueBackgroundInput").value);
	
	
	
	
	
	
	document.getElementById("theParagraph").style.border = rgbToHex(borderRed,borderGreen,borderBlue);
	console.log(rgbToHex(borderRed,borderGreen,borderBlue));
	document.getElementById("theParagraph").style.borderWidth = borderWidth + "px";
	document.getElementById("theParagraph").style.borderStyle = "solid";
	document.getElementById("theParagraph").style.backgroundColor = rgbToHex(backgroundRed,backgroundGreen,backgroundBlue);
	
	
}