import { ChangeEvent, FormEvent } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { useSearchQuery } from '../context/SearchQueryContext';
import { useFilter } from '../context/FilterContext';
import { IoMdCloseCircle } from 'react-icons/io';
import SearchIcon from './ui/SearchIcon';

const inputClasses = `flex-1 rounded-lg bg-colorElement py-4 text-center placeholder:pl-20 placeholder:text-left focus:outline-none focus:placeholder:opacity-0 drop-shadow-lg`;

const SearchCountryField = () => {
    const { onCloseFilter, onSelectRegion } = useFilter();
    const { searchQuery, onChangeSearchQuery } = useSearchQuery();
    const { isDarkMode } = useDarkMode();

    const textColor = isDarkMode
        ? 'text-colorText placeholder:text-colorText'
        : 'text-colorInput placeholder:text-colorInput';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeSearchQuery(e.target.value);
    };

    const handleClearField = () => {
        onChangeSearchQuery('');
    };

    // Automatically close out of filter and reset default states.
    const handleFocus = () => {
        onCloseFilter();
        onSelectRegion(null);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex items-center py-6 font-semibold"
        >
            <SearchIcon />
            <input
                type="search"
                id="search"
                name="country-search"
                placeholder="Search for a country..."
                className={`${inputClasses} ${textColor}`}
                value={searchQuery}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            {searchQuery.length > 0 && (
                <button
                    className={`absolute right-6 text-2xl ${textColor}`}
                    onClick={handleClearField}
                >
                    <IoMdCloseCircle />
                </button>
            )}
        </form>
    );
};

export default SearchCountryField;
