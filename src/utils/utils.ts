import { RESTCountryFull } from '../types/RESTCountryTypes';

export const formatCurrencyNames = (country: RESTCountryFull) => {
    return Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ');
};

export const formatLanguages = (country: RESTCountryFull): string => {
    return Object.values(country.languages).join(', ');
};

export const formatMultiLangNativeNames = (
    country: RESTCountryFull,
): string => {
    const nativeNames = Object.values(country.name.nativeName)
        .map((val) => val.official)
        .join(', ');

    return nativeNames;
};

export const formatNumberWithCommas = (number: number): string => {
    return new Intl.NumberFormat('en-US').format(number);
};
