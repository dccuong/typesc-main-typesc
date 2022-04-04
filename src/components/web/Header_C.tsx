import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { Avatar } from 'antd';
import { Header } from "antd/lib/layout/layout";
import { TypeCate } from "../../type/cate";
type Props = {
    listCate: TypeCate[]
}
const { SubMenu } = Menu;

const Header_C = (prop: Props) => {


    return (
        <Header className='flex items-center justify-between ' style={{ position: 'fixed', zIndex: 1, width: '100%' }}>


            <Menu theme="dark" className='flex' mode="vertical" >
                <Link to="/"> <Menu.Item key="1"><label className='font-medium'>DCSTORT</label> </Menu.Item></Link>
                <Menu.Item key="2"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/products">Products</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/">Cart</Link></Menu.Item>
                <SubMenu key="sub10000" title="Category">
                    {prop.listCate.map((item, index) => {
                        return (<Menu.Item key={index + 1 + 4}><Link to={'/category/' + item._id}>{item.name}</Link></Menu.Item>)
                    })}

                </SubMenu>
            </Menu>
            <Menu theme="dark" >
                <Menu.Item key="111"><Link to="/AccC"><Avatar>U</Avatar></Link></Menu.Item>
            </Menu>


        </Header >


    )
}

export default Header_C
