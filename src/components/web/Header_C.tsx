import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom';
// type ProductProps = {
//     data: {
//         id: number,
//         name: string
//     }
// }

const Header = () => {
    return <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" className="flex items-center">

                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DC_store</span>
            </a>

            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        < NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/" > Home</NavLink >
                    </li>
                    <li>
                        < NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/product" > Product</NavLink >
                    </li>
                    <li>
                        < NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/" >About</NavLink >
                    </li>
                    <li>
                        < NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/admin" > Admin</NavLink >
                    </li>

                </ul>
            </div>
            <div></div>
        </div>
    </nav>



}

export default Header
