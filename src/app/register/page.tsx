"use client";

import React from "react";
import { Button, Form, Input, Alert } from "antd";
import { axiosAuthRegister } from "@/lib/axios/axiosAuth";
import { AxiosError } from "axios";

function RegisterPage() {
  const [loading, setLoading] = React.useState(false);
  const [successText, setSuccessText] = React.useState<null | React.ReactNode>(
    null
  );
  const [errorText, setErrorText] = React.useState<null | React.ReactNode>(
    null
  );
  const [form] = Form.useForm();

  async function onFinish(values: any) {
    setLoading(true);
    try {
      const res = await axiosAuthRegister(values);
      setSuccessText(
        <span>
          <b>{values.username}</b> you are now successfully registered!
        </span>
      );
      setErrorText(null);
      form.resetFields();
      console.log("Success:", values, res);
    } catch (err) {
      const error = err as AxiosError;
      const errorResponse = error.response?.data ?? ({} as any);
      const errorValue = errorResponse.errorValue ?? "Test";

      console.log("Error:", error);
      setSuccessText(null);
      setErrorText(
        <span>
          <b>{errorValue}</b> is already been taken!
        </span>
      );
    }
    setLoading(false);
  }

  return (
    <main className="flex-1 grid items-center">
      <div className="mx-auto w-full max-w-md px-4">
        <h1 className="text-2xl text-center">Register Page</h1>
        {successText && (
          <Alert
            className="mt-8 text-uppercase"
            message={successText}
            type="success"
          />
        )}
        {errorText && (
          <Alert
            className="mt-8 text-uppercase"
            message={errorText}
            type="error"
          />
        )}

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
