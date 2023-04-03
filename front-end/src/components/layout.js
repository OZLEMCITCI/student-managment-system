
import {Badge, Breadcrumb, Button, Empty, Layout, Menu, Spin, Table, Tag} from 'antd';
import React, { useState } from 'react';
import {columns, fetchStudents} from "../utility/utility";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';
import StudentDrawerForm from "./StudentDrawerForm";
import SubMenu from "antd/es/menu/SubMenu";

const { Header, Content, Footer, Sider } = Layout;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function AppLayout ({students,fetching}) {

    const [collapsed, setCollapsed] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const renderStudents = () => {
        if (fetching) {
            return <Spin indicator={antIcon} />
        }
        if (students.length <= 0) {
            return <><StudentDrawerForm showDrawer={showDrawer} fetchStudents={fetchStudents} setShowDrawer={setShowDrawer} /><Empty /></>;
        }
        return <>
            <StudentDrawerForm showDrawer={showDrawer} fetchStudents={fetchStudents} setShowDrawer={setShowDrawer} />
            <Table
            dataSource={students}
            columns={columns}
            bordered
            title={() =>
                <>
                <Tag>Number of students</Tag>
                <Badge count={students.length} className="site-badge-count-4"/>
                <br/><br/>
                {/*<Button*/}
                {/*onClick={() => setShowDrawer(!showDrawer)}*/}
                {/*type="primary" shape="round" icon={<PlusOutlined/>} size="small">*/}
                {/*Add New Student*/}
                {/*</Button>*/}
                </>}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 1000 }}
        />
        </>;
    }

    return<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Button
                        onClick={() => setShowDrawer(!showDrawer)}
                        type="primary" shape="round" icon={<PlusOutlined/>} size="small">
                        Add New Student
                    </Button>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {renderStudents()}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
}

export default AppLayout