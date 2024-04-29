import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { FcOvertime } from "react-icons/fc";
import { ImPriceTags } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { TbWorldPin } from "react-icons/tb";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const spots = useLoaderData();
    console.log('View Details', spots);

    const { id } = useParams();
    // const intId = parseFloat(id);
    // console.log(intId);
    const newSpot = spots.find(spot => spot._id === id);
    // console.log(newSpot);
    const { image, spot, country, location, avarage, season, travel, totalVisitors, description } = newSpot;

    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <Helmet>
                <title>Home | Tourist Spot Details</title>
            </Helmet>
            <figure><img className="w-full h-96" src={image} alt="" /></figure>
            <div className="md:flex gap-4 mt-4">
                <div className="card w-full bg-base-100 shadow-xl rounded-none">
                    <div className="card-body">
                        <h2 className="card-title text-3xl py-3 border-b">{spot}</h2>
                        <p className="font-semibold py-3 mb-3">Description</p>
                        <p>{description}</p>
                        <div className="card-actions justify-start">
                            <Link to="/"><button className="btn btn-primary rounded-none flex items-center gap-1"><IoIosArrowBack></IoIosArrowBack> Back to home</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full bg-base-100 shadow-xl rounded-none">
                        <div className="card-body">
                            <h2 className="card-title text-3xl p-3">Information <span className="badge badge-neutral">{season}</span></h2>

                            <div>

                                <p className="flex items-center gap-1 text-x p-3 border-b"> <span className="font-semibold flex items-center gap-1"><TbWorldPin />Country:</span> <span>{country}</span> </p>
                                <p className="flex items-center gap-1 text-x p-3 border-b"><span className="font-semibold flex items-center gap-1"><CiLocationOn></CiLocationOn> Loaction:</span> <span>{location}</span></p>
                                <p className="flex items-center gap-1 text-x p-3 border-b"> <span className="font-semibold flex items-center gap-1"><MdGroups></MdGroups>Total Visitors Per Year:</span> <span>{totalVisitors}</span> </p>
                            </div>
                            <div>
                                <p className="text-x border-b p-3 flex items-center gap-1"><span className="font-semibold flex items-center gap-1"><FcOvertime></FcOvertime>Travel Time:</span> <span>{travel}</span></p>

                                <h3 className="text-x flex items-center gap-1 p-3"><span className="font-semibold flex items-center gap-1"><ImPriceTags></ImPriceTags> Avarage Cost:</span> <span>{avarage}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;