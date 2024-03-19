const galleryEl = document.querySelector(".hero-gallery");
const imgList = galleryEl.querySelector(".hero-gallery_list");
const itemEls = document.querySelectorAll(".hero-gallery_item");
const paginationEl = galleryEl.querySelector(".hero-gallery_pagination");
const buttonEls = paginationEl.querySelectorAll(".pagination_button");
const textEl = paginationEl.querySelector(".pagination_text");

const toggleClassName = "pulse";

const slideStep = itemEls[1].offsetLeft;
let imgListPosition = 0;
let itemOnStart = 1;

textEl.addEventListener("mouseenter", onMouseEnter);

buttonEls[1].addEventListener("click", onForwardBtnClick);

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

function onForwardBtnClick() {
  imgList.style.transform = `translateX(${imgListPosition - slideStep}px)`;
  imgListPosition -= slideStep;
  itemOnStart += 1;

  if (itemOnStart === itemEls.length) {
    buttonEls[1].disabled = true;
    buttonEls[1].removeEventListener("click", onForwardBtnClick);
  }

  if (itemOnStart > 1) {
    buttonEls[0].disabled = false;
    buttonEls[0].addEventListener("click", onBackBtnClick);
  }
}

function onBackBtnClick() {
  imgList.style.transform = `translateX(${imgListPosition + slideStep}px)`;
  imgListPosition += slideStep;
  itemOnStart -= 1;

  if (itemOnStart === 1) {
    buttonEls[0].disabled = true;
    buttonEls[0].removeEventListener("click", onBackBtnClick);
  }

  if (itemOnStart < itemEls.length) {
    buttonEls[1].disabled = false;
    buttonEls[1].addEventListener("click", onForwardBtnClick);
  }
}
