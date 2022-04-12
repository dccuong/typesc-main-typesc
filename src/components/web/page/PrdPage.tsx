import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IProduct } from '../../../type/product'
import { goSearch, } from '../../../api/prd'
type Props = {}

const PrdPage = (props: Props) => {
    useParams()
    const search = localStorage.getItem("prd") as string
    console.log(search)
    const [prd, setprd] = useState<IProduct>()
    useEffect(() => {
        const getSearch = async () => {
            const { data } = await goSearch(search)
            console.log(data)
            setprd(data)

        }
        getSearch()
    }, [search])
    return (
        <div className="grid grid-cols-3 gap-5">
            {prd.map((item, index) => {
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

    )
}

export default PrdPage