'use strict';

const carousel = document.querySelector('.carousel');
const slides = [ ...carousel.children ];

const prevButton = document.querySelector('.carousel__btn_prev');
const lastButton = document.querySelector('.carousel__btn_next');
// const dots = document.querySelector('.carousel__dots-wrap');
const slideWidth = slides[0].getBoundingClientRect().width;

const setSLidePosition = (slide, index) => {
  slide.dataset.shift = slideWidth * index + 'px';
};

slides.forEach(setSLidePosition);

lastButton.addEventListener('click', rightShiftHandler);
prevButton.addEventListener('click', leftShiftHandler);
// dots.addEventListener('click', dotsClickHandler);

function rightShiftHandler() {
  const currentSlide = carousel.querySelector('.current_slide');
  const nextSlide = (currentSlide.nextElementSibling)
    ? currentSlide.nextElementSibling
    : slides[0];

  const amountToMove = nextSlide.dataset.shift;

  carousel.style.transform = `translateX(-${amountToMove})`;
  currentSlide.classList.remove('current_slide');
  nextSlide.classList.add('current_slide');
}

function leftShiftHandler() {
  const currentSlide = carousel.querySelector('.current_slide');
  const previousSlide = (currentSlide.previousElementSibling)
    ? currentSlide.previousElementSibling
    : slides[slides.length - 1];

  const amountToMove = previousSlide.dataset.shift;

  carousel.style.transform = `translateX(-${amountToMove})`;
  currentSlide.classList.remove('current_slide');
  previousSlide.classList.add('current_slide');
}
