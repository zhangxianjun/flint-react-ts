import {Breadcrumb, Layout, Menu} from 'antd';
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

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


function Main() {
    const [state, setState] = useState({collapsed: false});

    function onCollapse() {
        if (state.collapsed === false) {
            setState({collapsed: true});
        } else {
            setState({collapsed: false});
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
                <Logo>Flint Admin</Logo>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<DesktopOutlined />}>我的工作</Menu.Item>
                    <Menu.Item key="2" icon={<BulbOutlined />}> 产品管理 </Menu.Item>
                    <SubMenu key="sub1" icon={<CodeOutlined />} title="开发管理">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<FileSearchOutlined />} title="测试管理">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<CiCircleOutlined />}> 运维管理 </Menu.Item>
                    <Menu.Item key="10" icon={<SettingOutlined />}> 系统管理 </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                {/*<Header style={{ padding: 0, background: '#fff' }} />*/}
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main;

const Logo = styled.div `
  text-align: center;
  line-height: 32px;
  font-size: 20px;
  color: #fff;
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;