import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const spots = useLoaderData();
    console.log('View Details',spots);

    const {_id} = useParams();
    const intId = parseInt(_id);
    console.log(typeof intId);
    
    return (
        <div>
            <h1>{spots}</h1>
        </div>
    );
};

export default ViewDetails;