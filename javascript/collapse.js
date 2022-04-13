let collapse = document.querySelector(".btn-collapse");
let i;
collapse.addEventListener("click", function () {
 this.classList.toggle("active");
 let card = this.nextElementSibling;
 if (card.style.display === "flex") {
  card.style.display = "none";
 } else {
  card.style.display = "flex";
 }
});