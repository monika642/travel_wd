// Auto-slide carousel
const carousel = document.getElementById("carousel");

let scrollAmount = 0;
setInterval(() => {
  carousel.scrollBy({ left: 270, behavior: "smooth" });
  scrollAmount += 270;

  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
    scrollAmount = 0;
  }
}, 3000);

// Book Now buttons
document.querySelectorAll(".book-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Booking feature coming soon! 🚀");
  });
});
