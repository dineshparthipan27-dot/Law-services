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
