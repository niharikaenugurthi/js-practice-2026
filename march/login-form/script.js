document.getElementById("loginForm").onsubmit = function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let error = document.getElementById("error");

    if(username==="" ||password===""){
        error.style.color = "red";
        error.textContent ="All fields are required!";
    }
    else if(password.length<6){
        error.style.color = "red";
        error.textContent ="password must be atleast 6 characters!";
    }
    else{
        error.style.color = "green";
        error.textContent ="Login successfull";
    }
}