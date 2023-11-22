import { createContext, useContext, useState } from 'react';
import { Region } from '../types/RESTCountryTypes';

interface FilterContextProps {
    selectedRegion: Region;
    showFilterOptions: boolean;
    onSelectRegion: (region: Region) => void;
    onCloseFilter: () => void;
    onOpenFilter: () => void;
}

interface Props {
    children: React.ReactNode;
}

const FilterContext = createContext<FilterContextProps | null>(null);

const FilterContextProvider = ({ children }: Props) => {
    const [selectedRegion, setSelectedRegion] = useState<Region>(null);
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    const onSelectRegion = (region: Region) => {
        setSelectedRegion(region);
    };

    const onCloseFilter = () => {
        setShowFilterOptions(false);
    };

    const onOpenFilter = () => {
        setShowFilterOptions(true);
    };

    return (
        <FilterContext.Provider
            value={{
                selectedRegion,
                showFilterOptions,
                onSelectRegion,
                onCloseFilter,
                onOpenFilter,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === null) {
        throw new Error(
            'SearchQueryContext was used outside the SearchQueryContextProvider',
        );
    }
    return context;
};

export default FilterContextProvider;
export { useFilter };
