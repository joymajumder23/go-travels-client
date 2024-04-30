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
                            <tr className="text-xl">

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
                                    <td className="lg:flex gap-1"><button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-success w-16">Update</button>
                                        <button className="btn btn-error w-16">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyList;