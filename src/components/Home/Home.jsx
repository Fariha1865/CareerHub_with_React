import Banner from "../Banner/Banner";
import Categories from "../Categories/categories";
import Featured from "../HomePageComponents/FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
           
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
        </div>
    );
};

export default Home;