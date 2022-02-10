import * as React from 'react';
import styled from "@emotion/styled";
import {Button, Card, Col, Form, Input, Row} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import FormItemLabel from "antd/es/form/FormItemLabel";
import Title from "antd/es/typography/Title";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Login({name, enthusiasmLevel = 1}: Props) {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values.account);
    };

    return (
        <Body>
            <Row style={{background: "#EEEEEE", height: "100vh"}} justify={"center"} align={"middle"}>
                <Col span={5}>
                    <Container>
                        <Title level={4} style={{marginTop:"15px", textAlign: "center"}}>Flint Admin</Title>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            style={{marginTop:"25px"}}
                        >
                            <Form.Item
                                name="account"
                                rules={[{required: true, message: '请输入账号！'}]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="账号"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: '请输入密码！'}]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined/>}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{width: "100%"}}>登录</Button>
                            </Form.Item>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Body>
    );
}

export default Login;

const Body = styled.div`
  background-color: #EEEEEE;
  height: 100vh;
`;

const Container = styled.div`
  border-radius: 8px;
  padding: 10px;
  background-color: #FFFFFF;
  width: 100%;
`;