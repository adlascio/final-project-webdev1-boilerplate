import {getCountries} from './countries.js'

const countries = getCountries();

console.log(countries);


//Switch screen mode (light/dark)
function switchScreenMode() {
  let screen = document.body;
  let toggleBtn = document.getElementById("switch");

  toggleBtn.addEventListener("click", function(){
  screen.classList.toggle("dark");
  });

}
switchScreenMode();
