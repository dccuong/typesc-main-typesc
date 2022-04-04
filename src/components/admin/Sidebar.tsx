import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
type Props = {}

const Sidebar = (props: Props) => {
    return (

        <Sider collapsible >
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to="/admin"> Dashboard </Link>
                </Menu.Item>
                <SubMenu key="sub4" icon={<DesktopOutlined />} title="Products">
                    <Menu.Item key="7"> <Link to="./products"> Líst </Link></Menu.Item>
                    <Menu.Item key="10"> <Link to="./products/add"> Add </Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">List</Menu.Item>
                    <Menu.Item key="4">Add</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                    <Link to="/"> Go HOME </Link>
                </Menu.Item>
            </Menu>
        </Sider>

    )
}

export default Sidebar