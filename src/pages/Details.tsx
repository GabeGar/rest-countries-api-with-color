import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import { useCountry } from '../hooks/useCountry';
import { getMultiLangNativeNames } from '../utils/getMultiLangNativeNames';
import { formatNumberWithCommas } from '../utils/formatNumberWithCommas';
import { formatCurrencyNames } from '../utils/formatCurrencyNames';
import { formatLanguages } from '../utils/formatLanguages';

const paraBaseStyles = 'flex gap-1';
const titleSpanBaseStyles = 'font-semibold';

const Details = () => {
    const { countryName } = useParams();

    const {
        data: countryData,
        error: countryError,
        isPending: isLoadingCountry,
    } = useCountry(countryName ? countryName : '');

    if (isLoadingCountry) return <p>Country Details loading...</p>;
    if (countryError) return <p>{countryError.message}</p>;

    return (
        <div className="text-base">
            <Link
                to="/"
                className="mb-16 mt-6 flex max-w-min items-center gap-3 self-start rounded-sm bg-colorElement px-7 py-2 text-colorText shadow-lg"
            >
                <span className="">
                    <HiOutlineArrowLeft />
                </span>
                <span>Back</span>
            </Link>

            <section className="text-colorText">
                {countryData?.map((countryInfo) => {
                    console.log(countryInfo);

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
                                        {getMultiLangNativeNames(countryInfo)}
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
                            <div className="flex flex-wrap gap-3 pb-12">
                                {countryInfo.borders.map((border) => {
                                    return (
                                        <Link
                                            key={border}
                                            to={`/${border}`}
                                            className="flex-1 bg-colorElement px-8 py-1 shadow-2xl"
                                        >
                                            {border}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Details;
