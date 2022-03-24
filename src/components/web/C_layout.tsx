import React, { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header_C'

type Props = {}

const C_layout = (props: Props) => {
    return (
        <Fragment>
            <Header />
            <main><Outlet /></main>
            <footer></footer>
        </Fragment>
    )
}

export default C_layout