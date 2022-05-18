import AbstractView from "./AbstractView.js";
import { countries } from "../index.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        
        console.log(this.params.id);
        const div = document.createElement("div");
        const card = document.createElement("card");
        div.innerHTML = `
        <div>
            <h1>Where in the world?</h1>
            <button type="button">Dark Mode</button>
        </div>
        <div>
            <input type="text" placeholder="Search for a country...">
            <select name="region" id="region">
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>      
        `            
        for (let i = 0; i < countries.length; i++){
            card.innerHTML+= `
            <div>
                <div>
                    <img src="`+countries[i].flags.png+`">
                </div>
                <div>
                    <h3>Country name</h3>
                    <p>Population: `+countries[i].name.common+`</p> 
                    <p>Region: `+countries[i].region+`</p>
                    <p>Capital: `+countries[i].capital+`</p>
                </div>
            </div>
        `
        }
        
        return `
            <div id="container">
                ${div.innerHTML}
                ${card.innerHTML}
            </div>
            `;

    }
}