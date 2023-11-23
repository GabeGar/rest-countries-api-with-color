import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useCountry } from '../hooks/useCountry';
import {
    formatLanguages,
    formatCurrencyNames,
    formatNumberWithCommas,
    formatMultiLangNativeNames,
} from '../utils/utils';
import BackButton from '../components/ui/BackButton';

const paraBaseStyles = 'flex gap-1';
const titleSpanBaseStyles = 'font-semibold';

const Details = () => {
    const { countryName: country } = useParams();
    const {
        data: countryData,
        error: countryError,
        isPending: isLoadingCountry,
    } = useCountry(country ? country : '');

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [country]);

    if (isLoadingCountry) return <p>Country Details loading...</p>;
    if (countryError) return <p>{countryError.message}</p>;
    if (!countryData) return null;

    const countryDataArr = Array.isArray(countryData)
        ? countryData
        : [countryData];

    return (
        <div className="text-base">
            <BackButton />

            <section className="text-colorText">
                {countryDataArr.map((countryInfo) => {
                    return (
                        <div key={countryInfo.name.common}>
                            <div className="space-y-3">
                                <img
                                    src={countryInfo.flags.png}
                                    alt={countryInfo.flags.alt}
                                    className="w-full object-center pb-8"
                                />
                                <h2 className="pb-4 text-2xl font-extrabold">
                                    {countryInfo.name.common}
                                </h2>

                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Native Name:
                                    </span>
                                    <span>
                                        {formatMultiLangNativeNames(
                                            countryInfo,
                                        )}
                                    </span>
                                </p>
                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Population:
                                    </span>
                                    <span>
                                        {formatNumberWithCommas(
                                            countryInfo.population,
                                        )}
                                    </span>
                                </p>
                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Region:
                                    </span>
                                    <span>{countryInfo.region}</span>
                                </p>
                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Sub Region:
                                    </span>
                                    <span>{countryInfo.subregion}</span>
                                </p>
                                <p className={`${paraBaseStyles} pb-8`}>
                                    <span className={titleSpanBaseStyles}>
                                        Capital:
                                    </span>
                                    <span>{countryInfo.capital}</span>
                                </p>

                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Top Level Domain:
                                    </span>
                                    <span>{countryInfo.tld}</span>
                                </p>
                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Currencies:
                                    </span>
                                    <span>
                                        {formatCurrencyNames(countryInfo)}
                                    </span>
                                </p>
                                <p className={paraBaseStyles}>
                                    <span className={titleSpanBaseStyles}>
                                        Languages:
                                    </span>
                                    <span>{formatLanguages(countryInfo)}</span>
                                </p>
                            </div>

                            <h3 className="pb-4 pt-8 text-xl font-semibold">
                                Border Countries:
                            </h3>
                            {countryInfo.borders.length === 0 && <p>None</p>}
                            {countryInfo.borders.length > 0 && (
                                <div className="flex flex-wrap gap-3 pb-12">
                                    {countryInfo.borders.map((border) => {
                                        return (
                                            <Link
                                                key={border}
                                                to={`/${border}`}
                                                className="flex-1 bg-colorElement px-8 py-1 text-center drop-shadow-lg"
                                            >
                                                {border}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Details;
