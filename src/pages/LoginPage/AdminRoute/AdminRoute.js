import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner variant="success" animation="border"></Spinner>
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