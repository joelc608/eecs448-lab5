function validate(){
	let pass1 = document.getElementById("password1").value;
	let pass2 = document.getElementById("password2").value;
	if(pass1 == pass2){
		if(pass1.length >= 8){
			alert("The password is valid!");
		}else{
			alert("The password must be at least 8 characters long.");
		}
	}else{
		alert("The passwords do not match!");
	}
}