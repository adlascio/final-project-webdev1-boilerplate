
import {getCountries} from './countries.js'

const countries = getCountries();

console.log(window.location.pathname);

if (window.location.pathname === "/") {
    console.log("Main");

}
//console.log(countries);

console.dir(window);

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log(window.location.pathname);
    if (window.location.pathname === "/countries") {
        const formSearch = document.getElementById("formSearch");
        formSearch.addEventListener('submit',function(event) {
            event.preventDefault();
            console.log("submit");
        });
        const searchCountry = document.getElementById("searchCountry");
        searchCountry.addEventListener('keyup',function(event){
            // if (event.keyCode === 13) {
            //     console.log("d");
            // }
            // console.log(event.keyCode);
            // console.log(countries[0].capital);
            
            const countriesName = this.parentElement.parentElement.parentElement.children[1];
            for (let i = 0 ; i < countriesName.childElementCount ; i++) {
                const countryName = countriesName.children[i].children[0].children[1].children[0].innerText;
                if (countryName.toUpperCase().includes(this.value.toUpperCase())) {
                    countriesName.children[i].children[0].style.display = "block";
                } else {
                    countriesName.children[i].children[0].style.display = "none";
                }
                
            }
        
        });

        const regionSelect = document.getElementById("regionSelect");
        regionSelect.addEventListener('change',function(event){
            
            const countriesRegion = this.parentElement.parentElement.parentElement.children[0].children[1];
            console.log(this.value);
            for (let i = 0 ; i < countriesRegion.childElementCount ; i++) {
                const countryRegion = countriesRegion.children[i].children[0].children[1].children[2].innerText;
                if (countryRegion == this.value || this.value === "" ) {
                    countriesRegion.children[i].children[0].style.display = "block";
                } else {
                    countriesRegion.children[i].children[0].style.display = "none";
                }
                
            }
        });
        window.location.pathname};
});