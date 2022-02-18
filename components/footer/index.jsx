import React from "react";
import Image from "next/image";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Nav,
  Row,
} from "react-bootstrap";

import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import linkedin from "../../assets/images/linkedin.png";

export default function NavigationFooter() {
  return (
    <div className="navigation-footer-container">
      <div className="footer-top">
        <Container>
          <div className="inner">
            <Row>
              <Col md={6}>
                <p className="content">
                  Join eMentorHub today and grow with more confidence
                </p>
              </Col>
              <Col md={6}>
                <Form className="form-footer">
                  <FormGroup>
                    <FormControl className="footer-form" type="email" placeholder="Enter your email" />
                    <Button className="subcribe-btn">Submit</Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer-bottom m-top-50 m-bottom-30">
        <Container>
          <Row>
            <Col md={6}>
              <div className="logo-footer-container m-bottom-30">
                <Image
                  href="https://ementorhub.com/"
                  src="/logo.png"
                  width={170}
                  height={54}
                  className="logo-footer"
                  alt="logo"
                />
              </div>
              <div className="social-container">
                <div className="social-item">
                  <Image
                    href="https://www.facebook.com/ementorhub"
                    src={facebook}
                    width={16}
                    height={16}
                    alt="facebook"
                  />
                </div>
                <div className="social-item">
                  <Image
                    href="https://www.instagram.com/ementorhub/"
                    src={instagram}
                    width={16}
                    height={16}
                    alt="instagram"
                  />
                </div>
                <div className="social-item">
                  <Image
                    href="https://www.youtube.com/channel/UC4xVDfv_x_ZZ_uVUhHr6ing"
                    src={youtube}
                    width={16}
                    height={16}
                    alt="youtube"
                  />
                </div>
                <div className="social-item">
                  <Image
                    href="https://www.linkedin.com/company/ementorhub-vietnam"
                    src={linkedin}
                    width={16}
                    height={16}
                    alt="linkedin"
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-quicklinks">
                <div className="footer-navigation">
                  <Nav as="ul" className="menu-footer-top">
                    <Nav.Item as="li">
                      <Nav.Link href="#">Be a Mentor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Be a Mentee</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">FAQs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Contract Us</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="footer-navigation">
                  <Nav as="ul" className="menu-footer-bottom">
                    <Nav.Item as="li">
                      <Nav.Link href="#">Term of Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Privacy Policy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">Mentoring Case</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <p className="copy-right">Copyright 2021 © eMentorHub.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
