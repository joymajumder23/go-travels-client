import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

const SouthEastAsia = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setCountries(data);
        })
    },[])
    return (
        <div className="max-w-6xl mx-auto mt-12">
            <h1 className="text-3xl font-bold text-center mb-6">Southeast Aisa</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map(country => <CountryCard key={country._id} aCountry={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default SouthEastAsia;