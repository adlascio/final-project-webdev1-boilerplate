import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";
export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }



    async getHTML() {
        const countryId = this.params.id;
        const findCountry = function(){
            for(let country of countries){
                if(country.cca3.toLowerCase() === countryId.toLowerCase()){
                    return country;
                }
            }
        }
        
        let selectedCountry = findCountry();
        console.log("selectedCountry",selectedCountry)
        let currencies = []; 
        let languages = []; 
        const loopObj = function(obj, arr){
            for(let el in obj){
                if(typeof obj[el] === "object"){
                 loopObj(obj[el], arr);   
                } else {
                    arr.push(obj[el]);
                }
            }
        }
        loopObj(selectedCountry.languages, languages);
        console.log(languages);
        loopObj(selectedCountry.currencies, currencies);
        const convertToString = (currencies) => {
            let str = "";
            for(let i = 0; i < currencies.length; i++){
                console.log(i%2 === 0);
                if(i%2 === 0){
                    str += currencies[i];
                } else if(i === currencies.length -1){
                    str += ` (${currencies[i]})`
                } else {
                    str += ` (${currencies[i]}), `
                }
            }
            return str;
        }
        const currenciesStr = convertToString(currencies);

        let bordersDiv = document.createElement("div");
        bordersDiv.classList.add("country__info__borders")
        if(selectedCountry.borders){
            bordersDiv.innerHTML = `<h3>Border Countries:</h3>`;
            for(let border of selectedCountry.borders){
                const borderLink = document.createElement("a");
                borderLink.setAttribute("href", `/countries/${border}`);
                borderLink.textContent = border;
                bordersDiv.appendChild(borderLink);
            }
        }
        return `
            <section class="country-section">
                <a id="backBtn" href="/countries">Back</a>
                <div class="country">
                    <img src="${selectedCountry.flags.png}">
                    <div class="country__info">
                        <h2>${selectedCountry.name.common}</h2>
                        <div class="country__info__field">
                            <h3>Official Name: </h3>
                            <span>${selectedCountry.name.official}</span>
                        </div>
                        <div class="country__info__field">
                            <h3>Population:</h3> <span> ${selectedCountry.population.toLocaleString("en-CA")} <span></sp>
                        </div>
                        <div class="country__info__field">
                            <h3>Region:</h3> <span> ${selectedCountry.region} </sp>
                        </div>
                        <div class="country__info__field">
                            <h3>Sub Region: </h3><span> ${selectedCountry.subregion} <span></sp>
                        </div>
                        <div class="country__info__field">
                            <h3>Capital:</h3> <span> ${selectedCountry.capital} <span></sp>
                        </div>
                        <div class="country__info__field">
                            <h3>Top Level Domain:</h3> <span> ${selectedCountry.tld[0]}</span>
                        </div>
                        <div class="country__info__field">
                            <h3>Currencies:</h3> <span> ${currenciesStr} <span></span>
                        </div>
                        <div class="country__info__field">
                            <h3>Languages:</h3> <span> ${languages}</span>
                        </div>
                        <div class ="country__info__borders">
                            ${bordersDiv.innerHTML}
                        </div>
                    </div>
                </div>
            </section>
            `;
    }
}