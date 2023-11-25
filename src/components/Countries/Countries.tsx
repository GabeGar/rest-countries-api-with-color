import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useCountries } from '../../hooks/useCountries';
import { useFilter } from '../../context/FilterContext';
import { useSearchQuery } from '../../context/SearchQueryContext';
import CountryItems from './CountryItems';
import Loader from '../ui/Loader';

const itemsPerPage = 20;

const Countries = () => {
    const { searchQuery } = useSearchQuery();
    const { selectedRegion } = useFilter();
    const {
        data: countries,
        error: countriesError,
        isPending: isLoadingCountries,
    } = useCountries();
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        if (searchQuery || selectedRegion) setItemOffset(0);
    }, [searchQuery, selectedRegion]);

    if (isLoadingCountries) return <Loader />;
    if (countriesError)
        return (
            <p className="mt-4 text-xl font-semibold text-colorText">
                {countriesError.message}
            </p>
        );
    if (!countries)
        return (
            <p className="mt-4 text-xl font-semibold text-colorText">
                Service is down. Try again later.
            </p>
        );

    // Apply Search Query
    const searchResults = searchQuery
        ? countries.filter((country) =>
              country.name.common
                  .toLowerCase()
                  .startsWith(searchQuery.toLowerCase()),
          )
        : countries;

    // Apply Filter
    const filteredResults = selectedRegion
        ? searchResults.filter((country) => country.region === selectedRegion)
        : searchResults;

    // Paginate
    const pageCount = Math.ceil(filteredResults.length / itemsPerPage);
    const currentItems = filteredResults.slice(
        itemOffset,
        itemOffset + itemsPerPage,
    );
    const isFirstPage = itemOffset === 0;
    const isFinalPage = itemOffset + itemsPerPage >= filteredResults.length;

    const handlePageClick = (e: { selected: number }) => {
        const newOffset = e.selected * itemsPerPage;
        setItemOffset(newOffset);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <CountryItems countryItems={currentItems} />
            {!searchQuery && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    forcePage={itemOffset / itemsPerPage}
                    previousLabel="Prev"
                    renderOnZeroPageCount={null}
                    className="mt-5 flex items-center justify-center gap-1 py-5 sm:gap-[.35rem] md:gap-2"
                    pageClassName="bg-colorBg p-1 rounded-md hover:bg-colorElement transition-all md:px-3 md:py-2 text-colorElement bg-colorText hover:text-colorText hover:scale-[1.2] sm:p-2"
                    activeClassName="font-semibold bg-colorElement text-lg"
                    previousClassName={`${
                        isFirstPage ? 'hidden' : ''
                    } font-semibold p-1 md:px-3 text-colorBg bg-colorText rounded-md hover:text-colorText hover:scale-[1.2] transition-all hover:bg-colorElement`}
                    nextClassName={`${
                        isFinalPage ? 'hidden' : ''
                    } font-semibold p-1 md:px-3 text-colorBg bg-colorText rounded-md hover:text-colorText hover:scale-[1.2] transition-all hover:bg-colorElement`}
                />
            )}
        </>
    );
};

export default Countries;
