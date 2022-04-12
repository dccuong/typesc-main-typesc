
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';

import Header_C from './Header_C';
import { TypeCate } from '../../type/cate';
const { Content, Footer } = Layout;
type Props = {
    categorys: TypeCate[]
}



const C_layout = (props: Props) => {
    return (
        <Layout >
            <header className='fixed z-[10] w-[100%] ' > <Header_C /></header>
            <Content className="site-layout  ">

                <div className="site-layout-background  mt-[70px]" >
                    <Outlet />
                </div>
            </Content>
            <Footer >Ant Design ©2018 Created by Ant UED</Footer>
        </Layout >
    )

}


export default C_layout