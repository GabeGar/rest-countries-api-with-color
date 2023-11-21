import { FormEvent } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import SearchIcon from './ui/SearchIcon';

const inputClasses = `flex-1 rounded-lg bg-colorElement py-4 text-center placeholder:pl-20 placeholder:text-left focus:outline-none focus:placeholder:opacity-0 shadow-md`;

const SearchCountryField = () => {
    const { isDarkMode } = useDarkMode();

    const textColor = isDarkMode
        ? 'text-colorText placeholder:text-colorText'
        : 'text-colorInput placeholder:text-colorInput';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
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
            />
        </form>
    );
};

export default SearchCountryField;
