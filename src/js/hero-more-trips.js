const heroMoreTripsEl = document.querySelector(".hero-more-trips");
const buttonEl = heroMoreTripsEl.querySelector(".hero-more-trips_button");
const textEl = heroMoreTripsEl.querySelector(".hero-more-trips_text");

const toggleClassName = "pulse";

textEl.addEventListener("mouseenter", onMouseEnter);

function onMouseEnter() {
  buttonEl.classList.add(toggleClassName);

  textEl.addEventListener("mouseleave", onMouseLeave);
  textEl.removeEventListener("mouseenter", onMouseEnter);
}

function onMouseLeave() {
  buttonEl.classList.remove(toggleClassName);

  textEl.addEventListener("mouseenter", onMouseEnter);
  textEl.removeEventListener("mouseleave", onMouseLeave);
}
