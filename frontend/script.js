// Select the elements
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");
var sidenav = document.getElementById("sidenav");
var popup = document.getElementById("contactFormPopup");
var btn = document.getElementById("contactButton");
var span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm")

console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e);
})


// Set the initial position of sidenav
// sidenav.style.right = "-250px";

// // Toggle sidenav position on menu button click
// menuBtn.onclick = function() {
//     if (sidenav.style.right === "-250px" || sidenav.style.right === "") {
//         sidenav.style.right = "0"; // Show sidenaveeeee
       
//         menu.src = "images/Close.png"; // Change to close icon
//     } else {
//         sidenav.style.right = "-250px"; // Hide sidenav
//         menu.src = "images/menu.png"; // Change back to menu icon
//     }
// };

// // When the user clicks the "Contact Us" button, open the modal and close the sidebar
// btn.onclick = function() {
//     popup.style.display = "block";
//     sidenav.style.right = "-250px"; // Hide sidenav
//     menu.src = "images/menu.png"; // Change back to menu icon
// };

// // When the user clicks on <span> (x), close the modal and show the menu button
// span.onclick = function() {
//     popup.style.display = "none";
//     menu.src = "images/menu.png"; // Ensure menu button is visible
// };

// // When the user clicks anywhere outside of the modal, close it and show the menu button
// window.onclick = function(event) {
//     if (event.target == popup) {
//         popup.style.display = "none";
//         menu.src = "images/menu.png"; // Ensure menu button is visible
//     }
// };


// // Get the button that opens the popup
// var btn = document.getElementById("contactUsBtn");

// // Get the <span> element that closes the popup


// // When the user clicks the button, open the popup 
// btn.onclick = function() {
//   popup.style.display = "block";
// }

// // When the user clicks on <span> (x), close the popup
// span.onclick = function() {
//   popup.style.display = "none";
// }

// // When the user clicks anywhere outside of the popup, close it
// window.onclick = function(event) {
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// }




    
