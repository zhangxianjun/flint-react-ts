import {Breadcrumb, Card, Divider, Layout, List, Space, Typography} from "antd";

export const Todo = () => {

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
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
  );
}