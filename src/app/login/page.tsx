"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { Button, Form, Input, Alert } from "antd";
import { axiosAuthLogin } from "@/lib/axios/axiosAuth";

function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [errorText, setErrorText] = React.useState<null | React.ReactNode>(
    null
  );
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res = await axiosAuthLogin(values);
      console.log("Success:", values, res);

      // Save token in cookies
      document.cookie = `token=${res.data.token}; path=/; max-age=3600`;

      // Redirect to home page
      router.push("/");
    } catch (err) {
      const error = err as AxiosError;
      if (error.code === "ERR_BAD_REQUEST")
        setErrorText("Incorrect credentials");
      else {
        setErrorText("Connection timed out");
      }
      console.log("Error:", error);
    }
    setLoading(false);
  };

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
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default LoginPage;
