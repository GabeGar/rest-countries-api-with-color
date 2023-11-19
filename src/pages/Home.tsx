import Filter from '../components/Filter';
import SearchCountryField from '../components/SearchCountryField';

const Home = () => {
    return (
        <div className="text-sm">
            <SearchCountryField />
            <Filter />
        </div>
    );
};

export default Home;
