/* import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children, auth }) {
   
    if (auth) {
        return children
    } else {
        return (
            <Navigate to='/' />
        )
    }

}

export default ProtectedRoutes */