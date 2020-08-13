const items = document.querySelector('.carousel__items');
const slides = Array.from(items.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (items, currentSlide, TargetSlide) => {
    items.style.transform = 'translateX(-' + TargetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    TargetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = items.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(items, currentSlide, prevSlide)
})
nextButton.addEventListener('click', e => {
    const currentSlide = items.querySelector('.current-slide');

    const nextSlide = currentSlide.nextElementSibling;


    moveToSlide(items, currentSlide, nextSlide)

})