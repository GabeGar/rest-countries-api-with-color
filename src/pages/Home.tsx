import Countries from '../components/Countries/Countries';
import Filter from '../components/Filter/Filter';
import SearchCountryField from '../components/Search/SearchCountryField';
import ScrollToButtons from '../components/ui/ScrollToButtons';

const Home = () => {
    return (
        <div className="text-sm">
            <SearchCountryField />
            <Filter />
            <Countries />
            <ScrollToButtons />
        </div>
    );
};

export default Home;
