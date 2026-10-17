
const PASSWORD = "03082009";
let enteredPassword = "";

function updateClock() {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  if (!clock || !date) return;

  const now = new Date();

  clock.textContent = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  date.textContent = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).toUpperCase();
}

function renderDots() {
  const dots = document.querySelectorAll(".password-dots span");

  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < enteredPassword.length);
  });
}

function pressKey(number) {
  if (enteredPassword.length >= 8) return;

  enteredPassword += String(number);

  const error = document.getElementById("error");
  if (error) error.textContent = "";

  renderDots();

  if (enteredPassword.length === 8) {
    setTimeout(checkPassword, 250);
  }
}

function clearPassword() {
  enteredPassword = enteredPassword.slice(0, -1);

  const error = document.getElementById("error");
  if (error) error.textContent = "";

  renderDots();
}


function checkPassword() {
  if (enteredPassword.length !== 8) return;

  if (enteredPassword === PASSWORD) {
    window.location.href = "kata_kata.html";
  } else {
    document.getElementById("error").textContent =
      "Password salah, coba lagi ya ♡";

    enteredPassword = "";
    renderDots();
  }
}



updateClock();
setInterval(updateClock, 1000);
