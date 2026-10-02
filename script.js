// ==========================================
// CUSTOMER REGISTRATION VALIDATION
// ==========================================

document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("regName").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let phone = document.getElementById("regPhone").value.trim();
        let password = document.getElementById("regPassword").value;
        let confirmPassword =
            document.getElementById("confirmPassword").value;
        let dob = document.getElementById("dob").value;
        let terms = document.getElementById("terms").checked;

        let nameField = document.getElementById("regName");
        let emailField = document.getElementById("regEmail");
        let phoneField = document.getElementById("regPhone");
        let passwordField = document.getElementById("regPassword");
        let confirmPasswordField =
            document.getElementById("confirmPassword");
        let dobField = document.getElementById("dob");

        let message =
            document.getElementById("registrationMessage");

        // Remove previous validation
        nameField.classList.remove("is-invalid");
        emailField.classList.remove("is-invalid");
        phoneField.classList.remove("is-invalid");
        passwordField.classList.remove("is-invalid");
        confirmPasswordField.classList.remove("is-invalid");
        dobField.classList.remove("is-invalid");

        let valid = true;

        // Name validation
        if (name === "") {
            nameField.classList.add("is-invalid");
            valid = false;
        }

        // Email validation
        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailField.classList.add("is-invalid");
            valid = false;
        }

        // Phone validation
        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            phoneField.classList.add("is-invalid");
            valid = false;
        }

        // Password validation
        if (password.length < 6) {
            passwordField.classList.add("is-invalid");
            valid = false;
        }

        // Confirm password validation
        if (
            confirmPassword === "" ||
            password !== confirmPassword
        ) {
            confirmPasswordField.classList.add("is-invalid");
            valid = false;
        }

        // Date validation
        if (dob === "") {
            dobField.classList.add("is-invalid");
            valid = false;
        }

        // Terms validation
        if (!terms) {
            alert("Please accept the Terms & Conditions.");
            valid = false;
        }

        // Successful registration
        if (valid) {

            message.innerHTML =
                '<div class="alert alert-success">' +
                'Registration successful! Welcome to Cafe Bliss ☕' +
                '</div>';

            document
                .getElementById("registrationForm")
                .reset();
        }

});


// ==========================================
// TABLE BOOKING VALIDATION
// ==========================================

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let phone =
            document.getElementById("phone").value.trim();

        let date =
            document.getElementById("date").value;

        let guests =
            document.getElementById("guests").value;

        let message =
            document.getElementById("message");

        if (name === "") {
            message.innerHTML =
                "Please enter your name.";
            return;
        }

        if (email === "") {
            message.innerHTML =
                "Please enter your email.";
            return;
        }

        if (phone === "") {
            message.innerHTML =
                "Please enter your phone number.";
            return;
        }

        if (date === "") {
            message.innerHTML =
                "Please select a date.";
            return;
        }

        if (guests === "") {
            message.innerHTML =
                "Please enter number of guests.";
            return;
        }

        message.innerHTML =
            "Table reservation submitted successfully!";

});
// ==========================================
// EXPERIMENT 2 - ES6 JAVASCRIPT FEATURES
// ==========================================


// 1. ARRAY
// Store today's cafe offers in an array

const cafeOffers = [
    "20% OFF on Cappuccino",
    "Free dessert with Pizza",
    "10% OFF on Veg Burger",
    "Buy 2 Coffees and Get 1 Free"
];


// 2. ARROW FUNCTION
// Display all offers

const showOffers = () => {

    let offerText = document.getElementById("offerText");

    offerText.innerHTML = cafeOffers.join("<br>");

};


// 3. EVENT
// Execute arrow function when button is clicked

document
    .getElementById("offerButton")
    .addEventListener("click", showOffers);


// 4. ANONYMOUS FUNCTION
// Greet customer when button is clicked

document
    .getElementById("greetButton")
    .addEventListener("click", function() {

        alert("Welcome to Cafe Bliss! ☕");

    });