import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { goSearch } from '../../../api/prd'
import { IProduct } from '../../../type/product'


type Props = {

}


const Search = (props: Props) => {
    useParams()
    const search = JSON.parse(localStorage.getItem("prd") as string)
    const [cPrd, setcPrd] = useState<IProduct[]>([])
    console.log(search)

    useEffect(() => {
        const getSearch = async () => {
            const { data } = await goSearch(search)
            console.log(data)
            setcPrd(data)
        }
        getSearch()
    }, [JSON.parse(localStorage.getItem("prd") as string)])
    return (
        <div><div>Search</div>
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
        </div>
    )
}

export default Search