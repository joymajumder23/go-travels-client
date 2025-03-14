import { FcOvertime } from "react-icons/fc";
import { MdGroups } from "react-icons/md";
import { SiInfracost } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ExploreCard = ({data}) => {
    const {_id, image, spot, travel, avarage, totalVisitors, season} = data;
    return (
        <div>
            <div>
            <div className="card card-side bg-base-100 shadow-xl md:flex flex-col md:flex-row gap-4 mb-4 rounded-none">
                <figure><img className="md:w-[300px] p-2" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{spot}</h2>
                    <div className="badge badge-neutral">{season}</div>
                   <div className="flex justify-between">
                    <p className="flex items-center gap-1"><span className="font-semibold flex items-center gap-1"><FcOvertime></FcOvertime>Travel Time:</span> <span>{travel}</span></p>
                    <p className="flex items-center"><span className="font-semibold flex items-center gap-1"><SiInfracost></SiInfracost>Avarage Cost:</span> <span>{avarage}</span>
                    </p>
                   </div>
                   <div>
                    <p className="flex items-center gap-1"><span className="font-semibold flex items-center gap-1"><MdGroups></MdGroups> Total Visitors Per Year:</span> <span>{totalVisitors}</span></p>
                   </div>

                    <div className="card-actions justify-end">
                        <Link to={`/viewDetails/${_id}`}><button className="btn bg-green-800 rounded-none text-white shadow-md hover:bg-blue-600"><TbListDetails></TbListDetails>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
ExploreCard.propTypes = {
    data: PropTypes.object
}
export default ExploreCard;