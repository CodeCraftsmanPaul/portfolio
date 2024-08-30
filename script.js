const menuIcon = document.getElementById("menuIcon");
const navContainer = document.getElementById("navContainer");
const loader = document.querySelector(".loader");
menuIcon.addEventListener("click", () => {
  navContainer.classList.toggle("hide-on-small-screen");
  console.log("HEllo");
});

window.addEventListener("load", function () {
  loader.classList.remove("hidden");
  this.setTimeout(() => {
    console.log(loader);
    loader.classList.add("hidden");
  }, 3000);
});
