const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all').then(res=> res.json())
    .then(data => {localStorage.setItem('countries', JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

loadCountries();

export function getCountries() {
    const countries = localStorage.getItem('countries');
    return JSON.parse(countries);
};
//function which return a list of country with the follow information : name,flag,population,region
export function getCountriesResume () {

    const arrayCountries=getCountries();
    const newArray = arrayCountries.map(j => ({ countryName: j.name.common, flag: j.flags.svg, population: j.population, region: j.region }));
    return newArray;
};




