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


