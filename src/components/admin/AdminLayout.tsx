import React from 'react'
import { Outlet } from 'react-router-dom'

import Header_A from './Header_A'
import Sidebar from './Sidebar'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div className='grid grid-cols-6 '>
            <Sidebar />
            <div className="container-fluid col-span-5">
                <div className="">
                    {/* <Header_A /> */}
                    <main className="bg-gray-100">
                        <div className="container mx-auto p-5">

                            <Outlet />

                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}

export default AdminLayout