import Countries from '../components/Countries/Countries';
import Filter from '../components/Filter/Filter';
import SearchCountryField from '../components/Search/SearchCountryField';
import ScrollToButtons from '../components/ui/ScrollToButtons';

const Home = () => {
    return (
        <div className="text-sm">
            <div className="md:mx-16 md:mt-6 md:flex md:items-center md:justify-between">
                <SearchCountryField />
                <Filter />
            </div>
            <Countries />
            <ScrollToButtons />
        </div>
    );
};

export default Home;
