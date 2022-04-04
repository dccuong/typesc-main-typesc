import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrvRouterUser = (props: PrivateRouterProps) => {
    if (JSON.parse(localStorage.getItem("user")).user.role == 1) {
        return <Navigate to="/AccA" />
    }
    if (JSON.parse(localStorage.getItem("user")).user.role == 0) {
        return <Navigate to="/AccC" />
    }
    return props.children
}

export default PrvRouterUser