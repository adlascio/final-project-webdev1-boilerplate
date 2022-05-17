import AbstractView from "./AbstractView.js";
import { getCountries } from "../countries.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        let countries = getCountries();

        return `
        <h1>Countries</h1>
        <div>
        ${countries.map(country=>{
        return (
            `<a href="/countries/${country.cca3}">
                <img src="${country.coatOfArms.png}", alt="no image", width="100", height="100"/>
            </a>`
            )
        })}
        </div>`;
    }
}



