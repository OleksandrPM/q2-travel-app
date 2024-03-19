const galleryEl = document.querySelector(".hero-gallery");
const paginationEl = galleryEl.querySelector(".hero-gallery_pagination");
const buttonEls = paginationEl.querySelectorAll(".pagination_button");
const textEl = paginationEl.querySelector(".pagination_text");

const toggleClassName = "pulse";

textEl.addEventListener("mouseenter", onMouseEnter);

function onMouseEnter() {
  buttonEls.forEach((el) => {
    el.classList.add(toggleClassName);
  });

  textEl.addEventListener("mouseleave", onMouseLeave);
  textEl.removeEventListener("mouseenter", onMouseEnter);
}

function onMouseLeave() {
  buttonEls.forEach((el) => {
    el.classList.remove(toggleClassName);
  });

  textEl.addEventListener("mouseenter", onMouseEnter);
  textEl.removeEventListener("mouseleave", onMouseLeave);
}
