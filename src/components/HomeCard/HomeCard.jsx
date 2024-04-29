import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const HomeCard = ({ allSpot }) => {
    console.log(allSpot);
    const { _id, image, spot, avarage, totalVisitors, travel, season, country } = allSpot;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <span className="text-2xl">{spot}</span>
                        <div className="badge badge-neutral">{season}</div>
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="badge badge-outline">{country}</div>
                        <p><span className="font-medium">Total Visitors:</span> <div className="badge badge-outline">{totalVisitors}</div></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`}><button className="btn bg-green-800 rounded-none text-white shadow-md hover:bg-blue-600"><TbListDetails></TbListDetails>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;