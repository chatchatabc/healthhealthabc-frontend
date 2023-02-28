"use client";

import React from "react";
import { Button, Form, Input, Alert } from "antd";
import { axiosAuthRegister } from "../lib/axios/axiosAuth";

function RegisterPage() {
  const [successText, setSuccessText] = React.useState<null | React.ReactNode>(
    null
  );
  const [form] = Form.useForm();

  async function onFinish(values: any) {
    const res = await axiosAuthRegister(values);
    setSuccessText(
      <span>
        <b className="capitalize">{values.username}</b> you are now successfully
        registered!
      </span>
    );
    form.resetFields();
    console.log("Success:", values, res);
  }

  return (
    <main className="flex-1 grid place-items-center">
      <div className="mx-auto">
        <h1 className="text-2xl text-center">Register Page</h1>
        {successText && (
          <Alert
            className="mt-8 text-uppercase"
            message={successText}
            type="success"
          />
        )}

        <Form
          className="mt-8"
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          style={{ width: "400px" }}
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          {/* Username */}
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ offset: 19 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}

export default RegisterPage;
