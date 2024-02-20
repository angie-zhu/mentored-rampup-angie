function myFunction() {
  alert("This is the correct way to do js ☺️ 😊🥰👉👈");
}

function submit() {
    username = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    alert('Username:', username.value, 'Email:', email.value, 'Password:', password.value);
    return false;
}

function call_button() {
    
}

const theDiv = document.querySelector("#link") 

function correct() {
  alert("Correct! You're one step closer to getting to know me better 🥰🥰")
}

function wrong() {
  alert("Wrong😥 please try again.")
}


theDiv.addEventListener('DOMContentLoaded', function() {
  console.log('pic was clicked');
});




document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel' ).mount();
} );

function openPopup() {
  document.getElementById("popupContainer").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

function myFunctionOpen() {
  var popup = document.getElementById("myPopup");
  popup.style.display = 'block'
}

function myFunctionOpen() {
  var popup = document.getElementById("mypop");
  popup.classList.toggle("show");
}
