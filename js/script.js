const trashIcon = document.querySelector(".trash");
const menuLi = document.querySelectorAll(".menu__li");
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
