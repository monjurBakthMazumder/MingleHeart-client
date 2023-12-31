import { Navigate, useLocation } from "react-router";
import PropTypes from 'prop-types';
import UseAuth from "../Hock/UseAuth";
import Loading from "../Component/Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = UseAuth();
    const location = useLocation();

    if(isLoading){
        return <Loading/>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children : PropTypes.node
};