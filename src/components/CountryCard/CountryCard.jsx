import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CountryCard = ({aCountry}) => {
    const {image, country, description} = aCountry;
    return (
        <div>
            <Helmet>
                <title>Home | {country}</title>
            </Helmet>
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

CountryCard.propTypes = {
    aCountry: PropTypes.object
}
export default CountryCard;