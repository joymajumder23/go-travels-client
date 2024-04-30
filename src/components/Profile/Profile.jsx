import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext);

    const handleUpdate = e => {
        const form = e.target;
        const fullName = form.fullName.value;
        const image = form.image.value;

        updateUser(fullName, image)
        .then(() => {
            toast.success('Updated Successfully');
            window.location.reload();
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div className="max-w-6xl mx-auto mt-12">
            <h1 className="text-3xl font-bold text-center">Profile</h1>
            <div className="mt-8">
                {
                    user && <div className="text-center lg:flex items-center justify-around">
                        <div>
                        <div className="avatar w-60">
                            <div className="w-full rounded-full ring ring-success ring-offset-base-100 ring-offset-2 shadow-lg">
                                <img className="w-14" src={user?.photoURL} />
                            </div>
                        </div>
                        <p className="text-xl font-bold mt-3">{user?.displayName}</p>
                        </div>
                        <form onSubmit={handleUpdate} className="mt-20" action="">
                            <p className="text-start"><span className="font-semibold">User Name: </span><input type="text" placeholder="enter name" className="input input-bordered input-success w-full max-w-xs shadow-lg mb-4 rounded-none" name="fullName" defaultValue={user?.displayName} /></p>
                            <br />
                            <p className="text-start"><span className="font-semibold">Photo URL:</span> <input type="text" placeholder="enter photo URL" className="input input-bordered input-success w-full max-w-xs shadow-lg mb-4 rounded-none" name="image" /></p>
                            <br />
                            <input className="btn rounded-none bg-green-800 text-white shadow-lg" type="submit" value="Update" />
                        </form>
                    </div>
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Profile;