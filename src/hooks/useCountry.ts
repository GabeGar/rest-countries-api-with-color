import { useQuery } from '@tanstack/react-query';
import { getCountry } from '../services/apiRESTCountries';

export const useCountry = (countryQuery: string) => {
    const { data, error, isPending } = useQuery({
        queryKey: [countryQuery],
        queryFn: () => getCountry(countryQuery),
    });

    return { data, error, isPending };
};
