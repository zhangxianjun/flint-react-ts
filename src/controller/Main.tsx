import {Layout, Menu} from 'antd';
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
import {useNavigate, Outlet} from "react-router-dom";
import {MenuInfo} from "rc-menu/lib/interface";
import {navigationList} from "../NavigationMap";

function Main() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <PageSide></PageSide>
            <Layout className="site-layout">
                <Outlet/>
            </Layout>
        </Layout>
    );
}

export default Main;

const PageSide = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({collapsed: false});

    // 侧边栏
    const side = navigationList.map((menu) =>
        // todo 图片不知道如何设置
        <Menu.SubMenu key={menu.n} title={menu.t}>
            { menu.sl.map((sl) =>
                <Menu.Item key={sl.sn}>{sl.st}</Menu.Item>
            )}
        </Menu.SubMenu>
    );

    function onCollapse() {
        if (state.collapsed === false) {
            setState({collapsed: true});
        } else {
            setState({collapsed: false});
        }
    };

    function routeClick(evt: MenuInfo) {
        console.log("===" + evt.key);
        navigate(evt.key, {});
    }

    return (
        <Layout.Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
            <Logo>Flint</Logo>
            <Menu theme="dark" defaultSelectedKeys={['work/todo']} mode="inline" onClick={routeClick}>
                {side}
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