const trashIcon = document.querySelector(".trash");
const closeIcon = document.querySelector(".closeX");
const closeEach = document.querySelectorAll(".closeEach");
const menuLi = document.querySelectorAll(".menu__li");
const body = document.querySelector("body");
const gap1Completed = localStorage.getItem("gap1Completed");
const gap2Completed = localStorage.getItem("gap2Completed");
const gap3Completed = localStorage.getItem("gap3Completed");
const gap4Completed = localStorage.getItem("gap4Completed");
const gap5Completed = localStorage.getItem("gap5Completed");
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
    menuLi[i].textContent = `Level ${i + 1} ✔`;
  }
});

trashIcon.addEventListener("click", function () {
  localStorage.clear();
  alert("Reset was successful");
  location.reload();
});

const remove = function (i) {
  localStorage.removeItem(`gap${i}Completed`);
};

closeIcon.addEventListener("click", function () {
  console.log("del");
  delBool = true;
  body.style.cursor = "pointer";
  closeEach.forEach((each) => (each.style.opacity = "1"));
});

window.addEventListener("click", function () {
  if (delBool === true)
    closeEach.forEach((each) =>
      each.addEventListener("click", function (e) {
        // console.log(each.dataset.at);
        remove(each.dataset.at);
        location.reload();
      })
    );
});

// if (delBool === true) {
//   menuLi.addEventListener("click", function (e) {
//     e.preventdefault();
//     console.log("l");
//   });
// }

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
