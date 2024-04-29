import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeCard from "../HomeCard/HomeCard";
import SouthEastAsia from "../SouthEastAsia/SouthEastAsia";

const Home = () => {
    const allSpots = useLoaderData();
    console.log(allSpots);
    return (
        <div>
            <Banner></Banner>
            <section className="mt-12 max-w-6xl mx-auto">
                <h1 className="text-3xl text-center font-bold">Tourist Spot</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    {
                        allSpots.map(allSpot => <HomeCard key={allSpot._id} allSpot={allSpot}></HomeCard>)
                    }
                </div>
                </section> 
                <section>
                    <SouthEastAsia></SouthEastAsia>
                </section>
        </div>
    );
};

export default Home;