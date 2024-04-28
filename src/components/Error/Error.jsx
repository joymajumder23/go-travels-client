// import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Error = () => {
    // const [animation, setAnimation] = useState();
    // useEffect(() => {
    //     fetch('./Animation.json')
    //     .then(res => res.json())
    //     .then(data => setAnimation(data))
    // }, []);
    // console.log(animation);
    return (
        <div>
            <Link to="/"><button className="btn rounded-none">Back to Home</button></Link>
        </div>
    );
};

export default Error;