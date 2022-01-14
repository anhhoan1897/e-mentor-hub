import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mentee from "../images/mentee.png";
import mentor from "../images/mentor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
          <div className="content-container">
            <h1 className="title-form title-login">Xin chào từ eMentorHub</h1>
            <p>Chào mừng trở lại! Xin hãy đăng nhập vào tài khoản của bạn</p>
            <section className="options-container">
              <form onSubmit={handleSubmit(onSubmit)} className="authen-form">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Nhập Email của bạn..."
                  {...register("email")}
                  className="input-field"
                />
                <label>Mật khẩu</label>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu của bạn..."
                  {...register("password")}
                  className="input-field"
                />
                <input />
                <Link href="#">
                  <a>Quên mật khẩu</a>
                </Link>
                <button className="submit-authen-button">Đăng nhập</button>
                <span>
                  Chưa có tài khoản{" "}
                  <Link href="#">
                    <a>Đăng ký</a>
                  </Link>
                </span>
              </form>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
