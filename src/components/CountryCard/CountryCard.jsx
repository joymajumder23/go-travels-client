import { Link } from "react-router-dom";

const CountryCard = ({aCountry}) => {
    const {image, country, description} = aCountry;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/explore/${country}`}><button className="btn btn-primary rounded-none">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;