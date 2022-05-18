import AbstractView from "./AbstractView.js";
import { getCountries } from '../countries.js';
import { getCountriesResume } from '../countries.js';

const countries = getCountries();
const testArray = getCountriesResume();
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        // console.log("FILTER TEST BELOW");
        // console.log(filterFunction("region", "Americas"))
        return "<h1>Countries Victor</h1>";

    }


}


const filterFunction = function (filterBy, input) {
    let filteredCountries = [];

    if (filterBy === "name") {
        filteredCountries = testArray.filter(f => f.countryName === input);

    } else if (filterBy === "region") {
        filteredCountries = testArray.filter(f => f.region === input);
    }

return filteredCountries;
}






