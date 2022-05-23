import AbstractView from "./AbstractView.js";
import { countries, showCountries } from "../index.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        const grid  = document.createElement("div");
        grid.classList.add("countries__grid");
        grid.innerHTML = showCountries(countries, grid);

        return `
        <h1>Countries</h1>
        <div class="countries__filterSection">

        <input id="searchInput" type="text" placeholder="Search by name...">
        <select id="selectRegion">
            <option>Select a region</option>
        </select>
        </div>
        <div class="countries__grid">
        ${grid.innerHTML}
        </div>
        `;
    }
}