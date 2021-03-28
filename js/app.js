const numePrenume = document.querySelector("#nume");
const subiect = document.querySelector("#subiect");
const emailInput = document.querySelector("#email");
const sendButton = document.querySelector("#submit");
const messBox = document.querySelector("#text");
const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
const errName = document.querySelector("#errName");
const errEmail = document.querySelector("#errEmail");

function sendEmail() {
  if (numePrenume.value === "") {
    numePrenume.style.border = "1px solid red";
  }
  if (subiect.value === "") {
    subiect.style.border = "1px solid red";
  }
  if (emailInput.value === "") {
    emailInput.style.border = "1px solid red";
  }
  if (messBox.value === "") {
    messBox.style.border = "1px solid red";
  }
  const nameRgex = /\d{1,}/g;
  if (nameRgex.test(numePrenume.value)) {
    errName.style.display = "block";
    errName.innerText = "Numai Litere";
  }
  if (!reg.test(emailInput.value)) {
    errEmail.style.opacity = 1;
    errEmail.innerText = "Email Invalid";
  }
}
