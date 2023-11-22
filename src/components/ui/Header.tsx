import DarkModeToggle from '../DarkMode/DarkModeToggle';

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-colorElement px-5 py-6 shadow-md">
            <h1 className="font-extrabold text-colorText">
                Where in the world?
            </h1>

            <DarkModeToggle />
        </header>
    );
};

export default Header;
