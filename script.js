/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {

  const open = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );

});


/* Close menu after clicking a navigation link */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle?.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


/* ================= COPYRIGHT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* ================= TRIP INQUIRY FORM ================= */

const form = document.getElementById("tripForm");

const message =
  document.getElementById("formMessage");


form.addEventListener("submit", event => {

  event.preventDefault();


  const data =
    Object.fromEntries(
      new FormData(form).entries()
    );


  /*
    DEMO ONLY

    Nothing is actually sent to a server yet.

    Later, this can be connected to:
      - Google Forms
      - Formspree
      - a custom backend
      - another form provider
  */


  message.textContent =
    `Thanks, ${data.name}! Your planning inquiry for ` +
    `${data.destination} is ready. ` +
    `This demo form does not send email yet.`;


  form.reset();

});
