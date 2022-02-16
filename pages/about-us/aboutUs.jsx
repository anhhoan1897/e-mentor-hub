import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
        <section className="about-content"></section>
        <section className="about-persons"></section>
      </div>
    </>
  );
}
