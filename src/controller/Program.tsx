import {Breadcrumb, Card, Divider, Layout, List, Space, Typography} from "antd";

export const Program = () => {
    return (
      <Layout.Content style={{background: '#fff'}}>
          <Breadcrumb style={{margin: '16px'}}>
              <Breadcrumb.Item>我的工作</Breadcrumb.Item>
              <Breadcrumb.Item>参与项目</Breadcrumb.Item>
          </Breadcrumb>
      </Layout.Content>
  );
}