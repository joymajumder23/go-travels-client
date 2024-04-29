import { useLoaderData } from "react-router-dom";
import AllCards from "../AllCards/AllCards";

const AllSpot = () => {
    const allSpots = useLoaderData();
    console.log(allSpots);
    return (
        <div>
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