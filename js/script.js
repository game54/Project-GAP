const trashIcon = document.querySelector(".trash");
const closeIcon = document.querySelector(".closeX");
const deleteIcon = document.querySelector(".deleteIcon");
const closeEach = document.querySelectorAll(".closeEach");
const menuLi = document.querySelectorAll(".menu__li");
const body = document.querySelector("body");
const gap1Completed = localStorage.getItem("gap1Completed");
const gap2Completed = localStorage.getItem("gap2Completed");
const gap3Completed = localStorage.getItem("gap3Completed");
const gap4Completed = localStorage.getItem("gap4Completed");
const gap5Completed = localStorage.getItem("gap5Completed");
const HintRegistered = localStorage.getItem("hintRegistered");
const HintRegisteredGAP2 = localStorage.getItem("HintRegisteredGAP2");
const HintRegisteredGAP3 = localStorage.getItem("HintRegisteredGAP3");
const HintRegisteredGAP4 = localStorage.getItem("HintRegisteredGAP4");
const HintRegisteredGAP5 = localStorage.getItem("HintRegisteredGAP5");
const PassRegistered = localStorage.getItem("PassRegistered");
const PassRegisteredGAP2 = localStorage.getItem("PassRegisteredGAP2");
const PassRegisteredGAP3 = localStorage.getItem("PassRegisteredGAP3");
const PassRegisteredGAP4 = localStorage.getItem("PassRegisteredGAP4");
const PassRegisteredGAP5 = localStorage.getItem("PassRegisteredGAP5");
const pass = localStorage.getItem("pass");
const passGAP2 = localStorage.getItem("passGAP2");
const passGAP3 = localStorage.getItem("passGAP3");
const passGAP4 = localStorage.getItem("passGAP4");
const passGAP5 = localStorage.getItem("passGAP5");
const gapsCompleted = [
  gap1Completed,
  gap2Completed,
  gap3Completed,
  gap4Completed,
  gap5Completed,
];
let delBool = false;

gapsCompleted.forEach(function (gap, i) {
  if (gap === "true") {
    // menuLi[i].textContent = `Level ${i + 1} ✔`;
    // menuLi[i].style.textDecoration = "line-through rgba(201, 42, 42, 0.949)";
    menuLi[i].style.color = "#37b24d";
  }
});

trashIcon.addEventListener("click", function () {
  if (confirm("Are you sure you want to reset all levels?")) {
    localStorage.clear();
    alert("Reset was successful");
    location.reload();
  }
});

const remove = function (i) {
  console.log(i);
  localStorage.removeItem(`gap${i}Completed`);
  localStorage.removeItem(`HintRegisteredGAP${i}`);
  localStorage.removeItem(`PassRegisteredGAP${i}`);
  localStorage.removeItem(`passGAP${i}`);
  if (i === `1`) {
    localStorage.removeItem(`HintRegistered`);
    localStorage.removeItem(`HintRegistered`);
    localStorage.removeItem(`PassRegistered`);
    localStorage.removeItem(`pass`);
  }
};

const showDelBtns = function () {
  deleteIcon.style.opacity = "1";
  deleteIcon.style.pointerEvents = "visible";
  deleteIcon.style.visibility = "visible";
};
const hideDelBtns = function () {
  deleteIcon.style.opacity = "0";
  deleteIcon.style.pointerEvents = "none";
  deleteIcon.style.visibility = "hidden";
};

closeIcon.addEventListener("click", function () {
  if (delBool === false) {
    delBool = true;
    showDelBtns();
  } else {
    delBool = false;
    hideDelBtns();
  }
});

deleteIcon.addEventListener("click", function (e) {
  if (delBool === true) {
    if (e.target.classList.contains("closeEach")) {
      remove(e.target.dataset.at);
      location.reload();
    }
  }
});

// window.addEventListener("click", function () {
//   if (delBool === true)
//     closeEach.forEach((each) =>
//       each.addEventListener("click", function () {
//         remove(each.dataset.at);
//         location.reload();
//         // console.log(each.dataset.at);
//       })
//     );
// });

// Event delegation
// const ul = document.querySelector(".menu__ul");
// ul.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("menu__li")) console.log(e.target);
// });

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
