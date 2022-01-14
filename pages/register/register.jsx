import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mentee from "../images/mentee.png";
import mentor from "../images/mentor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

function Register() {
  //   const [inputEmail, setInputEmail] = useState();
  //   const [passwordInput, setPasswordInput] = useState();
  //   const [reInputPassword, setReinputPassword] = useState();
  //   const [phoneNumber, setPhoneNumber] = useState();
  const [isChoose, setIsChoose] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
          {isChoose ? (
            <div className="content-container">
              <h1 className="title-form title-register">Đăng ký</h1>
              <form className="authen-form" onSubmit={handleSubmit(onSubmit)}>
                <section className="input-field register-field">
                  <label>Email</label>
                  <input
                    placeholder="Nhập email của bạn..."
                    type="email"
                    {...register("email")}
                    className="input-field"
                  />
                </section>
                <section className="input-field register-field">
                  <label>Mật khẩu</label>
                  <input
                    placeholder="Nhập mật khẩu của bạn..."
                    type="password"
                    // value={passwordInput}
                    // onChange={(e) => setInputEmail(e.target.value)}
                    {...register("password")}
                    className="input-field"
                  />
                </section>
                <section className="input-field register-field">
                  <label>Xác nhận mật khẩu</label>
                  <input
                    placeholder="Nhập lại mật khẩu..."
                    type="password"
                    // value={reInputPassword}
                    // onChange={(e) => setInputEmail(e.target.value)}
                    {...register("reInputPassword")}
                    className="input-field"
                  />
                </section>
                <section className="input-field register-field">
                  <label>Điện thoại</label>
                  <input
                    placeholder="Nhập số điện thoại của bạn..."
                    type="tel"
                    // value={inputEmail}
                    // onChange={(e) => setInputEmail(e.target.value)}
                    {...register("telephone")}
                    className="input-field"
                  />
                </section>
                <button className="submit-authen-button" type="submit">
                  Tạo tài khoản
                </button>
              </form>
            </div>
          ) : (
            <div className="content-container">
              <h1 className="title-form title-option">Chọn vai trò của bạn</h1>
              <p>
                Khám phá các kỹ năng mới, gặp gỡ những người cố vấn đầy nhiệt
                huyết và trở thành một phần của cộng đồng những người sáng tạo
                hữu ích nhất trên thế giới.
              </p>
              <ul className="choose-role">
                <li
                  className="choose-role-li"
                  onClick={() => setIsChoose(true)}
                >
                  <div className="choose-role-img">
                    <Image src={mentee} alt="mentee" />
                  </div>
                  <div className="choose-role-content">
                    <h4>Mentee</h4>
                    <p className="option-content">
                      Chương trình cố vấn 1-1 của chúng tôi cung cấp cho bạn sự
                      phù hợp tốt nhất để đưa ra ý tưởng của bạn.
                    </p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      alt=""
                      className="arrow"
                    />
                  </div>
                </li>
                <li
                  className="choose-role-li"
                  onClick={() => setIsChoose(true)}
                >
                  <div className="choose-role-img">
                    <Image src={mentor} alt="mentor" />
                  </div>
                  <div className="choose-role-content">
                    <h4>Mentor</h4>
                    <p className="option-content">
                      Chia sẻ kiến thức và kinh nghiệm của bạn với thế hệ tiếp
                      theo trong nền tảng cố vấn chất lượng cao của chúng tôi.
                    </p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      alt=""
                      className="arrow"
                    />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Register;
