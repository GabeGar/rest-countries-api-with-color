import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useDarkMode } from '../../context/DarkModeContext';

const DarkModeToggle = () => {
    const { isDarkMode, onToggleDarkMode } = useDarkMode();

    const currentThemeIcon = isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />;
    const currentThemeText = isDarkMode ? 'Light' : 'Dark';

    return (
        <button
            className="flex items-center gap-2 font-semibold text-colorText"
            onClick={onToggleDarkMode}
        >
            <span className="text-xl">{currentThemeIcon}</span>
            <span>{currentThemeText} Mode</span>
        </button>
    );
};

export default DarkModeToggle;
