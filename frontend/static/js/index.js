import {getCountries} from './countries.js'

export const countries = getCountries();
const regions = [];
for(let country of countries){
    if(!regions.includes(country.region)){
        regions.push(country.region);
    }

}

export const showCountries = function(countries, grid){
    grid.innerHTML = "";
    if(countries.length === 0){
        console.log("here")
        grid.appendChild("<h3>No results found...</h3>")
    }
    countries.forEach(country => {
        const card = document.createElement("div");
        card.classList.add("countries__grid__card");
        card.setAttribute("key", country.cca3);
        card.innerHTML = `
        <div class="countries__grid__card__img-container">
            <img src="${country.flags.svg}">
        </div>
        <div class="countries__grid__card__info">
            <h3>${country.name.common}</h3>
            <p>Population: ${country.population.toLocaleString("en-CA")}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
        </div>
        <a class="countries__grid__card__link" href="/countries/${country.cca3}">See more...</a>
        `
        grid.appendChild(card);
    })
    return grid.innerHTML;
}

window.addEventListener('hashchange', function () {
    console.log('location changed!');
});

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const grid = document.getElementsByClassName("countries__grid")[0];
    console.log(window.location)
    if(window.location.pathname === '/countries'){
        // showCountries(countries, grid);
        const searchInput = document.getElementById("searchInput");
        const selectRegion = document.getElementById("selectRegion");
        for(let region of regions){
            let regionOption = document.createElement("option");
            regionOption.textContent = region;
            regionOption.setAttribute("value", region);
            selectRegion.appendChild(regionOption);
        }
        selectRegion.addEventListener("change", function(e){
            console.log("changed", regions);
            console.log("value",e.target.value);
            let filteredCountries = [];
            for(let country of countries){
                if(country.region === e.target.value){
                    filteredCountries.push(country);
                }
            }
            showCountries(filteredCountries, grid);

        })
        searchInput.addEventListener("keypress", function(e){
            if(e.key === "Enter"){
                console.log("enter pressed");
                grid.innerHTML="";
                let filteredCountries = [];
                for(let country of countries){
                    const countryName = country.name.common.toLowerCase();
                    const inputValue = e.target.value.toLowerCase();
                    if(countryName.indexOf(inputValue) !== -1){
                        filteredCountries.push(country);
                    }
                }
                showCountries(filteredCountries, grid);
            }
    
        })
    }
});




console.log(countries);
