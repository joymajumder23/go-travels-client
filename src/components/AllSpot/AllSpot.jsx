import { useLoaderData } from "react-router-dom";
import AllCards from "../AllCards/AllCards";
import { Helmet } from "react-helmet-async";

const AllSpot = () => {
    const allSpots = useLoaderData();
    // console.log(allSpots);
    return (
        <div className="max-w-6xl mx-auto mt-12">
             <Helmet>
                <title>Home | All Tourists Spot</title>
            </Helmet>
            <h1>All Tourist Spot: {allSpots.length}</h1>
            <div>
                {
                    allSpots.map(allSpot => <AllCards key={allSpot._id} allSpot={allSpot}></AllCards>)
                }
            </div>
        </div>
    );
};

export default AllSpot;