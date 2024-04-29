import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div>
        <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-20 w-48"></div>
            <div className="skeleton h-20 w-full"></div>
            <div className="skeleton h-20 w-full"></div>
        </div>
    </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;