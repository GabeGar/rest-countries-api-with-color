import { RESTCountryFull } from '../types/RESTCountryTypes';

export const formatCurrencyNames = (country: RESTCountryFull) => {
    return Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ');
};
