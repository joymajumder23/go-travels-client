import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    // const [allSpots, setAllSpots] = useState([]);
    console.log(data);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myList/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllSpots(data);
    //             console.log(data);
    //         })
    // }, [user]);
    // console.log(allSpots);
    //
    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`http://localhost:5000/myList/${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setAllSpots(data);
    //                 console.log(data);
    //             })
    //     }
    // }, [user]);

    // console.log(allSpots);
    return (
        <div>
            <h1>My List</h1>
            <div className="max-w-6xl mx-auto mt-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tourists Spot Name</th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;