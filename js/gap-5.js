const locked = document.querySelector(".locked");
const gap4Completed = localStorage.getItem("gap4Completed");
const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const endWindow = document.querySelector(".success");
const h6 = document.querySelector("h6");
const h1 = document.querySelector("h1");
const footer = document.querySelector(".footer");
const introH2 = document.querySelector(".intro__title");
const footerAbs = document.querySelector(".footer__abs");
const intro = document.querySelector(".intro");
const btnIntro = document.querySelector(".btn__intro");
const inputIntro = document.querySelector(".inputIntro");
const inputArrowBtn = document.querySelector(".arrowIconIntro");
const introH3 = document.querySelector(".intro_h3");
let count = 0;
let bondBool = false;

const date = new Date();

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
    const password = Math.trunc(
      Math.random() * date.getTime().toString().slice(6)
    );
    localStorage.setItem("passGAP5", password);

    localStorage.setItem("PassRegisteredGAP5", true);
  }
};

storage();

const winRegister = function () {
  localStorage.setItem("gap5Completed", true);
  endWindow.style.display = "block";
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

const validatePass = function () {
  if (input.value === `${pass}`) {
    winRegister();
  } else if (input.value != "bond") arrowIcon.style.color = "#f03e3e";
};

const arrowFly = function () {
  inputArrowBtn.style.animation = "move 3s forwards ease-in-out";
};

const resetInput = function () {
  intro.style.display = "none";
  input.value = "";
  input.placeholder = "Use pass to unlock level";
  input.blur();
  input.style.transform = "scale(1)";
};

const bond = function () {
  resetInput();
  arrowIcon.style.transform = "scale(1) translateX(0)";
  footer.parentNode.classList.remove("footer__abs");
  arrowIcon.style.color = "#fff";
  h6.style.display = "none";
  bondBool = true;
};

arrowIcon.addEventListener("click", function () {
  if (input.value.toLowerCase() === "bond") {
    bond();
    prepareWin();
  } else {
    validatePass();
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (input.value.toLowerCase() === "bond") {
      bond();
      prepareWin();
    } else {
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

const removeIntroBtns = function () {
  inputArrowBtn.style.display = "none";
  inputIntro.style.display = "none";
};

const ratio025Prep = function () {
  introH2.classList.add("zoomOut");
  footerAbs.style.zIndex = "1";
};

const introh6Hint = function () {
  introH3.classList.add("centerAbsolute");
  h6.classList.add("centerAbsoluteHint");
};

window.addEventListener("resize", function () {
  if (window.devicePixelRatio === 0.5) {
    inputIntro.style.display = "none";
    btnIntro.style.display = "none";
    removeIntroBtns();
  }
  if (window.devicePixelRatio === 0.25) {
    ratio025Prep();
    introh6Hint();
    btnIntro.style.display = "block";
  }
});

const load25 = function () {
  if (window.devicePixelRatio === 0.25) {
    ratio025Prep();
    removeIntroBtns();
    introh6Hint();
  }
};

load25();

document.addEventListener(
  "wheel",
  function touchHandler(e) {
    if (window.devicePixelRatio === 0.25 && !bondBool) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    }
  },
  { passive: false }
);
