import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../type/product';
import { useNavigate } from 'react-router-dom';
type ProductManagerProps = {
    products: IProduct[];
    onRemove: (id: string) => void
}

const Products = (props: ProductManagerProps) => {
    const navigate = useNavigate();
    console.log(props)
    return (
        <div>
            <h3 className="text-gray-700 text-3xl font-medium">List Products</h3>
            <Link to="./add" >
                <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-[3px] px-[10px]  text-[12px]" >
                    add
                </button>
            </Link>

            <div className="mt-4">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow-md sm:rounded-lg">
                                <table className="min-w-full">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Color
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Category
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Price
                                            </th>
                                            <th scope="col" className="relative py-3 px-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.products.map((item, index) => {

                                            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item._id}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    {item.name}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    {item.price}
                                                </td>
                                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    $2999
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <Link to="" >
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[3px] px-[10px]  text-[12px]" >
                                                            Edit
                                                        </button>
                                                    </Link>
                                                    <Link to="" >
                                                        <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-[3px] px-[10px]  text-[12px]"
                                                            onClick={() => {
                                                                props.onRemove(item._id);
                                                                navigate("/admin/products")
                                                            }}>
                                                            DELETE
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>

                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Products