// var button = document.getElementById("toggle1"); // Assumes element with id='button'

// button.onclick = function () {
//   var div = document.getElementById("newpost");
//   if (div.style.display !== "none") {
//     div.style.display = "none";
//   } else {
//     div.style.display = "block";
//   }
// };

// var button = document.getElementById("toggle2"); // Assumes element with id='button'

// button.onclick = function () {
//   var div = document.getElementById("newpost1");
//   if (div.style.display !== "none") {
//     div.style.display = "none";
//   } else {
//     div.style.display = "block";
//   }
// };

const button = document.getElementById("toggle-button");
const content = document.getElementById("toggle-content");
// Add event listener to the button
button.addEventListener("click", function () {
  // Toggle the content visibility
  if (content.style.display === "none") {
    content.style.display = "show";
  } else {
    content.style.display = "none";
  }
});
