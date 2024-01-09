//  .container .submitBtn {
//  .popup
//  .okBtn
//  .submitBtn

const submitBtn = document.querySelector(".container .submitBtn");
const okBtn = document.querySelector(".container .popup .okBtn");
const popup = document.querySelector(".container .popup");

submitBtn.addEventListener("click", () => {
    console.log("Hello ");
    submitBtn.style.display = "none";
    popup.style.display = "flex"; // Set display property to show the popup
});

okBtn.addEventListener("click", () => {
    console.log("Hello ");
    popup.style.display = "none"; // Set display property to hide the popup
    submitBtn.style.display = "";
});
