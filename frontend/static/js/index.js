import {getCountries} from './countries.js'

export const countries = getCountries();

console.log(countries);
//Add all the addEventListener inside this 
window.addEventListener('DOMContentLoaded', (event) => {
  
  //Switch screen mode (light/dark)
  function switchScreenMode() {
    let screen = document.body;
    let toggleBtn = document.getElementById("switch");
  
    toggleBtn.addEventListener("click", function(){
    screen.classList.toggle("dark");
    });
  
  }
  switchScreenMode();
  

});
