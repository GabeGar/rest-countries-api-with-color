import { Link } from 'react-router-dom';
import { useCountries } from '../hooks/useCountries';
import { useSearchQuery } from '../context/SearchQueryContext';
import { formatNumberWithCommas } from '../utils/utils';

const Countries = () => {
    const { searchQuery } = useSearchQuery();
    const {
        data: countries,
        error: countriesError,
        isPending: isLoadingCountries,
    } = useCountries();

    if (isLoadingCountries) return <p>Loading countries...</p>;
    if (countriesError) return <p>{countriesError.message}</p>;

    // Search
    const searchCountries = countries?.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        const query = searchQuery.toLowerCase();

        if (query.length >= 1) {
            return countryName.startsWith(query);
        }

        return country;
    });

    return (
        <ul className="mx-4 mt-6 grid grid-cols-appGridMobile gap-10 font-semibold">
            {searchCountries?.map((country) => {
                return (
                    <li key={country.name.common}>
                        <Link
                            to={`/${country.name.common}`}
                            className="rounded-md bg-colorElement text-colorText shadow-lg drop-shadow-xl"
                        >
                            <img
                                src={country.flags.png}
                                alt={country.flags.alt}
                                className="h-[10.9rem] w-full rounded-t-md object-center"
                            />
                            <div className="rounded-b-md bg-colorElement p-8">
                                <h2 className="mb-2 text-base font-extrabold">
                                    {country.name.common}
                                </h2>

                                <p className="flex gap-1">
                                    <span className="font-semibold">
                                        Population:
                                    </span>
                                    <span className="font-light">
                                        {formatNumberWithCommas(
                                            country.population,
                                        )}
                                    </span>
                                </p>
                                <p className="flex gap-1">
                                    <span className="font-semibold">
                                        Region:
                                    </span>
                                    <span className="font-light">
                                        {country.region}
                                    </span>
                                </p>
                                <p className="flex gap-1">
                                    <span className="font-semibold">
                                        Capital:
                                    </span>
                                    <span className="font-light">
                                        {country.capital}
                                    </span>
                                </p>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Countries;
