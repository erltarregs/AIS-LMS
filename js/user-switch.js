function validateForm() {
    var x = document.forms["userForm"]["inputID"].value;
    var y = document.forms["userForm"]["inputPwd"].value;
    if (x == "") {
        alert("ID Number must be filled out");
        return false;
    } else if ((x == "S-001") && (y == "1234")) {
    	document.getElementById("userForm").action = "student-home.html";
    } else if ((x == "L-001") && (y == "12345")) {
    	document.getElementById("userForm").action = "homepage.html";
    } else {
    	alert("You entered the wrong credentials.");
    	return false;
    }
}