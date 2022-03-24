import React from "react";
import ReactDOM from "react-dom";
// type ProductProps = {
//     data: {
//         id: number,
//         name: string
//     }
// }

const Home = () => {



    return <div className="">
        <div className="inline-block font-bold my-3">
            <h3 className="text-red-600">CÁC SẢN PHẨM NỔI BẬT</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">

            <div className=" border-[1px] rounded-[15px] shadow-sm border-slate-900 py-2 px-3 hover:border-red-500 hover:shadow-xl">
                <a href="#/tai_nghe/.id}" className="hover:text-stone-500" >
                    <div>
                        <img src="" alt="" className="mx-auto w-[286px] h-[270px]" />
                        <p className="text-red-600 font-bold"></p>
                        <p >.000 VNĐ</p>
                    </div>
                </a>


            </div>
        </div>
    </div>


}

export default Home