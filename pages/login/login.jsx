import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("email"));
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="authenicate-container">
      <div className="left-side-bar">
        <h2 className="text-center">
          A powerful <br /> platform for{" "}
          <span>
            growth <br /> and mentorship{" "}
          </span>
          at <br /> your fingertips
        </h2>
      </div>
      <div className="right-side-user">
        <section className="options-container">
          <div className="logo-authen-container">
            <Link href="https://ementorhub.com/">
              <Image
                src="/logo.png"
                alt="hehe"
                width={240}
                height={78}
                className="logo authen-logo"
              />
            </Link>
          </div>
          <div className="content-container login">
            <h1 className="title-form title-login">Xin chào từ eMentorHub</h1>
            <p>Chào mừng trở lại! Xin hãy đăng nhập vào tài khoản của bạn</p>
            <section className="login-form-container">
              <form onSubmit={handleSubmit(onSubmit)} className="authen-form">
                <section className="input-field login-field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Nhập Email của bạn..."
                    {...register("email")}
                    className="input-field"
                  />
                </section>
                <section className="input-field login-field">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu của bạn..."
                    {...register("password")}
                    className="input-field"
                  />
                </section>
                  <Link href="#">
                    <a className="forgot-password">Quên mật khẩu</a>
                  </Link>
                <button className="submit-authen-button">Đăng nhập</button>
                <div className="register-direction">
                  <span>Chưa có tài khoản </span>
                  <Link href="#">
                    <a>Đăng ký</a>
                  </Link>
                </div>
              </form>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
