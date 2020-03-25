import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import Context from '@src/libs/useContextReducer'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const LoginForm = () => {
  const [{ auth }, dispatch] = Context.Reducer()

  const onFinish = values => {
    console.log('Success:', values)
    dispatch({
      type: 'auth.login',
    })
    dispatch({
      type: 'auth.role',
      data: 'admin',
    })
    setTimeout(() => {
      message.success('登录成功')
    }, 800)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
    message.error('登录失败')
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <p>{JSON.stringify(auth)}</p>
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '输入用户名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
