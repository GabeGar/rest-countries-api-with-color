import { RESTCountry } from '../types/RESTCountryTypes';

const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS =
    'fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags';

export const getCountries = async () => {
    const res = await fetch(`${BASE_URL}/all?${FIELDS}`);

    if (!res.ok) throw new Error('Something went wrong getting countries');

    const data = (await res.json()) as RESTCountry[];
    return data;
};
