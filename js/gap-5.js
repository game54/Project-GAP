const locked = document.querySelector(".locked");
const gap4Completed = localStorage.getItem("gap4Completed");
const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const endWindow = document.querySelector(".success");
const h6 = document.querySelector("h6");
const h1 = document.querySelector("h1");
const mainBtn = document.querySelector(".mainBtn");
const menu = document.querySelector(".menu");
const noCursor = document.querySelector(".noCursor");
const footer = document.querySelector(".footer");
const introH2 = document.querySelector(".intro__title");
const footerAbs = document.querySelector(".footer__abs");
const intro = document.querySelector(".intro");
const btnIntro = document.querySelector(".btn__intro");
const inputIntro = document.querySelector(".inputIntro");
const inputArrowBtn = document.querySelector(".arrowIconIntro");
const introH3 = document.querySelector(".intro_h3");
let count = 0;
let arrowGone = false;

const unlockLevel = function () {
  if (gap4Completed) locked.style.display = "none";
};
unlockLevel();

const hint = function () {
  if (!("HintRegisteredGAP5" in localStorage)) {
    setTimeout(function () {
      h6.style.display = "inline-block";
      localStorage.setItem("HintRegisteredGAP5", true);
    }, 60000);
  }
};

if (gap4Completed) hint();

const HintRegistered = localStorage.getItem("HintRegisteredGAP5");
if (HintRegistered) h6.style.display = "inline-block";

const storage = function () {
  if (!("PassRegisteredGAP5" in localStorage)) {
    const password = Math.trunc(Math.random() * 194851254);
    localStorage.setItem("passGAP5", password);

    localStorage.setItem("PassRegisteredGAP5", true);
  }
};

storage();

const winRegister = function () {
  localStorage.setItem("gap5Completed", true);
};

const pass = localStorage.getItem("passGAP5");
const gap5Completed = localStorage.getItem("gap5Completed");

const removeEntry = function () {
  const msg = document.querySelector("article");
  msg.remove();
};

const prepareWin = function () {
  removeEntry();
  results.insertAdjacentHTML("beforeend", htmlSuccess);
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

const validatePass = function () {
  if (input.value === `${pass}`) {
    endWindow.style.display = "block";
    winRegister();
  } else if (input.value != "bond") arrowIcon.style.color = "#f03e3e";
};

const arrowFly = function () {
  // arrowIcon.style.transform = "translateX(8000%)";
  inputArrowBtn.style.animation = "move 3s forwards ease-in-out";
};

const bond = function () {
  intro.style.display = "none";
  input.value = "";
  input.placeholder = "Use pass to unlock level";
  input.blur();
  input.style.transform = "scale(1)";
  arrowIcon.style.transform = "scale(1) translateX(0)";
  footer.parentNode.classList.remove("footer__abs");
  arrowIcon.style.color = "#fff";
};

arrowIcon.addEventListener("click", function () {
  // if (gap5Completed in localStorage) {
  if (input.value.toLowerCase() === "bond") {
    bond();
    prepareWin();
    console.log("bond");
  }
  // }
  else {
    validatePass();
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // if (gap5Completed in localStorage) {
    if (input.value.toLowerCase() === "bond") {
      bond();
      prepareWin();
      console.log("bond");
    }
    // }
    else {
      validatePass();
    }
  }
});

if ("gap5Completed" in localStorage) {
  bond();
  input.value = pass;
  intro.style.display = "none";
}

inputIntro.addEventListener("focus", function (e) {
  e.target.style.animation = "moveit 7s forwards ease-in-out";
});

inputArrowBtn.addEventListener("click", function () {
  arrowFly();
});

btnIntro.addEventListener("click", function () {
  btnIntro.disabled = true;
});

window.addEventListener("resize", function () {
  console.log("resz");
  console.log(window.devicePixelRatio);
  if (window.devicePixelRatio === 0.5) {
    inputIntro.style.display = "none";
    inputArrowBtn.style.display = "none";
  }
  if (window.devicePixelRatio === 0.25) {
    introH2.classList.add("zoomOut");
    footerAbs.style.zIndex = "1";

    introH3.classList.add("centerAbsolute");
  }
});
