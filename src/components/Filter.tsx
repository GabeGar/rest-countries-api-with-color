import { IoIosArrowDown } from 'react-icons/io';
import { useFilter } from '../context/FilterContext';
import { Region } from '../types/RESTCountryTypes';

const Filter = () => {
    const {
        selectedRegion,
        showFilterOptions,
        onSelectRegion,
        onOpenFilter,
        onCloseFilter,
    } = useFilter();

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleShowFilterOptions = () => {
        if (showFilterOptions) onCloseFilter();
        else onOpenFilter();
    };

    const handleFilterRegion = (e: React.MouseEvent) => {
        const region = (e.target as HTMLButtonElement).value as Region;
        console.log(region);

        // TODO: Use value to filter by region

        // Finally, close the filter options listbox
        onSelectRegion(region);
        onCloseFilter();
    };

    return (
        <section className="relative z-50 max-w-[60%]">
            <button
                className="flex min-w-full items-center justify-between space-x-8 rounded-md bg-colorElement px-7 py-4 text-colorText drop-shadow-lg"
                onClick={handleShowFilterOptions}
            >
                <span>
                    {selectedRegion ? selectedRegion : 'Filter by Region'}
                </span>
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
                                onClick={handleFilterRegion}
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
