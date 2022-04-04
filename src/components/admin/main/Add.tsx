
import axios from "axios";

import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

import { TypeCate } from "../../../type/cate";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { useState } from "react";



type ProductAddProps = {
    // name: string,
    onAdd: (product: TypeInputs) => void,
    category: TypeCate[]
}
type TypeInputs = {
    name: string,
    price: number,
    desc: string,
    img: string,
    category: object
}



const AddProduct = (props: ProductAddProps) => {
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const [picture, setPicture] = useState('');

    const onChangePicture = (e: any) => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
    };

    const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dcjtdlsw7/image/upload"
        const CLOUDINARY_PRESET = "uiqccvxh";
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
        props.onAdd(data);

    }
    return (
        <div className=" mx-auto w-90% text-center" >
            Form ADD
            <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="">
                    <input className="shadow-xl w-[90%] py-[7px] my-[5px]" type="text" placeholder='Ten san pham' {...register('name')} />

                    <input className="shadow-xl my-[5px]  w-[90%] py-[7px]" type="number" placeholder='Gia san pham' {...register('price')} />

                    <input className="shadow-xl my-[5px]   w-[90%] py-[7px] " type="text" placeholder='Tieu de san pham' {...register('desc')} />


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
                <button className="rounded-sm bg-green-700 text-white p-4 text-[12px]">ADD</button>
            </form>
        </div>
    )
}
export default AddProduct