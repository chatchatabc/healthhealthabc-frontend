"use client";

import React, { useEffect } from "react";
import { Button, Form, Input, Alert } from "antd";
import { authLogin } from "@/domain/service/AuthService";

function LoginPage() {
  const [loading, setLoading] = React.useState(true);
  const [errorText, setErrorText] = React.useState<null | React.ReactNode>(
    null
  );

  const onFinish = async (values: any) => {
    setLoading(true);
    const loggedIn = await authLogin(values);
    if (loggedIn) window.location.href = "/";
    setLoading(false);
  };

  useEffect(() => {
    // Redirect user to home page if already logged in
    if (document.cookie.includes("token")) window.location.href = "/";
    setLoading(false);
  }, []);

  return (
    <main className="flex-1 grid items-center">
      <div className="mx-auto w-full max-w-md px-4">
        <h1 className="text-2xl text-center">Login Page</h1>
        {errorText && (
          <Alert
            className="mt-8 text-uppercase"
            message={errorText}
            type="error"
          />
        )}

        <Form
          className="mt-8"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Button
            className="block mx-auto"
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default LoginPage;
