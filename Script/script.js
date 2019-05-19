var users = [];

function User(email, password) {
    this.email = email;
    this.password = password;
}

function generateAlert() {
    let input1 = document.getElementById("inputEmail").value;
    let input2 = document.getElementById("inputPassword").value;
		
	console.log(input1 + " " + input2);
    let userFound = false;
	
	users.forEach(function(item){
        if (item.email===input1){
			alert("The account email is already in use. Please choose another email");
			userFound = true;
		}
		}
	)
	
	if(!userFound){
		users.push(new User(input1, input2));
			alert("New user created");
	}
}