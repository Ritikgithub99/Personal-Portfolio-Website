function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
      strings: ["Developer", "Designer",],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true, // Ensures it runs infinitely
    });
  });
