const locked = document.querySelector(".locked");
const gap2Completed = localStorage.getItem("gap2Completed");
const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const endWindow = document.querySelector(".success");
const passwordBox = document.querySelector(".passwordBox");
const h6 = document.querySelector("h6");

const date = new Date();

const hint = function () {
  if (!("HintRegisteredGAP3" in localStorage)) {
    setTimeout(function () {
      h6.style.display = "block";
      localStorage.setItem("HintRegisteredGAP3", true);
    }, 60000);
  }
};

if (gap2Completed) hint();

const HintRegistered = localStorage.getItem("HintRegisteredGAP3");
if (HintRegistered) h6.style.display = "block";

const storage = function () {
  if (!("PassRegisteredGAP3" in localStorage)) {
    const password = Math.trunc(
      Math.random() * date.getTime().toString().slice(9)
    );
    localStorage.setItem("passGAP3", password);

    localStorage.setItem("PassRegisteredGAP3", true);
  }
};

storage();

const pass = localStorage.getItem("passGAP3");
const gap3Completed = localStorage.getItem("gap3Completed");

const unlockLevel = function () {
  if (gap2Completed || gap3Completed) locked.style.display = "none";
};

unlockLevel();

const winRegister = function () {
  localStorage.setItem("gap3Completed", true);
  endWindow.style.display = "block";
};

const removeEntry = function () {
  const msg = document.querySelector("article");
  // console.log(msg);
  msg.remove();
};

const htmlSuccess = `
          <article>
            <div class="result">
              <p class="message">${pass}</p>
              </div>
              `;
const htmlPassword = `
    <span class="smallPass">${pass}</span>
              `;

// console.log(passwordBox);
passwordBox.insertAdjacentHTML("beforeend", htmlPassword);

const validatePass = function () {
  if (input.value === `${pass}`) {
    winRegister();
  } else arrowIcon.style.color = "#f03e3e";
};

arrowIcon.addEventListener("click", validatePass);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") validatePass();
});

if ("gap3Completed" in localStorage) {
  input.value = pass;
}

const prepareWin = function () {
  removeEntry();
  results.insertAdjacentHTML("beforeend", htmlSuccess);
};
