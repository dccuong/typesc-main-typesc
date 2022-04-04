
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
            <Header_C listCate={props.categorys} />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

                    <Outlet />
                </div>
            </Content>
            <Footer >Ant Design ©2018 Created by Ant UED</Footer>
        </Layout >
    )

}


export default C_layout