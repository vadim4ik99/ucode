
function slider() {
 

    const slideNodes = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        slidesWrapperKeyhole = document.querySelector('.offer__slider-wrapper'),
        slidesIndexWrapper = document.querySelector("#current"),
        slidesTotalWrapper = document.querySelector('#total'),
        slidesField = document.querySelector('.offer__slider-inner'),
        // keyholeWidthInt = parseInt(window.getComputedStyle(slidesWrapperKeyhole).width.slice(0, -2));
        keyholeWidthInt = parseInt(window.getComputedStyle(slidesWrapperKeyhole).width.replace(/\D/g, '.')); //якщо юзати'' то точка зниикне і пизда тобі якщо число пікселів було не ціле
    let slideIndex = 1;

    //prepare html/css    
    slidesField.style.width = 100 * slideNodes.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapperKeyhole.style.overflow = 'hidden';
    slideNodes.forEach(item => item.style.width = keyholeWidthInt);

    if (slideNodes.length < 10) {
        slidesTotalWrapper.innerHTML = '0';
    }
    slidesTotalWrapper.innerHTML += slideNodes.length;

    function showSlide(currentSlideIndex) {

        if (currentSlideIndex > slideNodes.length) {
            currentSlideIndex = 1;
        }

        if (currentSlideIndex < 1) {
            currentSlideIndex = slideNodes.length;
        }

        let offset = keyholeWidthInt * (currentSlideIndex - 1);

        let previousSlideIndex = slideIndex;
        slideIndex = currentSlideIndex;

        //write current index
        slidesIndexWrapper.innerHTML = "";
        if (currentSlideIndex < 10) {
            slidesIndexWrapper.innerHTML = "0";
        }
        slidesIndexWrapper.innerHTML += currentSlideIndex;

        //move slides
        slidesField.style.transform = `translateX(-${offset}px`;


        //change indicators
        document.getElementById(`indicator for slide ${previousSlideIndex}`).style.opacity = '0.5';
        document.getElementById(`indicator for slide ${currentSlideIndex}`).style.opacity = '1';
    }

    next.addEventListener('click', () => showSlide(slideIndex + 1));
    prev.addEventListener('click', () => showSlide(slideIndex - 1));


    //create dot navigation for slider
    const slider = document.querySelector('.offer__slider'),
        sliderIndicatorsWrapper = document.createElement('ol');

    sliderIndicatorsWrapper.classList.add('carousel-indicators');
    slider.style.position = 'relative';
    slider.append(sliderIndicatorsWrapper);

    function createSliderIndicator(n) {
        let newDot = document.createElement('li');
        newDot.classList.add('dot');
        newDot.id = `indicator for slide ${n}`
        sliderIndicatorsWrapper.append(newDot);
        newDot.addEventListener('click', () => showSlide(n));
    }
    for (let i = 1; i <= slideNodes.length; i++) {
        createSliderIndicator(i);
    }

    showSlide(slideIndex);

    setInterval(() => {
        slideIndex++
        showSlide(slideIndex)
    }, 3000)

}

slider()
