// Select the elements
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");
var sidenav = document.getElementById("sidenav");
var popup = document.getElementById("contactFormPopup");
var btn = document.getElementById("contactButton");
var span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm")

console.log(form);
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log(formData.get('name'));

    fetch('http://localhost:3000/api/contact', {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        })
    })
});

// Set the initial position of sidenav
sidenav.style.right = "-250px";

// Toggle sidenav position on menu button click
menuBtn.onclick = function() {
    if (sidenav.style.right === "-250px" || sidenav.style.right === "") {
        sidenav.style.right = "0"; // Show sidenaveeeee
       
        menu.src = "images/Close.png"; // Change to close icon
    } else {
        sidenav.style.right = "-250px"; // Hide sidenav
        menu.src = "images/menu.png"; // Change back to menu icon
    }
};

// When the user clicks the "Contact Us" button, open the modal and close the sidebar
btn.onclick = function() {
    popup.style.display = "block";
    sidenav.style.right = "-250px"; // Hide sidenav
    menu.src = "images/menu.png"; // Change back to menu icon
};

// When the user clicks on <span> (x), close the modal and show the menu button
span.onclick = function() {
    popup.style.display = "none";
    menu.src = "images/menu.png"; // Ensure menu button is visible
};

// When the user clicks anywhere outside of the modal, close it and show the menu button
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        menu.src = "images/menu.png"; // Ensure menu button is visible
    }
};


// Get the button that opens the popup
var btn = document.getElementById("contactUsBtn");

// Get the <span> element that closes the popup


// When the user clicks the button, open the popup 
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}



    // Show the booking form
    // document.getElementById("bookButton").addEventListener("click", function() {
    //     document.getElementById("overlay").style.display = "block"; // Show the overlay
    //     document.getElementById("bookingForm").style.display = "block"; // Show the booking form
    // });

    // Close the booking form
    // document.getElementById("closeBooking").addEventListener("click", function() {
    //     document.getElementById("overlay").style.display = "none"; // Hide the overlay
    //     document.getElementById("bookingForm").style.display = "none"; // Hide the booking form
    // });

    // Submit the booking form
    // document.getElementById("submitBooking").addEventListener("click", function() {
    //     const name = document.getElementById("name").value; // Get the name from the input
    //     const email = document.getElementById("email").value; // Get the email from the input
    //     const date = document.getElementById("date").value; // Get the date from the input
    //     const time = document.getElementById("time").value; // Get the time from the input

    //     // Here you can send the information to the server
    //     console.log(`Name: ${name}, Email: ${email}, Date: ${date}, Time: ${time}`);

    //     // After successful submission, reset the form and close it
    //     document.getElementById("bookingForm").reset(); // Reset the form fields
    //     document.getElementById("overlay").style.display = "none"; // Hide the overlay
    //     document.getElementById("bookingForm").style.display = "none"; // Hide the booking form
    // });

