// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ========== Contact Form Validation ==========
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Grab values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error Elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("formSuccess");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  if (name === "") {
    nameError.textContent = "⚠️ Name is required.";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "⚠️ Email is required.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "❌ Invalid email format.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "⚠️ Message is required.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "✅ Thank you! Your message has been sent.";
    document.getElementById("contactForm").reset();
  }
});
