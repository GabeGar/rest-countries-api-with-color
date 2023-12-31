import { createContext, useContext, useEffect, useState } from 'react';

interface DarkModeContextProps {
    isDarkMode: boolean;
    onToggleDarkMode: () => void;
}

interface Props {
    children: React.ReactNode;
}

const DarkModeContext = createContext<DarkModeContextProps | null>(null);

const DarkModeContextProvider = ({ children }: Props) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const theme = localStorage.getItem('isDarkMode');
        return theme ? (JSON.parse(theme) as boolean) : false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const onToggleDarkMode = () => {
        setIsDarkMode((isDark) => !isDark);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, onToggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

const useDarkMode = (): DarkModeContextProps => {
    const context = useContext(DarkModeContext);
    if (context === null) {
        throw new Error(
            'DarkModeContext was used outside the DarkModeContextProvider',
        );
    }
    return context;
};

export default DarkModeContextProvider;
export { useDarkMode };
