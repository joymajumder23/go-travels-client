import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateSpot = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    const { _id, name, email, image, spot, country, location, avarage, season, travel, totalVisitors, description } = loadedData;
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const avarage = form.avarage.value;
        const description = form.description.value;
        const season = form.season.value;
        const travel = form.travel.value;
        const totalVisitors = form.totalVisitors.value;

        const touristSpot = { name, email, image, spot, country, location, avarage, season, travel, totalVisitors, description };
        console.log(touristSpot);

        fetch(`http://localhost:5000/spots/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(touristSpot)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                form.reset();
            }
        })
    }

    return (
        <div className="max-w-6xl mx-auto mt-12">
            <h1 className="text-center text-4xl font-bold">Update Tourists Spot</h1>
            <p className='text-center text-xl font bold mt-2'>{spot}</p>
            <div>
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" placeholder="enter your name" className="input input-bordered" name="name" defaultValue={name} required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Author Email</span>
                            </label>
                            <input type="email" placeholder="enter your email" className="input input-bordered" defaultValue={email} name="email" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="enter image URL" className="input input-bordered" name="image" defaultValue={image} required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <input type="text" placeholder="enter tourist spot name" className="input input-bordered" defaultValue={spot} name="spot" required />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <select type="dropdown" placeholder="enter country name" className="input input-bordered" defaultValue={country} name="country" required>
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
                            <input type="text" placeholder="enter location" className="input input-bordered" name="location" defaultValue={location} required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Avarage Cost</span>
                            </label>
                            <input type="number" placeholder="enter avarage cost" className="input input-bordered" defaultValue={avarage} name="avarage" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" placeholder="enter total visitors" className="input input-bordered w-full" name="totalVisitors" defaultValue={totalVisitors} required />
                        </div>
                    </div>
                    <div className="flex w-full gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" placeholder="enter seasonality" className="input input-bordered" name="season" defaultValue={season} required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" placeholder="enter travel time" className="input input-bordered" name="travel" defaultValue={travel} required />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="label w-full">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" placeholder="enter description" className="input input-bordered w-full" defaultValue={description} name="description" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;