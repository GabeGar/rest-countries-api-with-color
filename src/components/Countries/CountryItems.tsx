import { Link } from 'react-router-dom';
import { RESTCountryBasic } from '../../types/RESTCountryTypes';
import { formatNumberWithCommas } from '../../utils/utils';

interface Props {
    countryItems: RESTCountryBasic[];
}

const CountryItems = ({ countryItems }: Props) => {
    return (
        <ul className="mx-6 mt-10 grid grid-cols-appGrid gap-10 font-semibold xsm:place-items-center sm:place-items-stretch md:mx-16 md:place-items-stretch md:gap-24">
            {countryItems.map((country) => {
                return (
                    <li
                        key={country.name.common}
                        className="only:mx-auto xsm:max-w-[15rem] sm:max-w-none md:max-w-[25rem]"
                    >
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

export default CountryItems;
