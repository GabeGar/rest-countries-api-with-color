import { RESTCountryFull } from '../types/RESTCountryTypes';

export const formatLanguages = (country: RESTCountryFull): string => {
    return Object.values(country.languages).join(', ');
};
