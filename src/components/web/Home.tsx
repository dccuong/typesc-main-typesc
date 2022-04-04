import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom"

import { IProduct } from "../../type/product";
import Slide from "./page/Slide";


type ProductProps = {
    products: IProduct[];
}

const Home = (props: ProductProps) => {
    console.log(props)
    return (<div>
        <Slide />
        <div className="font-bold my-3 flex justify-between w-[100%]" >
            <h3 className="text-red-600">CÁC SẢN PHẨM NỔI BẬT</h3>
            <div>
                <div className=" ">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button type="submit">tk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {props.products.map((item, index) => {
                return <div key={index} className=" shadow-md  py-2 px-3 hover:text-red-600 hover:shadow-2xl">
                    <Link to={'/product/' + item._id} className="hover:text-stone-500" >
                        <div>
                            <img src={item.img} alt="" className="mx-auto w-[286px] h-[270px]" />
                            <p className="text-red-500 font-bold">{item.name}</p>
                            <p >{item.price}.000 VNĐ</p>
                        </div>
                    </Link>


                </div>
            })}

        </div>
    </div>)


}

export default Home