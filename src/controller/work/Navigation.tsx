import {Breadcrumb, Card, Layout, Space} from "antd";

export const Navigation = () => {
    return (
      <Layout.Content style={{background: '#fff'}}>
          <Breadcrumb style={{margin: '16px'}}>
              <Breadcrumb.Item>我的工作</Breadcrumb.Item>
              <Breadcrumb.Item>外链导航</Breadcrumb.Item>
          </Breadcrumb>

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
  );
}