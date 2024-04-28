const AddSpot = () => {
    const handleSubmit = e => {
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
        console.log(name, email, image, spot, country, location, avarage, description, season, travel, totalVisitors);
    }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Add Tourists Spot</h1>
            <div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="flex gap-4">
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
                    <div className="flex gap-4">
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
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input type="text" placeholder="enter country name" className="input input-bordered" name="country" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="enter location" className="input input-bordered" name="location" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
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
                            <input type="number" placeholder="enter total visitors" className="input input-bordered w-full" name="totalVisitors" required />
                        </div>
                    </div>
                    <div className="flex w-full gap-4">
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
    );
};

export default AddSpot;