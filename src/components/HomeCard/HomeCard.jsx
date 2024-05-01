import { MdGroups } from "react-icons/md";
import { TbListDetails, TbWorldPin } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HomeCard = ({ allSpot }) => {
    console.log(allSpot);
    const { _id, image, spot, totalVisitors, season, country } = allSpot;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl rounded-none">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <span className="text-2xl">{spot}</span>
                        <div className="badge badge-neutral">{season}</div>
                    </h2>
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-1"><TbWorldPin></TbWorldPin><div className="badge badge-outline">{country}</div></p>
                        <p className="flex items-center gap-1"><span className="font-medium flex gap-1 items-center"><MdGroups />Total Visitors:</span> <div className="badge badge-outline">{totalVisitors}</div></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`}><button className="btn bg-green-800 rounded-none text-white shadow-md hover:bg-blue-600"><TbListDetails></TbListDetails>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
HomeCard.propTypes = {
    allSpot: PropTypes.object
}
export default HomeCard;