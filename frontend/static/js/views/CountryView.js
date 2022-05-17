import AbstractView from "./AbstractView.js";
import { getCountries } from "../countries.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        let countries = getCountries()
        // let country = countries.reduce((prev, curr)=> {
        //     if(curr.cca3 == this.params.id){
        //         return prev.concat(curr);
        //     } else {
        //         return prev;
        //     }
        // },[])[0];

        let country;
        for(let i=0; i<countries.length; i++) {
            if(countries[i].cca3==this.params.id){
                country = countries[i];
            }
        }
        return ` <h1>${country.cca3}'s flag is ${country.flag}</h1>`;
    }
}