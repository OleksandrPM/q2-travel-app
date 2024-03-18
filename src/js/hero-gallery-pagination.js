const galleryEl = document.querySelector(".hero-gallery");
const paginationEl = galleryEl.querySelector(".hero-gallery_pagination");
const buttonEls = paginationEl.querySelectorAll(".pagination_button");
// const textEl = paginationEl.querySelector(".pagination_text");

const hoverClassName = "pagination_text";
const toggleClassName = "pulse";

export function toggleClassPagination(classUnderCursor) {
  if (classUnderCursor.includes(hoverClassName)) {
    buttonEls.forEach((el) => {
      el.classList.add(toggleClassName);
    });
  } else {
    buttonEls.forEach((el) => {
      el.classList.remove(toggleClassName);
    });
  }
}
