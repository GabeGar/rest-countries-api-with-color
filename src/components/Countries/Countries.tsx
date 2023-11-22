import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useCountries } from '../../hooks/useCountries';
import { useFilter } from '../../context/FilterContext';
import { useSearchQuery } from '../../context/SearchQueryContext';
import CountryItems from './CountryItems';

const itemsPerPage = 16;

const Countries = () => {
    const { searchQuery } = useSearchQuery();
    const { selectedRegion } = useFilter();
    const {
        data: countries,
        error: countriesError,
        isPending: isLoadingCountries,
    } = useCountries();
    const [itemOffset, setItemOffset] = useState(0);

    // Ensure resetting of itemOffset whenever search query changes.
    useEffect(() => {
        setItemOffset(0);
    }, [searchQuery]);

    // Check for loading and error states
    if (isLoadingCountries) return <p>Loading countries...</p>;
    if (countriesError) return <p>{countriesError.message}</p>;
    if (!countries) return <p>Service is down. Try again later.</p>;

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

    // When no countries match query
    if (filteredResults.length === 0)
        return (
            <p className="mt-20 text-center text-2xl font-semibold text-colorText">
                No countries found...
            </p>
        );

    // Paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredResults.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredResults.length / itemsPerPage);
    console.log('currentItems:', currentItems);

    const isFirstPage = itemOffset === 0;
    const isFinalPage = endOffset >= filteredResults.length;

    // Invoke when the user clicks to request another page.
    const handlePageClick = (e: { selected: number }) => {
        const newOffset = e.selected * itemsPerPage;

        // Reset item offset to 0, if there is an active search query.
        if (searchQuery) {
            setItemOffset(0);
        } else {
            setItemOffset(newOffset);
        }
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
                    previousLabel="Prev"
                    renderOnZeroPageCount={null}
                    className="mt-5 flex items-center justify-center gap-1 py-5 text-colorText"
                    pageClassName="bg-colorBg p-1 rounded-md hover:bg-colorElement transition-all"
                    activeClassName="font-semibold bg-colorElement"
                    previousClassName={`${
                        isFirstPage ? 'hidden' : ''
                    } font-semibold p-1`}
                    nextClassName={`${
                        isFinalPage ? 'hidden' : ''
                    } font-semibold p-1`}
                />
            )}
        </>
    );
};

export default Countries;
