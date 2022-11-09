
function userLogin(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username=="" || password==""){
		alert ("Please complete the required field!");
	}else{
		if (username == "admin" && password == "admin"){
			alert ("Login successfully");
			window.location.href='main.html';
		}else{
			alert("Invalid username or password");
		}
	}
}