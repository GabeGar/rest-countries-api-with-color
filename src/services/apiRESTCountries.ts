import { RESTCountryBasic, RESTCountryFull } from '../types/RESTCountryTypes';

const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS =
    'fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags';
const EXACT_MATCH = 'fullText=true';

export const getCountries = async () => {
    const res = await fetch(`${BASE_URL}/all?${FIELDS}`);

    if (!res.ok) throw new Error('Something went wrong getting countries');

    const data = (await res.json()) as RESTCountryBasic[];
    return data;
};

export const getCountry = async (countryQuery: string) => {
    let query = '';

    if (countryQuery.length === 3) {
        query = 'alpha';
    } else {
        query = 'name';
    }

    const res = await fetch(
        `${BASE_URL}/${query}/${countryQuery}?${EXACT_MATCH}&${FIELDS}`,
    );

    if (!res.ok) throw new Error('Something went wrong getting country');

    const data = (await res.json()) as RESTCountryFull[];
    console.log(data);
    return data;
};
