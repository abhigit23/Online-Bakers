const hamburgerBtn = document.querySelector(".mobile-nav");
const mobileNavbar = document.querySelector(".mobile-nav-container");
const dotCotainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".customer");
const navbar = document.querySelector(".navbar");

// Collapse Hamburger Menu
hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("mobile-navbar");
});

// Review Slides

let currSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${102 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};

const createDots = function () {
  slides.forEach(function (_, i) {
    dotCotainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

dotCotainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);
