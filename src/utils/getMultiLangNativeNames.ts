import { RESTCountry } from '../types/RESTCountryTypes';

export const getMultiLangNativeNames = (country: RESTCountry): string => {
    const nativeNames = Object.values(country.name.nativeName)
        .map((val) => val.official)
        .join(', ');

    return nativeNames;
};
