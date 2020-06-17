'use strict';

const carousel = document.querySelector('.carousel');
const slides = [ ...carousel.children ];
const slideWidth = slides[0].getBoundingClientRect().width;

const prevButton = document.querySelector('.carousel__btn_prev');
const lastButton = document.querySelector('.carousel__btn_next');

const dotsCollection = document.querySelector('.carousel__dots-wrap');
const dots = [ ...dotsCollection.children ];

slides.forEach(setSlidePosition);

lastButton.addEventListener('click', rightShiftHandler);
prevButton.addEventListener('click', leftShiftHandler);
dotsCollection.addEventListener('click', dotsClickHandler);

function setSlidePosition(slide, index) {
  slide.dataset.shift = slideWidth * index + 'px';
};

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

function dotsClickHandler(e) {
  const currentDot = e.target.closest('.carousel__dot');

  if (currentDot) {
    const activeDot = dotsCollection.querySelector('.carousel__dot_active');
    const index = dots.findIndex(dot => dot === currentDot);
    const amountToMove = slides[index].dataset.shift;

    carousel.style.transform = `translateX(-${amountToMove})`;
    activeDot.classList.remove('carousel__dot_active');
    dots[index].classList.add('carousel__dot_active');
  }
}
