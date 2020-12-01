let totalSlides = document.querySelectorAll('.slider--item').length;document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides} )`;
let currentSlide = 0;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


function goPrev(){
    currentSlide--;
    if(currentSlide < 0 ){
        currentSlide = totalSlides - 1;  //lembrando que começa no 0, ou seja, 3slides = 0,1,2, porem o length seria 3
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;  
}

setInterval(goNext, 5000);