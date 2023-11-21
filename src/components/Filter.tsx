import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Filter = () => {
    const [selectedRegion, setSelectedRegion] = useState('Filter by Region');
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleShowFilterClick = () => {
        setShowFilterOptions((isShown) => !isShown);
    };

    const handleFilterButtonClick = (e: React.MouseEvent) => {
        const value = (e.target as HTMLButtonElement).value;
        console.log(value);

        // TODO: Use value to filter by region

        // Finally, close the filter options listbox
        setSelectedRegion(value);
        setShowFilterOptions(false);
    };

    return (
        <section className="relative max-w-[60%] shadow-md">
            <button
                className="flex min-w-full items-center justify-between space-x-8 rounded-md bg-colorElement px-7 py-4 text-colorText"
                onClick={handleShowFilterClick}
            >
                <span>{selectedRegion}</span>
                <span
                    className={`transition-all ${
                        showFilterOptions ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <IoIosArrowDown />
                </span>
            </button>

            {showFilterOptions && (
                <div className="absolute mt-1 flex w-full flex-col space-y-4 rounded-md bg-colorElement py-4 text-colorText shadow-md">
                    {regions.map((region) => {
                        return (
                            <button
                                key={region}
                                value={region}
                                className="flex pl-7"
                                onClick={handleFilterButtonClick}
                            >
                                {region}
                            </button>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Filter;
