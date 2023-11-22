import { createContext, useContext, useState } from 'react';

interface SearchQueryContextProps {
    searchQuery: string;
    onChangeSearchQuery: (newQuery: string) => void;
}

interface Props {
    children: React.ReactNode;
}

const SearchQueryContext = createContext<SearchQueryContextProps | null>(null);

const SearchQueryContextProvider = ({ children }: Props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeSearchQuery = (newQuery: string) => {
        setSearchQuery(newQuery);
    };

    return (
        <SearchQueryContext.Provider
            value={{
                searchQuery,
                onChangeSearchQuery,
            }}
        >
            {children}
        </SearchQueryContext.Provider>
    );
};

const useSearchQuery = () => {
    const context = useContext(SearchQueryContext);
    if (context === null) {
        throw new Error(
            'SearchQueryContext was used outside the SearchQueryContextProvider',
        );
    }
    return context;
};

export default SearchQueryContextProvider;
export { useSearchQuery };
