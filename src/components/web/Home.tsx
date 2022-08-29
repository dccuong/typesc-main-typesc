import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { IProduct } from "../../type/product";
import Slide from "./page/Slide";
import { useForm, SubmitHandler } from "react-hook-form"
type ProductProps = {
    products: IProduct[];
}
type TypeInputs = {
    search: string,
}

const Home = (props: ProductProps) => {
    console.log(props)
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const [prd, setprd] = useState<IProduct>()
    useEffect(() => {


    }, [])

    return (<div className="w-[100%]">
        <Slide />
        <div className="w-[80%] mx-auto">
            <div className="font-bold my-3 flex justify-between w-[100%]" >
                <h3 className="text-red-600">CÁC SẢN PHẨM NỔI BẬT</h3>

            </div>
            <div className="grid grid-cols-3 gap-5">
                {props.products.map((item, index) => {
                    return <div key={index} className="rounded-lg shadow-md  py-2 px-3 hover:text-red-600 hover:shadow-2xl">
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
        </div>
    </div>)


}

export default Home