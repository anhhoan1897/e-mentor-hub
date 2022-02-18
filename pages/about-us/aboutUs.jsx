import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Ic5 from "../../assets/images/ic5.png";
export default function AboutUs() {
  return (
    <>
      <title>Về chúng tôi-eMentorHub</title>
      <div className="site-content">
        <section className="about-welcome">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <div className="welcome-container p-top-30">
                  <h1 className="title">Lời chào từ eMentorHub</h1>
                  <div className="welcome-content">
                    <p style={{ margin: "0cm", background: "white" }}></p>
                    <p className="paragraph-content">
                      <span>
                        Xin chào! Nhiệm vụ của eMentorHub Việt Nam là cung cấp
                        một nền tảng cố vấn nhằm hỗ trợ người dùng{" "}
                        <span className="inline-welcome">phát triển </span>
                        các kĩ năng quan trọng và mở rộng mạng lưới quan hệ cho
                        sự phát triển bản thân và sự nghiệp, đặc biệt là trong
                        lĩnh vực Khoa học dữ liệu (Data Science) và Công nghệ
                        Marketing (Mar Tech).
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about-content">
          <Container className="p-top-80">
            <Row>
              <Col md={6}>
                <div className="about-content-item">
                  <div className="inner display-flex">
                    <div className="icon">
                      <Image src={Ic5} width="48px" height="48px" />
                    </div>
                    <div className="info">
                      <h3 className="title fz-20 cl-black fw-600">Sứ mệnh</h3>
                      <div className="content">
                        <p>
                          eMentorHub là nền tảng Mentoring có trụ sở tại Canada.
                          Sứ mệnh của chúng tôi là giúp tạo ra cơ hội trưởng
                          thành và phát triển trong lĩnh vực công nghệ và khoa
                          học dữ liệu, trên cả khía cạnh công việc chuyên môn
                          lẫn khía cạnh cá nhân cho người dùng.
                        </p>
                        <p>
                          Sự đột phá của eMentorHub nằm ở việc sử dụng công nghệ
                          tiên tiến để chọn lọc và kết nối các Mentors – Mentees
                          phù hợp với nhau theo từng giai đoạn phát triển của
                          mỗi Mentee, một cách dễ dàng và miễn phí với quy mô
                          toàn cầu.
                        </p>
                        <p>
                          Ngoài ra, eMentorHub còn chú trọng đến các hoạt động
                          mentoring nhằm:
                        </p>
                        <ul>
                          <li>Hỗ trợ và nâng đỡ các nhóm yếu thế.</li>
                          <li>
                            Tạo điều kiện cho phụ nữ phát triển bản thân và sự
                            nghiệp nhằm góp phần xoá bỏ “định kiến về giới”
                            trong lĩnh vực khoa học dữ liệu và công nghệ.
                          </li>
                          <li>
                            Giúp người dùng nâng cao sức khoẻ tinh thần và đi
                            tìm sự cân bằng trong cuộc sống hiện nay.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="about-content-item"
                  style={{ marginTop: "65px" }}
                >
                  hahaha2
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about-persons"></section>
      </div>
    </>
  );
}
