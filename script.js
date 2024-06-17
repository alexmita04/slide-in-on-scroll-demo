const imgs = document.querySelectorAll(".slider-img");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function scrollHandler(e) {
  imgs.forEach((img) => {
    const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
      img.classList.remove("slider-img");
    } else {
      img.classList.remove("active");
      img.classList.add("slider-img");
    }
  });
}

window.addEventListener("scroll", debounce(scrollHandler));
