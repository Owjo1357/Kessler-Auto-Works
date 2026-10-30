// Practice site: there's no server, so show a thank-you message instead of sending the form.
const form = document.getElementById("appointment-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  message.textContent = `Thanks, ${name}! We'll call you to set up a time.`;
  message.hidden = false;
  form.hidden = true;
});
