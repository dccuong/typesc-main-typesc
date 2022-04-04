import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { IProduct } from '../../../type/product'
import { getAPrd } from '../../../api/prd'
import { TypeCate } from "../../../type/cate";
type Props = {
    onUpdate: (product: IProduct) => void
    category: TypeCate[]
}
type IpForm = {
    name: string,
    price: number,
    desc: string,
    img: string,
    category: object
}
const EditProduct = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IpForm>();
    const navigate = useNavigate();
    const { id } = useParams();
    const _id = id
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getAPrd(_id);
            reset(data);
        }
        getProduct()
    }, [])
    const onSubmit: SubmitHandler<IpForm> = data => {
        console.log(data)
        props.onUpdate(data);
        navigate("/admin/products")
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            < div className="">
                <input className="shadow-xl w-[90%] py-[7px] my-[5px]" type="text" placeholder='Ten san pham' {...register('name')} />

                <input className="shadow-xl my-[5px]  w-[90%] py-[7px]" type="number" placeholder='Gia san pham' {...register('price')} />

                <input className="shadow-xl my-[5px]   w-[90%] py-[7px] " type="text" placeholder='Tieu de san pham' {...register('desc')} />

                <div><img width="200" src="" id="previewImage" /></div>
                <input className="shadow-xl  my-[5px] w-[90%] py-[7px]" type="file" placeholder='img' id="img" {...register('img')} />

                <select id="" className="shadow-xl  w-[90%] py-[7px]"  {...register('category')}>
                    {props.category.map((item, index) => {
                        return (
                            <option key={index} value={item._id}>{item.name}</option>)
                    })}

                </select>


            </div>
            <button className="rounded-sm bg-green-700 text-white px-4 text-[12px]">Edit</button>
        </form>


    )
}
export default EditProduct