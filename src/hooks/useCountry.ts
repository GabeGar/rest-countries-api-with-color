import { useQuery } from '@tanstack/react-query';
import { getCountry } from '../services/apiRESTCountries';

export const useCountry = (countryName: string) => {
    const { data, error, isPending } = useQuery({
        queryKey: [countryName],
        queryFn: () => getCountry(countryName),
    });

    return { data, error, isPending };
};
