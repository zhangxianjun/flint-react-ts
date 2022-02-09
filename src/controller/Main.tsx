import {Anchor, Breadcrumb, Card, Divider, Layout, List, Menu, Space, Typography} from 'antd';
import {
    BulbOutlined,
    DesktopOutlined,
    CodeOutlined,
    CiCircleOutlined,
    FileSearchOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {useState} from "react";
import styled from "@emotion/styled";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Login from "./Login";
import {MenuClickEventHandler, MenuInfo} from "rc-menu/lib/interface";

function Main() {

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <Layout style={{minHeight: '100vh'}}>
            <PageSide></PageSide>
            <Layout className="site-layout">
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Login name={'zxj'}></Login>}></Route>
                    </Routes>
                </BrowserRouter>
                <Layout.Content style={{background: '#fff'}}>
                    <Breadcrumb style={{margin: '16px'}}>
                        <Breadcrumb.Item>我的工作</Breadcrumb.Item>
                        <Breadcrumb.Item>今日待办</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: '16px', minHeight: 360}}>
                        <Divider>今日任务</Divider>
                        <List
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                                </List.Item>
                            )}
                        />
                    </div>
                    <Divider>外链导航</Divider>
                    <Space style={{padding: '16px'}}>
                        <Card style={{width: 180}}>
                            <a href={'https://lanhuapp.com/'} target="_blank">蓝湖</a>
                            <p>原型&设计图</p>
                        </Card>
                        <Card style={{width: 180}}>
                            <a href={'https://lanhuapp.com/'} target="_blank">蓝湖</a>
                            <p>原型&设计图</p>
                        </Card>
                        <Card style={{width: 180}}>
                            <a href={'https://lanhuapp.com/'} target="_blank">蓝湖</a>
                            <p>原型&设计图</p>
                        </Card>
                        <Card style={{width: 180}}>
                            <a href={'https://lanhuapp.com/'} target="_blank">蓝湖</a>
                            <p>原型&设计图</p>
                        </Card>
                    </Space>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default Main;

const PageSide = () => {

    const [state, setState] = useState({collapsed: false});

    function onCollapse() {
        if (state.collapsed === false) {
            setState({collapsed: true});
        } else {
            setState({collapsed: false});
        }
    };

    function routeClick(evt: MenuInfo) {
        console.log("===" + evt.key);
        // 获取到key进行跳转
    }

    return (
        <Layout.Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
            <Logo>Flint</Logo>
            <Menu theme="dark" defaultSelectedKeys={['21']} mode="inline" onClick={routeClick}>
                <Menu.SubMenu key="20" icon={<DesktopOutlined/>} title="我的工作">
                    <Menu.Item key="21">今日待办</Menu.Item>
                    <Menu.Item key="22">参与项目</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="40" icon={<BulbOutlined/>} title="产品管理">
                    <Menu.Item key="41">产品规划</Menu.Item>
                    <Menu.Item key="42">产品原型</Menu.Item>
                    <Menu.Item key="43">设计资源</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="60" icon={<CodeOutlined/>} title="开发管理">
                    <Menu.Item key="61">设计文稿</Menu.Item>
                    <Menu.Item key="62">开发计划</Menu.Item>
                    <Menu.Item key="63">源码地址</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="80" icon={<FileSearchOutlined/>} title="测试管理">
                    <Menu.Item key="81">测试用例</Menu.Item>
                    <Menu.Item key="82">BUG管理</Menu.Item>
                    <Menu.Item key="83">测试报告</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="100" icon={<CiCircleOutlined/>} title="运维管理">
                    <Menu.Item key="101">账号管理</Menu.Item>
                    <Menu.Item key="102">检测报告</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="120" icon={<SettingOutlined/>} title="系统管理">
                    <Menu.Item key="121">用户管理</Menu.Item>
                    <Menu.Item key="122">权限管理</Menu.Item>
                    <Menu.Item key="200">Flint教程</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
}


const Logo = styled.div`
  text-align: center;
  line-height: 32px;
  font-size: 20px;
  color: #fff;
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;