import { toggleClassPagination } from "./hero-gallery-pagination";
import { toggleClassMoreTrips } from "./hero-more-trips";

// додати проріджувач!
document.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(event) {
  const classUnderCursor = event.target.classList.value;

  toggleClassPagination(classUnderCursor);

  toggleClassMoreTrips(classUnderCursor);
}
