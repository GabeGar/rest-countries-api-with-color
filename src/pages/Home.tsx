import Countries from '../components/Countries/Countries';
import Filter from '../components/Filter/Filter';
import SearchCountryField from '../components/Search/SearchCountryField';

const Home = () => {
    return (
        <div className="text-sm">
            <SearchCountryField />
            <Filter />
            <Countries />
        </div>
    );
};

export default Home;
