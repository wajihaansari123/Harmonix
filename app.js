let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seemore');
let carosuel = document.querySelector('.carosuel');
let ListHTML = document.querySelector('.carosuel .list');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {

    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carosuel.classList.remove('prev','next');


    let items = document.querySelectorAll('.carosuel .list .item');

    if(type === 'next'){
        let firstItem = items[0];
        ListHTML.appendChild(firstItem);
    }
    else{
        let positionLast = items.length - 1;
        let lastItem = items[positionLast];
        ListHTML.prepend(lastItem);
        carosuel.classList.add('prev');
    }

    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() =>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    
    },2000);
}
seeMoreButtons.forEach(button => {
    button.onclick = function(){
        carosuel.classList.add('showDetail')
    }
})
backButton.onclick = function(){
    carosuel.classList.remove('showDetail');
}