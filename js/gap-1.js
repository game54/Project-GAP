const results = document.querySelector(".results");
const arrowIcon = document.querySelector(".arrowIcon");
const input = document.querySelector(".input");
const endWindow = document.querySelector(".success");
const h6 = document.querySelector("h6");

const getJSON = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);

    return response.json();
  });
};

const hint = function () {
  if (!("HintRegistered" in localStorage)) {
    setTimeout(function () {
      h6.style.display = "block";
      localStorage.setItem("HintRegistered", true);
    }, 60000);
  }
};

hint();
const HintRegistered = localStorage.getItem("HintRegistered");
if (HintRegistered) h6.style.display = "block";

const storage = function () {
  if (!("PassRegistered" in localStorage)) {
    const password = Math.trunc(Math.random() * 194851254);
    localStorage.setItem("pass", password);

    localStorage.setItem("PassRegistered", true);
  }
};

storage();

const winRegister = function () {
  localStorage.setItem("gap1Completed", true);
};

const pass = localStorage.getItem("pass");
const gap1Completed = localStorage.getItem("gap1Completed");

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
                  <p class="message">Too fast. (<~2sec)</p>
                  </div>
                  `;

btn.addEventListener("click", function () {
  const timeout = function (sec) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error("request took too long"));
      }, sec * 1000);
    });
  };

  Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/${"france"}`),
    timeout(2),
  ])
    .then((res) => {
      // console.log("Failed");
      removeEntry();
      results.insertAdjacentHTML("beforeend", htmlError);
      // console.log(res);
    })
    .catch((err) => {
      // console.error("success");
      // console.log(err.message);
      if (err.message === "Failed to fetch") return;
      removeEntry();
      results.insertAdjacentHTML("beforeend", htmlSuccess);
    });
});

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

if ("gap1Completed" in localStorage) {
  input.value = pass;
}

// disable right click
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// document.onkeydown = function (e) {
//   // disable F12 key
//   if (e.keyCode == 123) {
//     return false;
//   }

//   // disable I key
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//     return false;
//   }

//   // disable J key
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//     return false;
//   }

//   // disable U key
//   if (e.ctrlKey && e.keyCode == 85) {
//     return false;
//   }
// };
