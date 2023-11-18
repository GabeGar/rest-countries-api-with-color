import DarkModeToggle from '../DarkModeToggle';

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-colorElement px-5 py-6">
            <h2 className="font-extrabold text-colorText">
                Where in the world?
            </h2>

            <DarkModeToggle />
        </header>
    );
};

export default Header;
