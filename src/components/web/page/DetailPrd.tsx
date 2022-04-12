import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPrdCate } from '../../../api/cate'
import { getAPrd } from '../../../api/prd'
import App from '../../../App'
import { IProduct } from '../../../type/product'

type Props = {

}
type Aprd = {
    name: string,
    price: number,
    desc: string,
    img: string,
    category: string
}


const DetailPrd = (props: Props) => {
    const [aPrd, setaPrd] = useState<Aprd>()
    const [cPrd, setcPrd] = useState<IProduct[]>([])
    const { id } = useParams()
    const _id = id

    useEffect(() => {

        const getPrd = async () => {
            const { data } = await getAPrd(_id)
            setaPrd(data);
            console.log(data.category)
            const { data: PrdCate } = await getPrdCate(String(data.category))
            console.log(PrdCate.products)
            setcPrd(PrdCate.products)


        }
        getPrd()



    }, [_id])
    console.log(cPrd)
    return (
        <div><section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full  object-cover object-center rounded border border-gray-200" src={aPrd?.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{aPrd?.name}</h1>
                        <div className="flex mb-4">


                        </div>
                        <p className="leading-relaxed">{aPrd?.desc}</p>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${aPrd?.price}</span>
                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">BUY</button>
                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <div className="grid grid-cols-3 gap-5">
                {cPrd.map((item, index) => {
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
        </section>
        </div>
    )
}

export default DetailPrd