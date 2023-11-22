interface Name {
    common: string;
    nativeName: {
        names: {
            official: string;
        };
    };
}

interface Flags {
    alt: string;
    png: string;
}

interface Currency {
    name: string;
}

export interface RESTCountryBasic {
    name: Name;
    population: number;
    region: string;
    capital: string;
    flags: Flags;
}

export interface RESTCountryFull {
    name: Name;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: Currency[];
    languages: string;
    borders: string[];
    flags: Flags;
    tld: string[];
}

export type Region =
    | 'Africa'
    | 'Americas'
    | 'Asia'
    | 'Europe'
    | 'Oceania'
    | null;
