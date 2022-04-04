import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrvRouter = (props: PrivateRouterProps) => {
    if (!JSON.parse(localStorage.getItem("user"))) {
        return <Navigate to="/signin" />
    }
    const isAuth = JSON.parse(localStorage.getItem("user")).user.role;
    if (isAuth !== 1) {
        return <Navigate to="/user" />
    }

    return props.children
}

export default PrvRouter