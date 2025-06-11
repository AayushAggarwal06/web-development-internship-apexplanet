document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic form validation logic will be added later
  document.getElementById("feedback").textContent =
    "Thank you! Your message has been sent.";
});
