import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Filter = () => {
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    const handleButtonClick = (e: React.MouseEvent) => {
        const value = (e.target as HTMLButtonElement).value;
        console.log(value);

        // TODO: Use value to filter by region
    };

    return (
        <section className="relative max-w-[60%]">
            <button
                className="flex min-w-full items-center space-x-8 rounded-md bg-colorElement px-7 py-4 text-colorText"
                onClick={() => {
                    setShowFilterOptions((isShown) => !isShown);
                }}
            >
                <span>Filter by Region</span>
                <span>
                    <IoIosArrowDown />
                </span>
            </button>

            {showFilterOptions && (
                <div className="absolute mt-1 flex w-full flex-col space-y-4 rounded-md bg-colorElement py-4 text-colorText">
                    <button
                        className="flex pl-7"
                        value="Africa"
                        onClick={handleButtonClick}
                    >
                        Africa
                    </button>
                    <button
                        className="flex pl-7"
                        value="America"
                        onClick={handleButtonClick}
                    >
                        America
                    </button>
                    <button
                        className="flex pl-7"
                        value="Asia"
                        onClick={handleButtonClick}
                    >
                        Asia
                    </button>
                    <button
                        className="flex pl-7"
                        value="Europe"
                        onClick={handleButtonClick}
                    >
                        Europe
                    </button>
                    <button
                        className="flex pl-7"
                        value="Oceania"
                        onClick={handleButtonClick}
                    >
                        Oceania
                    </button>
                </div>
            )}
        </section>
    );
};

export default Filter;
