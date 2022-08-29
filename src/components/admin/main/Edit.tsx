import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { IProduct } from '../../../type/product'
import { getAPrd } from '../../../api/prd'
import { TypeCate } from "../../../type/cate";
import axios from 'axios'
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
    const [picture, setPicture] = useState("");

    const onChangePicture = (e: any) => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
    };
    const { id } = useParams();
    const _id = id
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getAPrd(_id);
            reset(data);
            setPicture(data.img)
        }
        getProduct()
    }, [])
    const onSubmit: SubmitHandler<IpForm> = async (data) => {
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload"
        const CLOUDINARY_PRESET = "uiqccvxh";

        console.log(picture)
        console.log(data.img)
        if (picture != data.img) {
            const file1 = data.img[0];
            const formData1 = new FormData();
            formData1.append('file', file1);
            formData1.append('upload_preset', CLOUDINARY_PRESET)
            const response1 = await axios.post(CLOUDINARY_API, formData1, {
                headers: {
                    "Content-Type": "application/form-data"
                }

            })
            data.img = response1.data.url
            console.log(data)
            props.onUpdate(data);
        }
        if (picture == data.img) {
            props.onUpdate(data)
        }



        navigate("/admin/products")
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            < div className=" mx-auto w-90% text-center">
                <input className="shadow-xl w-[90%] py-[7px] my-[5px]" type="text" placeholder='Ten san pham' {...register('name')} />

                <input className="shadow-xl my-[5px]  w-[90%] py-[7px]" type="number" placeholder='Gia san pham' {...register('price')} />

                <input className="shadow-xl my-[5px]   w-[90%] py-[7px] " type="text" placeholder='Tieu de san pham' {...register('desc')} />

                <div><img width="200" src="" id="previewImage" /></div>
                <br />


                <div className="register_profile_image">
                    <input id="profilePic" {...register("img")} type="file" onChange={onChangePicture} />
                </div>
                <div className="previewProfilePic" >
                    <img className="playerProfilePic_home_tile" src={picture && picture} />
                </div>




                <br />

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