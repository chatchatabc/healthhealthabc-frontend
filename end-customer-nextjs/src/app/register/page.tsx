"use client";

import React from "react";
import { Button, Form, Input } from "antd";
import { authRegister } from "@/domain/service/AuthService";

function RegisterPage() {
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();

  async function onFinish(values: any) {
    setLoading(true);

    const isRegistered = await authRegister(values);

    if (isRegistered) {
      form.resetFields();
    }

    setLoading(false);
  }

  return (
    <main className="flex-1 grid items-center">
      <div className="mx-auto w-full max-w-md px-4">
        <h1 className="text-2xl text-center">Register Page</h1>

        <Form
          className="mt-8"
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
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
          <Button
            className="mx-auto block"
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default RegisterPage;
