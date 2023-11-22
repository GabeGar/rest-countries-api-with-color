import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';
import { useDarkMode } from '../../context/DarkModeContext';

const SearchIcon = () => {
    const { isDarkMode } = useDarkMode();

    const currentClasses = isDarkMode ? 'text-colorText' : 'text-colorInput';

    return (
        <IconContext.Provider value={{ className: currentClasses }}>
            <span className="absolute left-6 z-10 text-3xl">
                <MdSearch />
            </span>
        </IconContext.Provider>
    );
};

export default SearchIcon;
