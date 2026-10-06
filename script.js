// ===============================
// CURRENT YEAR
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${new Date().getFullYear()} Alex Visuals. Demo Website.`;
}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .service-card, .stats div, .cta"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// BUTTON CLICK EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});


// ===============================
// PORTFOLIO CARD CLICK
// ===============================

const projects =
    document.querySelectorAll(".project-card");

projects.forEach((project) => {

    project.addEventListener("click", () => {

        alert(
            "Demo Project — Video preview will be added here."
        );

    });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 5, 5, 0.95)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 5, 0.82)";

    }

});