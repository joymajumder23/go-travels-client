import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
  
    const { user } = useContext(AuthContext);
    const [allSpots, setAllSpots] = useState([]);

    useEffect(() => {
        if (user?.email) {
            console.log(user.email);
            fetch(`http://localhost:5000/myList/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setAllSpots(data);
                    console.log(data);
                })
        }
    }, [user]);

    console.log(allSpots);
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-12">
            <h1 className="text-3xl font-bold text-center">My List</h1>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Tourists Spot Name</th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSpots.map(all => <tr key={all._id} className="hover">
                                   
                                    <td>{all?.spot}</td>
                                    <td>{all?.country}</td>
                                    <td>{all?.location}</td>
                                    <td className="lg:flex gap-1"><button className="btn btn-success w-16">Update</button>
                                        <button className="btn btn-error w-16">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;