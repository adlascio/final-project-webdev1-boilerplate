import { getCountries } from "../countries.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
        console.dir(params.id);

    }

    async getHTML() {
        console.log("parm: " + this.params.id);

        const countries = getCountries();
        let country;
        for (country of countries) {
            if (country.cca3 === this.params.id) {
                break;
            }
        }
        console.dir(country);

        
        let currency = "";
        Object.keys(country.currencies).forEach((item) => {
            currency += country.currencies[item].name + " (" + country.currencies[item].symbol + ") ";
        });

        let languages = "";
        Object.keys(country.languages).forEach((item) => {
            if (languages != "") {
                languages += " / ";
            }
            languages += country.languages[item] + " ";
        });

        let nativeName = "";
        Object.keys(country.name.nativeName).forEach((item) => {
            if (nativeName != "") {
                nativeName += " / ";
            }
            nativeName += country.name.nativeName[item].common;
        });

        let borders = "";
        for (let bord of country.borders) {
            for (let i = 0 ; i < countries.length ; i++) {
                if (bord === countries[i].cca3) {
                    borders += "<a href='/countries/" + bord + "'>" + countries[i].name.common + "</a>";
                }
            }
        }


        const containerCards = "";
        return  `
            <section class="content">
                    <div class="content-button">
                        <a href="/countries">&laquo; Back</a>
                    </div>
                    <div class="content-container">
                        <div class="content-container-flag">
                            <img src="${country.flags.png}">
                        </div>
                        <div class="content-container-right">
                            <div class="content-container-right-title">
                                <h2>${country.name.common}</h2>
                            </div>
                            <div class="content-container-right-data">
                                <p>Native name: ${nativeName}</p>
                                <p>Population: ${country.population}</p>
                                <p>Region: ${country.region}</p>
                                <p>Sub-region: ${country.subregion}</p>
                                <p>Capital: ${country.capital}</p>
                                <p>Top level domain: ${country.tld}</p>
                                <p>Currency: ${currency}</p>
                                <p>Languages: ${languages}</p>
                            </div>
                            <div class="content-container-right-border">
                                <p>Border: ${borders}</p>
                            </div>
                        </div>
                    </div>
                </section>
    `
    }
}