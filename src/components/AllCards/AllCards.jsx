const AllCards = ({allSpot}) => {
    console.log(allSpot);
    const {image, spot, avarage, totalVisitors, travel, season} = allSpot;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{spot}</h2>
                    <div className="badge badge-neutral">{season}</div>
                   <div>
                    <p><span className="font-semibold">Travel Time:</span> <span>{travel}</span></p>
                    <p><span>Avarage Cost:</span> <span>{avarage}</span>
                    </p>
                   </div>
                   <div>
                    <p><span>Total Visitors Per Year:</span> <span>{totalVisitors}</span></p>
                   </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary rounded-none">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCards;