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

export interface RESTCountry {
    name: Name;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string;
    languages: string;
    border: string;
    flags: Flags;
    tld: string[];
}
