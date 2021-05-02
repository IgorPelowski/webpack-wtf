
import '../scss/style.scss';
import '../js/script.js';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const button = document.querySelector('.button');
let isDark = true;
function truu(){
    isDark = !isDark
    kys();
}

button.addEventListener("click", truu);


function kys(){
    if (isDark === false){
        document.documentElement.style.setProperty('--background-color','white');
    }
    else{
        document.documentElement.style.setProperty('--background-color','rgb(34, 1, 0)');
    }

}
const loadButton = document.querySelector('.load');
const saveButton = document.querySelector('.save');
const entryInput = document.querySelector('.textarea');


saveButton.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.setItem('entry', entryInput.value)
})
loadButton.addEventListener('click', (e)=>{
    e.preventDefault();

    entryInput.value = localStorage.getItem('entry')
})