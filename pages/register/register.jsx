import React from "react";
import Image from "next/image";
import Link from "next/link";
import mentee from "../images/mentee.png";
import mentor from "../images/mentor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
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
            <h1 className="title-login">Chọn vai trò của bạn</h1>
            <p>
              Khám phá các kỹ năng mới, gặp gỡ những người cố vấn đầy nhiệt
              huyết và trở thành một phần của cộng đồng những người sáng tạo hữu
              ích nhất trên thế giới.
            </p>
            <ul className="choose-role">
              <li className="choose-role-li">
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
              <li className="choose-role-li">
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
        </section>
      </div>
    </div>
  );
}
