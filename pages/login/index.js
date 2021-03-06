import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Api from '../../api/api';
import cookie from 'react-cookies';
import { useRouter } from 'next/router'

const schema = yup.object().shape({
  email: yup.string().required('Email can not be null').email("Invalid email format"),
  password: yup.string().required('Password can not be null')
               .min(8, 'Password has to at least 8 characters'),
              //  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'The password must contain at least one uppercase character, one lowercase character, one digit and one special character'),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  const router = useRouter()
  const [error, setError] = useState('');

  const onSubmit = async (values) => {
    try {
      const data = await Api.login(values);
      cookie.save('token', data);
      setError('');
      router.push('/update-mentee');
    } catch (err) {
      let data = err.response.data;
      let errorMessage = data.errors ? data.errors[0].errorMessage : data;
      setError(errorMessage);
      setTimeout(() => {setError('')}, 2000);
    }
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
            <h1 className="title-form title-login">Xin ch??o t??? eMentorHub</h1>
            <p>Ch??o m???ng tr??? l???i! Xin h??y ????ng nh???p v??o t??i kho???n c???a b???n</p>
            <section className="login-form-container">
              <form onSubmit={handleSubmit(onSubmit)} className="authen-form">
                <section className="input-field login-field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Nh???p Email c???a b???n..."
                    {...register("email")}
                    className="input-field input-validate"
                  />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </section>
                <section className="input-field login-field">
                  <label>M???t kh???u</label>
                  <input
                    type="password"
                    placeholder="Nh???p m???t kh???u c???a b???n..."
                    {...register("password")}
                    className="input-field input-validate"
                  />
                  {errors.password && <p className="error">{errors.password.message}</p>}
                  <p className="error">{error}</p>
                </section>
                  <Link href="#">
                    <a className="forgot-password">Qu??n m???t kh???u</a>
                  </Link>
                <button className="submit-authen-button">????ng nh???p</button>
                <div className="register-direction">
                  <span>Ch??a c?? t??i kho???n </span>
                  <Link href="#">
                    <a>????ng k??</a>
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
