import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cookie from 'react-cookies';
import { useRouter } from 'next/router'
// import mentee from "../../assets/images/mentee.png";
// import mentor from "../../assets/images/mentor.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Api from '../../api/api';
import { Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const schema = yup.object().shape({
  email: yup.string().required('Email can not be null').email("Invalid email format"),
  password: yup.string().required('Password can not be null')
               .min(8, 'Password has to at least 8 characters'),
              //  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'The password must contain at least one uppercase character, one lowercase character, one digit and one special character'),
  passwordConfirm: yup.string().required('Password confirm can not be null')
                      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  phone: yup.string().required('Phone number can not be null')
            .min(8, 'Phone has to at least 8 characters')
            .max(15, 'Phone can not contain more than 15 characters')
});

function Register() {
  // const [isChoose, setIsChoose] = useState(false);
  const router = useRouter()
  const [error, setError] = useState('');
  const [toggleModal, setToggleModal] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = async(values) => {
    try {
      const data = await Api.signup(values);
      cookie.save('token', data);
      setError('');
      setToggleModal(true);
      setTimeout(() => {setToggleModal(false)}, 3000);
      setTimeout(() => {router.push('/')}, 3000);
    }
    catch (err) {
      let data = err.response.data;
      let errorMessage = data.errors ? data.errors[0].errorMessage : data;
      setError(errorMessage);
      setTimeout(() => {setError('')}, 2000);
      console.error(errorMessage);
    }
  }

  return (
    <div className="authenicate-container">
      <Modal isOpen={toggleModal}>
        <ModalBody className='justify-content-center'>
          <div className="register-modal">
          <FontAwesomeIcon icon={faCheckCircle} size="4x" color="green"/><br/>
          ????ng k?? th??nh c??ng. Vui l??ng ki???m tra Email.
          </div>
        </ModalBody>
      </Modal>
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
          {/* {isChoose ? ( */}
            <div className="content-container register">
              <h1 className="title-form title-register">????ng k??</h1>
              <form className="authen-form" onSubmit={handleSubmit(onSubmit)}>
                <section className="input-field register-field">
                  <label>Email</label>
                  <input
                    placeholder="Nh???p email c???a b???n..."
                    type="email"
                    {...register("email")}
                    className="input-field input-validate"
                  />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </section>
                <section className="input-field register-field">
                  <label>M???t kh???u</label>
                  <input
                    placeholder="Nh???p m???t kh???u c???a b???n..."
                    type="password"
                    {...register("password")}
                    className="input-field input-validate"
                  />
                  {errors.password && <p className="error">{errors.password.message}</p>}
                </section>
                <section className="input-field register-field">
                  <label>X??c nh???n m???t kh???u</label>
                  <input
                    placeholder="Nh???p l???i m???t kh???u..."
                    type="password"
                    {...register("passwordConfirm")}
                    className="input-field input-validate"
                  />
                  {errors.passwordConfirm && <p className="error">{errors.passwordConfirm.message}</p>}
                </section>
                <section className="input-field register-field">
                  <label>??i???n tho???i</label>
                  <input
                    placeholder="Nh???p s??? ??i???n tho???i c???a b???n..."
                    type="number"
                    {...register("phone")}
                    className="input-field input-validate"
                  />
                  {errors.phone && <p className="error">{errors.phone.message}</p>}
                  <p className="error">{error}</p>
                </section>
                <button className="submit-authen-button" type="submit">
                  T???o t??i kho???n
                </button>
              </form>
            </div>
          {/* ) : (
            <div className="content-container register-role">
              <h1 className="title-form title-option">Ch???n vai tr?? c???a b???n</h1>
              <p>
                Kh??m ph?? c??c k??? n??ng m???i, g???p g??? nh???ng ng?????i c??? v???n ?????y nhi???t
                huy???t v?? tr??? th??nh m???t ph???n c???a c???ng ?????ng nh???ng ng?????i s??ng t???o
                h???u ??ch nh???t tr??n th??? gi???i.
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
                      Ch????ng tr??nh c??? v???n 1-1 c???a ch??ng t??i cung c???p cho b???n s???
                      ph?? h???p t???t nh???t ????? ????a ra ?? t?????ng c???a b???n.
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
                      Chia s??? ki???n th???c v?? kinh nghi???m c???a b???n v???i th??? h??? ti???p
                      theo trong n???n t???ng c??? v???n ch???t l?????ng cao c???a ch??ng t??i.
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
          )} */}
        </section>
      </div>
    </div>
  );
}

export default Register;
