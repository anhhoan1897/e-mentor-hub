import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonGroup,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  ToggleButton,
} from "react-bootstrap";

const languages = [
  { name: "EN", value: "en" },
  { name: "VN", value: "vn" },
];
export default function NavigationHeader() {
  const [checked, setChecked] = useState(false);
  const [languageValue, setLanguageValue] = useState("vn");
  // console.log(languageValue);
  return (
    <Navbar
      variant="light"
      bg="light"
      fixed="top"
      className="navigation-header-container"
    >
      <Container>
        <Image
          href="https://ementorhub.com/"
          src="/logo.png"
          width={240}
          height={78}
          className="logo"
        />
        <Nav className="me-auto nav-menu-items">
          <NavDropdown title="Vai trò" id="collasible-nav-dropdown">
            <NavDropdown.Item>Mentor</NavDropdown.Item>
            <NavDropdown.Item>Mentee</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Về chúng tôi</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link href="#">FAQs</Nav.Link>
          <Nav.Link href="#">Tuyển dụng</Nav.Link>
          <Nav.Link href="#">Liên hệ</Nav.Link>
        </Nav>
        <Nav className="nav-menu-buttons">
          <button className="menu-button sign-up">
            <Link href="/register">
              <a>Đăng kí</a>
            </Link>
          </button>
          <button className="menu-button sign-in">Đăng nhập</button>
        </Nav>
        <div className="search-button">
          <FontAwesomeIcon icon={faSearch} alt="search" />
        </div>
        <ButtonGroup>
          {languages.map((language, idx) => (
            <ToggleButton
              key={idx}
              id={`language-${idx}`}
              type="radio"
              variant={idx % 1 ? "outline-success" : "outline-danger"}
              value={language.value}
              checked={languageValue === language.value}
              onChange={(e) => setLanguageValue(e.currentTarget.value)}
              className="language-option"
            >
              {language.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}
