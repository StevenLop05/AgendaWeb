
function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contrasena").value;

    if(user == "delcidsteven500@gmail.com" && pass == "12345"){
            window.location = "./contact.html";
    }else{
        alert("Incorrect username or password");
    }
}


