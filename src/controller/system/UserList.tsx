import {Breadcrumb, Layout, List, Table, Typography} from "antd";

export const UserList = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Cash Assets',
            // className: 'column-money',
            dataIndex: 'money',
            // align: 'right',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            money: '￥300,000.00',
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            money: '￥1,256,000.00',
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            money: '￥120,000.00',
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (
        <Layout.Content style={{background: '#fff'}}>
            <Breadcrumb style={{margin: '16px'}}>
                <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: '16px', minHeight: 360}}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                />
            </div>
        </Layout.Content>
    );
}