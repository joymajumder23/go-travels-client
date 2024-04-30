import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyList = () => {

    const { user } = useContext(AuthContext);
    const [allSpots, setAllSpots] = useState([]);
    // const loadedData = useLoaderData();
    // console.log(loadedData);
    // const [datas, setDatas] = useState(loadedData);

    useEffect(() => {
        if (user?.email) {
            // console.log(user.email);
            fetch(`http://localhost:5000/myList/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setAllSpots(data);
                    // console.log(data);
                })
        }
    }, [user]);

    // console.log(allSpots);

    // const handleUpdate = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const image = form.image.value;
    //     const spot = form.spot.value;
    //     const country = form.country.value;
    //     const location = form.location.value;
    //     const avarage = form.avarage.value;
    //     const description = form.description.value;
    //     const season = form.season.value;
    //     const travel = form.travel.value;
    //     const totalVisitors = form.totalVisitors.value;

    //     const newUser = { name, email, image, spot, country, location, avarage, description, season, travel, totalVisitors };
    //     console.log(newUser);

    //     fetch(`http://localhost:5000/spots/${_id}`, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //         .then(res => res.json)
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/spots/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = allSpots.filter(all => all._id !== _id);
                        setAllSpots(remaining);
                    })
            }
        });

    }
    return (
        <div>
            <Helmet>
                <title>Home | My List</title>
            </Helmet>
            <div className="max-w-6xl mx-auto mt-12">
                <h1 className="text-3xl font-bold text-center">My List</h1>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="lg:text-xl">

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
                                    <td className="lg:flex gap-1">
                                        {/* <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-success w-16">Update</button> */}
                                        <Link to={`/update/${all?._id}`}><button className="btn btn-success w-16">Update</button></Link>
                                        <button onClick={() => handleDelete(all?._id)} className="btn btn-error w-16">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="max-w-6xl mx-auto mt-12">
                            <h1 className="text-center text-x font-bold">Add Tourists Spot</h1>
                            <div>
                                <form onSubmit={handleUpdate} className="card-body">
                                    <div className="lg:flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Author Name</span>
                                            </label>
                                            <input type="text" placeholder="enter your name" className="input input-bordered" name="name" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Author Email</span>
                                            </label>
                                            <input type="email" placeholder="enter your email" className="input input-bordered" name="email" required />
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Image URL</span>
                                            </label>
                                            <input type="text" placeholder="enter image URL" className="input input-bordered" name="image" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Tourists Spot Name</span>
                                            </label>
                                            <input type="text" placeholder="enter tourist spot name" className="input input-bordered" name="spot" required />
                                        </div>
                                    </div>

                                    <div className="lg:flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Country Name</span>
                                            </label>
                                            <select type="dropdown" placeholder="enter country name" className="input input-bordered" name="country" required>
                                                <option selected>Choose Country</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Cambodia">Cambodia</option>
                                            </select>
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Location</span>
                                            </label>
                                            <input type="text" placeholder="enter location" className="input input-bordered" name="location" required />
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Avarage Cost</span>
                                            </label>
                                            <input type="number" placeholder="enter avarage cost" className="input input-bordered" name="avarage" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Total Visitors Per Year</span>
                                            </label>
                                            <input type="text" placeholder="enter total visitors" className="input input-bordered w-full" name="totalVisitors" required />
                                        </div>
                                    </div>
                                    <div className="lg:flex w-full gap-4">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Seasonality</span>
                                            </label>
                                            <input type="text" placeholder="enter seasonality" className="input input-bordered" name="season" required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Travel Time</span>
                                            </label>
                                            <input type="text" placeholder="enter travel time" className="input input-bordered" name="travel" required />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label className="label w-full">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" placeholder="enter description" className="input input-bordered w-full" name="description" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog> */}
            </div>
        </div>
    );
};

export default MyList;