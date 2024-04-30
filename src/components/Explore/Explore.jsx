import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExploreCard from "../ExploreCard/ExploreCard";
import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";

const Explore = () => {
    // const allSpots = useLoaderData();
    // console.log(allSpots);
    const {country} = useParams();
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/spots')
        .then(res => res.json())
        .then(data => {
            setMatches(data);
        })
    },[]);
    const newMatches = matches.filter(match => match.country == country);
    console.log(newMatches);
    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <Helmet>
                <title>Home | {country}</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center">{country}</h1>
            <div className="mt-8">
            {
              newMatches.map(data => <ExploreCard key={data._id} data={data}></ExploreCard>)  
            }
            </div>
        </div>
    );
};

export default Explore;