const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginMessage = document.getElementById("login-msg")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web") {
        pageRedirect()
        loginMessage.style.opacity = 1;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function pageRedirect(){
 var delay = 3500; // time in milliseconds
 var close = false


 setTimeout(function(){
  window.location = "ontrack.html";
  return false;
  close = false
 },delay);

 if(window.alert){
  return true
 }

}
