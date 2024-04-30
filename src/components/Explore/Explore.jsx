import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExploreCard from "../ExploreCard/ExploreCard";
// import { useLoaderData } from "react-router-dom";

const Explore = () => {
    // const allSpots = useLoaderData();
    // console.log(allSpots);
    const {country} = useParams();
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => {
            setMatches(data);
        })
    },[]);
    const newMatches = matches.filter(match => match.country == country);
    console.log(newMatches);
    return (
        <div>
            <h1>{country}</h1>
            <div>
            {
              newMatches.map(data => <ExploreCard key={data._id} data={data}></ExploreCard>)  
            }
            </div>
        </div>
    );
};

export default Explore;