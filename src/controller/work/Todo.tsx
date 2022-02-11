import {Breadcrumb, Layout, List, Typography} from "antd";

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
              <List
                  header="我的任务"
                  bordered
                  dataSource={data}
                  renderItem={item => (
                      <List.Item>
                          <Typography.Text mark>[ITEM]</Typography.Text> {item}
                      </List.Item>
                  )}
              />
          </div>
      </Layout.Content>
  );
}