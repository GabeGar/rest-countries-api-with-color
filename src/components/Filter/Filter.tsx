import { IoIosArrowDown } from 'react-icons/io';
import { useFilter } from '../../context/FilterContext';
import { Region } from '../../types/RESTCountryTypes';
import { useSearchQuery } from '../../context/SearchQueryContext';
import { useEffect, useRef } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';

const Filter = () => {
    const filterRef = useRef<HTMLElement | null>(null);
    const { isDarkMode } = useDarkMode();
    const { onChangeSearchQuery } = useSearchQuery();
    const {
        selectedRegion,
        showFilterOptions,
        onSelectRegion,
        onOpenFilter,
        onCloseFilter,
    } = useFilter();

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    useEffect(() => {
        const handleClickOutside: EventListener = (e) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(e.target as Node)
            ) {
                onCloseFilter();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onCloseFilter]);

    const handleShowFilterOptions = () => {
        if (showFilterOptions) onCloseFilter();
        else onOpenFilter();
    };

    const handleFilterRegion = (e: React.MouseEvent) => {
        const region = (e.target as HTMLButtonElement).value as Region;
        onChangeSearchQuery('');
        onSelectRegion(region);
        onCloseFilter();
    };

    return (
        <section className="relative z-50 max-w-[60%]" ref={filterRef}>
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
                <div className="absolute mt-1 flex w-full flex-col rounded-md bg-colorElement py-4 text-colorText shadow-md">
                    {regions.map((region) => {
                        const isSelected = selectedRegion === region;

                        return (
                            <button
                                key={region}
                                value={region}
                                className={`flex py-3 pl-7 ${
                                    !isSelected && 'hover:bg-colorBg '
                                } ${
                                    isSelected && !isDarkMode
                                        ? 'bg-colorInput text-colorElement'
                                        : ''
                                } ${
                                    isSelected && isDarkMode
                                        ? 'bg-colorInput text-colorText'
                                        : ''
                                }`}
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
