const locked = document.querySelector(".locked");
const gap2Completed = localStorage.getItem("gap2Completed");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const main = document.querySelector("main");
const endWindow = document.querySelector(".success");
const returnButton = document.querySelector(".returnBtn");
const h1 = document.querySelector("h1");
const passwordBox = document.querySelector(".passwordBox");

const unlockLevel = function () {
  if (gap2Completed) locked.style.display = "none";
};
unlockLevel();

const storage = function () {
  if (!("PassRegisteredGAP3" in localStorage)) {
    const password = Math.trunc(Math.random() * 19485);
    localStorage.setItem("passGAP3", password);

    localStorage.setItem("PassRegisteredGAP3", true);
  }
};

storage();

const winRegister = function () {
  localStorage.setItem("gap3Completed", true);
};

const pass = localStorage.getItem("passGAP3");
const gap3Completed = localStorage.getItem("gap3Completed");

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

console.log(passwordBox);
passwordBox.insertAdjacentHTML("beforeend", htmlPassword);

const validatePass = function () {
  if (input.value === `${pass}`) {
    endWindow.style.display = "block";
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
  winRegister();
};
