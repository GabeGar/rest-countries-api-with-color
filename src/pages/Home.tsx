import Countries from '../components/Countries';
import Filter from '../components/Filter';
import SearchCountryField from '../components/SearchCountryField';

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
