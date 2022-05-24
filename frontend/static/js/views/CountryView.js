import AbstractView from "./AbstractView.js";
import { getCountriesResume } from '../countries.js';


const countriesResumeArray = getCountriesResume();
let idCountry='';
export default class extends AbstractView {
    constructor(params) {
        super(params);
      //  alert(params.id);
      idCountry=params.id
        this.setTitle("Country");
    }

    async getHTML() {

         let divToBody = document.createElement('div');
         divToBody.id = 'div-country-to-body';

        let divBlanc2 = deployCountryInfo();
        divToBody.appendChild(divBlanc2);
        document.body.appendChild(divToBody);
        return "";

    }


}




const deployCountryInfo = function () {


    let countrySelected= countriesResumeArray.find(f => f.idCountry === idCountry);

    console.log(countrySelected.languages);
    let divBlanc1 = document.createElement('div');

  


    let flagDiv = document.createElement('div');

    flagDiv.className = 'flagView';

    let img = document.createElement('img');
    img.src = countrySelected.flag;

    flagDiv.appendChild(img);


    let divCountriesInfo = document.createElement('div');

    divCountriesInfo.className = 'countries-info';

    let divDetail = document.createElement('div');
    divDetail.className = 'details';

    let h3CountryName = document.createElement('h3');

    h3CountryName.textContent = 'Country Name: '+countrySelected.countryName;

    let ulList = document.createElement('ul');

    ulList.className = 'details-list';
    ulList.id = 'dtl-list';

    let ilListLanguage = document.createElement('il');
    ilListLanguage.className = 'details-item';
    
    ilListLanguage.textContent = 'Languages : '+  JSON.stringify(countrySelected.languages);
   
    let ilListCapital = document.createElement('il');
    ilListCapital.className = 'details-item';
    ilListCapital.textContent ='Capital City : '+ countrySelected.capital;

    let ilListRegion = document.createElement('il');
    ilListRegion.className = 'details-item';
    ilListRegion.textContent = 'Region : '+ countrySelected.region;

    let ilListPopulation = document.createElement('il');
    ilListPopulation.className = 'details-item';
    ilListPopulation.textContent ='Population : '+ countrySelected.population;




    ulList.appendChild(ilListLanguage);
    ulList.appendChild(ilListCapital);
    ulList.appendChild(ilListRegion);
    ulList.appendChild(ilListPopulation);

    divDetail.appendChild(h3CountryName);
    divDetail.appendChild(ulList);

    let divBorders = document.createElement('div');
    divBorders.className = 'borders';

    let h3Borders = document.createElement('h3');
    h3Borders.textContent = 'Border Countries';


    let ulBorderCountry = document.createElement('ul');
    ulBorderCountry.className = 'borders-list';

    //for each to iterate border countries.


    countrySelected.borders.forEach(function (border) {

        let iLBorderCountry = document.createElement('il');
        iLBorderCountry.className = 'borders-item';
        let aCountryBorder= document.createElement('a');

        aCountryBorder.textContent=border;
        aCountryBorder.href=border;


        iLBorderCountry.appendChild(aCountryBorder);


        ulBorderCountry.appendChild(iLBorderCountry);
    });



    divBorders.appendChild(h3Borders);
    divBorders.appendChild(ulBorderCountry);



    divCountriesInfo.appendChild(divDetail);
    divCountriesInfo.appendChild(divBorders);


    let buttonBack = document.createElement('button');
    buttonBack.className = 'countries-btn';
    buttonBack.id = "c-btn";


    let aButton = document.createElement('a');
    aButton.id = 'btn-back-countries';
    aButton.href = '../countries';
    aButton.textContent = 'Back To Countries';

    buttonBack.appendChild(aButton);

    divBlanc1.appendChild(flagDiv);
    divBlanc1.appendChild(divCountriesInfo);
    divBlanc1.appendChild(buttonBack);

    return divBlanc1;
}