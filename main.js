const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const errorMsgEl = document.getElementById("error-msg");
const submitEl = document.getElementById("submit");
setTimeout(() => {
  errorMsgEl.textContent = "";
}, 8000);

function isValidEmail(email) {
  const isValid = /\S+@\S+\.\S+/.test(email);
  return isValid;
}

submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  errorMsgEl.textContent = "";

  // Your form validation logic here

  if (nameEl.value === "" || emailEl.value === "") {
    errorMsgEl.textContent = "You must fill out both fields";
  } else {
    if (isValidEmail(emailEl.value)) {
      errorMsgEl.textContent = "Form successfully submitted!";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      setTimeout(() => {
        errorMsgEl.textContent = "";
      }, 5000);
    } else {
      errorMsgEl.textContent = "Invalid email format";
    }
  }
});
