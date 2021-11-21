const locked = document.querySelector(".locked");
const gap1Completed = localStorage.getItem("gap1Completed");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const main = document.querySelector("main");
const endWindow = document.querySelector(".success");
const returnButton = document.querySelector(".returnBtn");
const h1 = document.querySelector("h1");
const h6 = document.querySelector("h6");
let counter = 0;
let counterOnReload = 0;

const unlockLevel = function () {
  if (gap1Completed) locked.style.display = "none";
};
unlockLevel();

const hint = function () {
  if (!("HintRegisteredGAP2" in localStorage)) {
    setTimeout(function () {
      h6.style.display = "block";
      localStorage.setItem("HintRegisteredGAP2", true);
    }, 60000);
  }
};

if (gap1Completed) hint();

const HintRegistered = localStorage.getItem("HintRegisteredGAP2");
if (HintRegistered) h6.style.display = "block";

const storage = function () {
  if (!("PassRegisteredGAP2" in localStorage)) {
    const password = Math.trunc(Math.random() * 194851254);
    localStorage.setItem("passGAP2", password);

    localStorage.setItem("PassRegisteredGAP2", true);
  }
};

storage();

const winRegister = function () {
  localStorage.setItem("gap2Completed", true);
};

const pass = localStorage.getItem("passGAP2");
const gap2Completed = localStorage.getItem("gap2Completed");

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

const htmlError = `
              <article>
                <div class="result">
                  <p class="message">Again!!</p>
                  </div>
                  `;

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

if ("gap2Completed" in localStorage) {
  input.value = pass;
}

const prepareWin = function () {
  removeEntry();
  results.insertAdjacentHTML("beforeend", htmlSuccess);
  winRegister();
};

const prompting = function () {
  const options = [
    "name",
    "age",
    "favorite color",
    "hometown",
    "pet's name",
    "job",
    "worst fear",
    "biggest dream",
    "...",
    "car's brand",
    "favorite food",
    "physique",
    "kg",
    "height",
    "gender",
  ];
  for (let i = 0; i < 30; i++) {
    const n = Math.trunc(Math.random() * 14);
    console.log(n);
    // console.log(options[n]);
    const promQuestions = prompt(
      `Please answer these lovely questions. What's your ${options[n]}?`
    );
    if (promQuestions === null) counter++;
    console.log(counter);

    if (counter === 16) {
      prepareWin();
    }
    removeEntry();
    results.insertAdjacentHTML("beforeend", htmlError);
  }
};
if (!gap2Completed && gap1Completed) setTimeout(prompting, 500);

if (!gap2Completed && gap1Completed) {
  window.addEventListener(
    "beforeunload",
    function (e) {
      e.preventDefault();
      e.returnValue = "";
      counterOnReload++;
      if (counterOnReload === 2) {
        prepareWin();
      }
      console.log(counterOnReload);
    },
    false
  );
}