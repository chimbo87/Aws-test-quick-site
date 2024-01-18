import React, { useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const showToast = () => {
    toast.success("Welcome Tinashe", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  const showLoginFail = () => {
    toast.error("Wrong password or email", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const fakeEmail = "test@example.com";
    const fakePassword = "12345";

    if (email === fakeEmail && password === fakePassword) {
      navigate("/dashboard");
      showToast();
    } else {
      showLoginFail();
    }
  };
  return (
    <div id="loginPage">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        id="theLoginPageBoxForm"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <div id="formInput">
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder=" Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <div id="formInput">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <div id="forgetPassrwd">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot"
              href="#"
              onClick={() => {
                navigate("/forgetpassword");
              }}
            >
              Forgot password
            </a>
          </div>
        </Form.Item>
        <Form.Item>
          <div id="loginButtonWrapper">
            <Button
              htmlType="submit"
              className="login-form-button"
              onClick={() => {
                handleLogin();
              }}
            >
              Log in
            </Button>
            <div id="registerNowLink">
              <p>
                Dont have an account ?{" "}
                <a
                  href="#"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  register now
                </a>
              </p>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
