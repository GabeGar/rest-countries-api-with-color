import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useCountries } from '../../hooks/useCountries';
import { useFilter } from '../../context/FilterContext';
import { useSearchQuery } from '../../context/SearchQueryContext';
import CountryItems from './CountryItems';

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

    if (isLoadingCountries) return <p>Loading countries...</p>;
    if (countriesError) return <p>{countriesError.message}</p>;
    if (!countries) return <p>Service is down. Try again later.</p>;

    // Search + Filter
    const searchAndFilterCountries = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        const query = searchQuery.toLowerCase();
        const countryRegion = country.region;

        // Search
        if (query.length >= 1) {
            return countryName.startsWith(query);
        }

        // Filter
        if (selectedRegion && countryRegion !== selectedRegion) {
            return false;
        }

        // Return all if conditions above fail
        return country;
    });

    // When no countries match query
    if (searchAndFilterCountries.length === 0)
        return (
            <p className="mt-20 text-center text-2xl font-semibold text-colorText">
                No countries found...
            </p>
        );

    // Paginate
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = searchAndFilterCountries.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(searchAndFilterCountries.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (e: { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % countries.length;
        console.log(
            `User requested page number ${e.selected}, which is offset ${newOffset}`,
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <CountryItems countryItems={currentItems} />
            {!searchQuery && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    className="mt-5 flex justify-center gap-3 bg-colorElement py-5 text-colorText"
                    pageClassName=""
                />
            )}
        </>
    );
};

export default Countries;
