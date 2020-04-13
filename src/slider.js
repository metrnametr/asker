!(function(){
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderCount = sliderItems.length;
    let currentItem = 0;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const dotContainer = document.createElement('div');
    dotContainer.classList.add('slider-dots');

    

    sliderItems.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot-item');
        if (i === 0) dot.classList.add('active');
        dot.onclick = function(){
            const dots = document.querySelectorAll('.dot-item');
            dots.forEach(it => it.classList.remove('active'));
            this.classList.add('active');
            currentItem = i;
            toggleSliderVisible();
        }
        dotContainer.appendChild(dot);
    });

    nextButton.onclick = () => {
        if (currentItem < sliderCount - 1) {
            currentItem++;
        } else {
            currentItem = 0;
        }
        toggleSliderVisible();
    }

    prevButton.onclick = () => {
        if (currentItem > 0) {
            currentItem--;
        } else {
            currentItem = sliderCount - 1;
        }
        toggleSliderVisible();
    }

    function toggleSliderVisible() {
        const dots = document.querySelectorAll('.dot-item');
        sliderItems.forEach((it, i) => (i === currentItem) ? it.classList.add('active') : it.classList.remove('active'))
        dots.forEach((it, i) => (i === currentItem) ? it.classList.add('active') : it.classList.remove('active'))
    }

    sliderContainer.appendChild(dotContainer);

})()