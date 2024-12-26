document.querySelector(".submit-button").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.querySelector("input[name='email']").value.trim();
  const phone = document.querySelector("input[name='phone']").value.trim();
  const name = document.querySelector("input[name='name']").value.trim();
  const subject = document.querySelector("input[name='subject']").value.trim();
  const message = document.querySelector("textarea[name='message']").value.trim();

  let formMessage = document.querySelector(".form-message");
  if (!formMessage) {
    formMessage = document.createElement("p");
    formMessage.className = "form-message";
    document.querySelector(".contact-form").appendChild(formMessage);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{11}$/;

  if (!email || !emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address (e.g., user@example.com).";
    formMessage.style.color = "red";
    return;
  }

  if (!phone || !phonePattern.test(phone)) {
    formMessage.textContent = "Please enter a valid 11-digit phone number.";
    formMessage.style.color = "red";
    return;
  }

  if (!name || !subject || !message) {
    formMessage.textContent = "Please fill out all fields before submitting.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
  formMessage.style.color = "green";

  document.querySelector("input[name='email']").value = "";
  document.querySelector("input[name='phone']").value = "";
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='subject']").value = "";
  document.querySelector("textarea[name='message']").value = "";
});
