document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let message = document.getElementById("message");

if(email === "admin@mail.com" && password === "123456"){
message.innerText = "Login successful";
message.style.color = "green";
}else{
message.innerText = "Invalid login";
message.style.color = "red";
}

});

let password = document.getElementById("password");
let toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function(){

if(password.type === "password"){
password.type = "text";
}else{
password.type = "password";
}

});


document.getElementById("loginForm").addEventListener("submit", function(event){

event.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let error = document.getElementById("error-message");

if(email === "" || password === ""){
    error.textContent = "Please fill in all fields";
}

else if(password.length < 6){
    error.textContent = "Password must be at least 6 characters";
}

else{
    window.location.href = "dashboard.html";
}

});