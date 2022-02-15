import {Breadcrumb, Button, Layout, Table} from "antd";
import axios from "axios";

export const UserList = () => {


    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values.account);
    //     // 网络请求
    //     // localStorage.setItem("uk", values.account);
    //     let url = "https://mine.ptest.cc/api/v1/mine/sign/in";
    //     let req = "{\"account\": \"18698581176\",\"password\": \"123456\"}";
    //
    //     axios.post(url, {
    //         account: '18698581176',
    //         password: '123456'
    //     }).then(function (response) {
    //         console.log(response);
    //         navigate("/m");
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    // };


    const columns = [
        {
            title: '用户ID',
            dataIndex: 'id',
        },
        {
            title: '中文名字',
            dataIndex: 'cn_name',
        },
        {
            title: '手机号码',
            dataIndex: 'phone',
        },
        {
            title: '英文名字',
            dataIndex: 'en_name',
        },
        {
            title: '用户状态',
            dataIndex: 'status',
        },
        {
            title: '注册时间',
            dataIndex: 'create_time',
        },
    ];

    const data = [
        {},
    ];

    return (
        <Layout.Content style={{background: '#fff'}}>
            <Breadcrumb style={{margin: '16px'}}>
                <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                <Breadcrumb.Item>用户管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: '16px', minHeight: 360}}>
                <Button type="primary" style={{marginBottom: "20px"}}>新增用户</Button>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                />
            </div>
        </Layout.Content>
    );
}