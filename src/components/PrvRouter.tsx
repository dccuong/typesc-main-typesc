import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrvRouter = (props: PrivateRouterProps) => {
    if (!JSON.parse(localStorage.getItem("user") as string)) {
        return <Navigate to="/signin" />
    }
    const isAuth = JSON.parse(localStorage.getItem("user") as string).user.role;
    if (isAuth !== 1) {
        return <Navigate to="/" />
    }

    return props.children
}

export default PrvRouter