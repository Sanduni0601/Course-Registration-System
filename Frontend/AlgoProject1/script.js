function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var isValid = true;

    // Clear previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("password-error").innerText = "";
    document.getElementById("role-error").innerText = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    if (!name) {
        document.getElementById("name-error").innerText = "Name is required.";
        isValid = false;
    }

    if (!email) {
        document.getElementById("email-error").innerText = "Email is required.";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("email-error").innerText = "Invalid email format.";
        isValid = false;
    }

    if (!password) {
        document.getElementById("password-error").innerText = "Password is required.";
        isValid = false;
    }

    if (!role) {
        document.getElementById("role-error").innerText = "Role is required.";
        isValid = false;
    }

    if (isValid) {
        // Submit the form or perform your form submission logic here
    }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var isValid = true;

    // Clear previous error messages
    document.getElementById("login-email-error").innerText = "";
    document.getElementById("login-password-error").innerText = "";

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (!email) {
        document.getElementById("login-email-error").innerText = "Email is required.";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("login-email-error").innerText = "Invalid email format.";
        isValid = false;
    }

    if (!password) {
        document.getElementById("login-password-error").innerText = "Password is required.";
        isValid = false;
    }

    if (isValid) {
        // Submit the form or perform your form submission logic here
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
