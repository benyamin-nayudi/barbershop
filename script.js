// Select the elements
// Select the elements
var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");

// Set the initial position of sidenav
sidenav.style.right = "-250px";

// Toggle sidenav position on menu button click
menuBtn.onclick = function() {
    // Check if sidenav is off-screen
    if (sidenav.style.right === "-250px" || sidenav.style.right === "") {
        sidenav.style.right = "0"; // Show sidenav
        menu.src = "images/close.png";
    } else {
        sidenav.style.right = "-250px"; // Hide sidenav
        menu.src = "images/menu.png";
    }
}
