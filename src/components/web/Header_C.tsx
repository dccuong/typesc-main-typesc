import { Avatar } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { IProduct } from '../../type/product';
type Props = {
}
type TypeInputs = {
    search: string,
}
const { SubMenu } = Menu;

const Header_C = (prop: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const [prd, setprd] = useState<IProduct>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        localStorage.setItem("prd", data.search)
        navigate("/products/search?key=" + data.search)
    }
    return (
        <div className='fixed left-0 right-0'>
            <nav className=' w-[100%] z-[10]'  >
                <ul className='flex  items-center justify-around font-bold bg-zinc-900 py-[10px]'>

                    <li>
                        <Link to="" className='text-white hover:text-blue-800 '>Home</Link>
                    </li>
                    <li>
                        <Link to="" className='text-white hover:text-blue-800 '>Products</Link>
                    </li>
                    <li>
                        <Link to="" className='text-white hover:text-blue-800 '>Category</Link>
                    </li>
                    <li>
                        <Link to="" className='text-white hover:text-blue-800 '>Home</Link>
                    </li>
                    <li>
                        <Link to="" className='text-[20px] opacity-[none]'>LOGO</Link>
                    </li>

                    <li >
                        <div className="mb-3 xl:w-96 items-center">

                            <div className="input-group  ">
                                <form action="" className="flex" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" {...register("search")} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                    <button className="bg-blue-600 p-1 rounded-md">Search</button>
                                </form>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/AccC" className='text-white hover:text-blue-800 '>U</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header_C
