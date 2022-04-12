import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrvRouterUser = (props: PrivateRouterProps) => {
    if (!JSON.parse(localStorage.getItem("user") as string)) {
        return <Navigate to="/signin" />
    } else {
        const isAuth = JSON.parse(localStorage.getItem("user") as string).user.role;
        console.log(isAuth)
        if (isAuth == 1) {
            return <Navigate to="/AccA" />
        } else if (isAuth == 0) {
            return <Navigate to="/AccC" />
        }

        return props.children
    }
}

export default PrvRouterUser