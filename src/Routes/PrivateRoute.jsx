import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import Loader from "../Component/Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();

	const location = useLocation();

	if (loading) {
		return <Loader></Loader>
	} else {
		if (user) {
			return children;
		} else {
			return <Navigate state={location.pathname} to="/login"></Navigate>;
		}
	}
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;