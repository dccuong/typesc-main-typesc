import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../type/product';
import { useNavigate } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { Pagination } from 'antd';


type ProductManagerProps = {
    products: IProduct[];

    onRemove: (id: string) => void
}

const Products = (props: ProductManagerProps) => {
    const navigate = useNavigate();
    console.log(props)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'cate',
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'age',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={record._id + "/edit/"} >Edit {record.name}</Link>
                    <Link to="" onClick={() => {
                        props.onRemove(record._id);
                        navigate("/admin/products")
                    }} >Delete</Link>
                </Space>
            ),
        },
    ];
    const data = props.products.map((item, index) => {

    })
    return (
        <div>
            <h3 className="text-gray-700 text-3xl font-medium">List Products</h3>
            <Link to="./add" >
                <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-[3px] px-[10px]  text-[12px]" >
                    add
                </button>
            </Link>

            <div className="mt-4">


                <Table dataSource={props.products} columns={columns} pagination={{ defaultPageSize: 4, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }} />;
            </div >
        </div >
    )
}

export default Products