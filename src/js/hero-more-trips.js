const heroMoreTripsEl = document.querySelector(".hero-more-trips");
const buttonEl = heroMoreTripsEl.querySelector(".hero-more-trips_button");

const hoverClassName = "hero-more-trips_text";
const toggleClassName = "pulse";

export function toggleClassMoreTrips(classUnderCursor) {
  if (classUnderCursor.includes(hoverClassName)) {
    buttonEl.classList.add(toggleClassName);
  } else {
    buttonEl.classList.remove(toggleClassName);
  }
}
