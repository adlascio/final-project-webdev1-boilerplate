import { getCountries } from "../countries.js";
import AbstractView from "./AbstractView.js";

console.log(window.location.pathname);

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        const containerCards = document.createElement("div");
        const countries = getCountries();

        for (let country of countries) {
          const card = document.createElement("div");
          card.innerHTML = `

                <div class="center">
                    <div class="property-card">
                        <a href="countries/${country.cca3}">
                        <div class="property-image" style="background-image:url('${country.flags.png}');">
                            <div class="property-image-title">
                            
                            </div>
                        </div></a>
                        <div class="property-description">
                        <h5>${country.name.common}</h5>
                        <p>Population: ${country.population}</p>
                        <p id="region">Region: ${country.region}</p>
                        <p>Capital: ${country.capital}</p>
                        </div>
                    </div>
                </div>
                `;

            //     <div class="country-cards">
            //         <div class="country-img">
            //             <a href="countries/${country.cca3}"><img src="${country.flags.png}" /></a>
            //         </div>
            //         <div class="country-information">
            //             <h2 id="countryName">${country.name.common}</h2>
            //             <p>Population: ${country.population}</p>
            //             <p id="region">Region: ${country.region}</p>
            //             <p>Capital: ${country.capital}</p>
            //         </div>
            //         </div>
            //     </div>
            // `;
            containerCards.appendChild(card);
        }

 
        return `
            <section class="countries-section">
                <div class="filter-container">
                    <form id="formSearch">
                        <input type="text" name="searchCountry" id="searchCountry" placeholder="Search for a country..." class="searching-part-inpt">
                    </form>
                    <select class="regionSelect" id="regionSelect">
                        <option value="">Filter by Region</option>
                        <option value="Region: Africa">Africa</option>
                        <option value="Region: Americas">Americas</option>
                        <option value="Region: Asia">Asia</option>
                        <option value="Region: Europe">Europe</option>
                        <option value="Region: Oceania">Oceania</option>
                    </select>
                </div>
                <div class="container">
                    ${containerCards.innerHTML}
                </div>
            </section>
        `;
      
    }

}