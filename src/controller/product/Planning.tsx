import {Breadcrumb, Layout} from "antd";

export const Planning = () => {
    return (
      <Layout.Content style={{background: '#fff'}}>
          <Breadcrumb style={{margin: '16px'}}>
              <Breadcrumb.Item>产品管理</Breadcrumb.Item>
              <Breadcrumb.Item>产品规划</Breadcrumb.Item>
          </Breadcrumb>
      </Layout.Content>
  );
}