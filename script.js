// Auto-scroll destinations carousel
const carousel = document.getElementById('carousel');

let scrollAmount = 0;
function autoScroll() {
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  } else {
    scrollAmount += 300;
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
}

setInterval(autoScroll, 3000);

// Contact form submit (dummy)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
  this.reset();
});
