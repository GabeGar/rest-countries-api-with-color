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
import Loader from '../components/ui/Loader';
import Error from '../components/ui/Error';

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

    if (isLoadingCountry) return <Loader />;
    if (countryError) return <Error message={countryError.message} />;
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
                            <div className="md:mx-16 md:grid md:grid-cols-2 md:gap-24">
                                <div className="pb-12 md:pb-0">
                                    <img
                                        src={countryInfo.flags.png}
                                        alt={countryInfo.flags.alt}
                                        className="w-full object-center md:max-h-[35rem]"
                                    />
                                </div>
                                <div className="space-y-3 md:my-auto">
                                    <h2 className="pb-4 text-2xl font-extrabold md:text-3xl">
                                        {countryInfo.name.common}
                                    </h2>
                                    <div className="md:grid md:grid-cols-2 md:gap-12">
                                        <div className="space-y-3">
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Native Name:
                                                </span>
                                                <span>
                                                    {formatMultiLangNativeNames(
                                                        countryInfo,
                                                    )}
                                                </span>
                                            </p>
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Population:
                                                </span>
                                                <span>
                                                    {formatNumberWithCommas(
                                                        countryInfo.population,
                                                    )}
                                                </span>
                                            </p>
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Region:
                                                </span>
                                                <span>
                                                    {countryInfo.region}
                                                </span>
                                            </p>
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Sub Region:
                                                </span>
                                                <span>
                                                    {countryInfo.subregion}
                                                </span>
                                            </p>
                                            <p
                                                className={`${paraBaseStyles} pb-8`}
                                            >
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Capital:
                                                </span>
                                                <span>
                                                    {countryInfo.capital}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Top Level Domain:
                                                </span>
                                                <span>{countryInfo.tld}</span>
                                            </p>
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Currencies:
                                                </span>
                                                <span>
                                                    {formatCurrencyNames(
                                                        countryInfo,
                                                    )}
                                                </span>
                                            </p>
                                            <p className={paraBaseStyles}>
                                                <span
                                                    className={
                                                        titleSpanBaseStyles
                                                    }
                                                >
                                                    Languages:
                                                </span>
                                                <span>
                                                    {formatLanguages(
                                                        countryInfo,
                                                    )}
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:flex md:gap-3 md:pt-12">
                                        <h3 className="pb-4 pt-8 text-xl font-semibold md:pb-0 md:pt-0">
                                            Border Countries:
                                        </h3>
                                        {countryInfo.borders.length > 0 ? (
                                            <div className="flex flex-wrap gap-3 pb-12 md:items-center md:justify-center md:pb-0">
                                                {countryInfo.borders.map(
                                                    (border) => {
                                                        return (
                                                            <Link
                                                                key={border}
                                                                to={`/${border}`}
                                                                className="flex-1 rounded-md bg-colorElement px-8 py-1 text-center drop-shadow-lg transition-all hover:bg-colorInput hover:text-colorElement"
                                                            >
                                                                {border}
                                                            </Link>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        ) : (
                                            <p className="pb-12">None</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Details;
