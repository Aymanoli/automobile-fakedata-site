// import React from 'react';
// import { Route, redirect } from 'react-router-dom';
// import {  } from "react-router-dom";
// import { redirect } from "react-router-dom";

import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Login from '../Login/Login';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation='border' variant='danger' />
    }
    if (!user?.uid) {
        // return redirect("/login");
        return <Login />
    }
    
    return children
    // return (
    //     <Route
    //         {...rest}
    //         render={({location}) => user.email ? children : <redirect 
    //         to={{
    //             pathname: "/login",
    //             state: { from: location }
    //           }}
    //         />}
    //     >

    //     </Route>
    // );
};

export default PrivateRoute;