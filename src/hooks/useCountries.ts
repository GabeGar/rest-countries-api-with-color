import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../services/apiRESTCountries';

export const useCountries = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['countries'],
        queryFn: getCountries,
    });

    return { data, error, isPending };
};
