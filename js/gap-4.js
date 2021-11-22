const locked = document.querySelector(".locked");
const gap3Completed = localStorage.getItem("gap3Completed");
const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const endWindow = document.querySelector(".success");
const h6 = document.querySelector("h6");
const h1 = document.querySelector("h1");
const mainBtn = document.querySelector(".mainBtn");
const menu = document.querySelector(".menu");
const noCursor = document.querySelector(".noCursor");
let count = 0;
let arrowGone = false;

const unlockLevel = function () {
  if (gap3Completed) locked.style.display = "none";
};
unlockLevel();

const hint = function () {
  if (!("HintRegisteredGAP3" in localStorage)) {
    setTimeout(function () {
      h6.style.display = "inline-block";
      localStorage.setItem("HintRegisteredGAP3", true);
    }, 60000);
  }
};

if (gap3Completed) hint();

const HintRegistered = localStorage.getItem("HintRegisteredGAP3");
if (HintRegistered) h6.style.display = "inline-block";

const storage = function () {
  if (!("PassRegisteredGAP4" in localStorage)) {
    const password = Math.trunc(Math.random() * 194851254);
    localStorage.setItem("passGAP4", password);

    localStorage.setItem("PassRegisteredGAP4", true);
  }
};

storage();

const winRegister = function () {
  localStorage.setItem("gap4Completed", true);
};

const pass = localStorage.getItem("passGAP4");
const gap4Completed = localStorage.getItem("gap4Completed");

const removeEntry = function () {
  const msg = document.querySelector("article");
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

const validatePass = function () {
  if (input.value === `${pass}`) {
    endWindow.style.display = "block";
    winRegister();
  } else arrowIcon.style.color = "#f03e3e";
};

const arrowFly = function () {
  // arrowIcon.style.transform = "translateX(8000%)";
  arrowIcon.style.animation = "move 3s forwards ease-in-out";
};

if (!gap4Completed) {
  arrowIcon.addEventListener("click", function () {
    if (input.value === `${pass}`) {
      arrowFly();
      h1.textContent = "Where did it go?!";
      // arrowGone = true;
    } else {
      arrowIcon.style.color = "#f03e3e";
    }
  });
}

if (!gap4Completed) {
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (input.value === `${pass}`) {
        arrowFly();
        h1.textContent = "Where did it go?!";
      } else {
        arrowIcon.style.color = "#f03e3e";
      }
    }

    // if (e.key === "Enter" && arrowGone) validatePass();
  });
}

if ("gap4Completed" in localStorage) {
  input.value = pass;
  mainBtn.style.display = "none";
  noCursor.classList.remove("noCursor");
}

const prepareWin = function () {
  removeEntry();
  results.insertAdjacentHTML("beforeend", htmlSuccess);
  winRegister();
};

if (!gap4Completed) {
  mainBtn.addEventListener("click", function (num1, num2, pos) {
    mainBtn.style.opacity = 1;
    let ms = 0;
    for (let i = 0; i < 30; i++) {
      ms = ms + 100;
      setTimeout(function () {
        num1 = Math.trunc(Math.random() * 350);
        num2 = Math.trunc(Math.random() * 350);
        pos = Math.random() > 0.5 ? "+" : "-";
        mainBtn.style.transform = `translate(${pos}${num1}%,${pos}${num2}%)`;
        if (i > 12) mainBtn.style.opacity = 0;
      }, ms);
    }
    noCursor.classList.remove("noCursor");
    mainBtn.style.cursor = "wait";
    count++;
    console.log(count);
    if (count === 5) {
      input.value = pass;
      mainBtn.style.display = "none";
    }
  });
}

h6.addEventListener("click", function () {
  if (h1.textContent === "Where did it go?!" && input.value === pass) {
    validatePass();
  }
});
