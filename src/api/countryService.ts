export const getCountryList = () => {
    const result = fetch('https://restcountries.com/v3.1/all').
                   then((response) => response.json());

    return result;
}