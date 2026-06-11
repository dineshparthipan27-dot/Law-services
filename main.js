  const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
        const navRight = document.querySelector(".nav-right");
        const icon = menuToggle.querySelector("i");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            navRight.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                navRight.classList.remove("active");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            });
        });

        // Future JavaScript code goes here

console.log("Law Services Website Loaded Successfully");

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

const form = document.getElementById("consultationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const errorMessages =
    document.querySelectorAll(".error-message");

    errorMessages.forEach(error => {
        error.textContent = "";
    });

    document
    .querySelectorAll("input, textarea")
    .forEach(field => {
        field.classList.remove("error");
    });

    let isValid = true;

    // Name

    if(fullName.value.trim() === ""){

        fullName.classList.add("error");
        fullName.nextElementSibling.textContent =
        "Full Name is required";

        isValid = false;
    }

    // Email

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){

        email.classList.add("error");
        email.nextElementSibling.textContent =
        "Email Address is required";

        isValid = false;

    } else if(!emailPattern.test(email.value.trim())){

        email.classList.add("error");
        email.nextElementSibling.textContent =
        "Enter a valid Email Address";

        isValid = false;
    }

    // Phone

    const phonePattern = /^[0-9]{10}$/;

    if(phone.value.trim() === ""){

        phone.classList.add("error");
        phone.nextElementSibling.textContent =
        "Phone Number is required";

        isValid = false;

    } else if(!phonePattern.test(phone.value.trim())){

        phone.classList.add("error");
        phone.nextElementSibling.textContent =
        "Enter a valid 10-digit Phone Number";

        isValid = false;
    }

    // Message

    if(message.value.trim() === ""){

        message.classList.add("error");
        message.nextElementSibling.textContent =
        "Please describe your case";

        isValid = false;
    }

    if(isValid){

        
         window.location.href = "404.html";

        form.reset();
    }

});