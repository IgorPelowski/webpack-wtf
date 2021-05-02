const button = document.querySelector('.nav__button');
function myClick(){
    const comps = document.querySelector('.menu');
    comps.classList.toggle('menu__open');
    
}
button.addEventListener("click", myClick);