import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
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
                        <form className="mt-20" action="">
                            <p className="lg:flex items-center gap-1 w-full"><span className="font-semibold">User Name: </span><input type="text" placeholder="enter name" className="input input-bordered input-success w-full max-w-xs shadow-lg mb-4" defaultValue={user?.displayName} /></p>
                            <br />
                            <p className="lg:flex items-center gap-1"><span className="font-semibold">Photo URL:</span> <input type="text" placeholder="enter photo URL" className="input input-bordered input-success w-full max-w-xs shadow-lg mb-4" /></p>
                            <br />
                            <input className="btn rounded-none bg-green-800 text-white shadow-lg" type="submit" value="Update" />
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};

export default Profile;