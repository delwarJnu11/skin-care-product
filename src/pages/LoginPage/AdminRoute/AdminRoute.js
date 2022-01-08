import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import ScaleLoader from "react-spinners/ScaleLoader";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center">
            <ScaleLoader size={150} color={"#b57600"} speedMultiplier={1.5} />
        </div>
    }
    if (!admin) {
        return <div className="text-center">
            <ScaleLoader size={150} color={"#b57600"} speedMultiplier={1.5} />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;