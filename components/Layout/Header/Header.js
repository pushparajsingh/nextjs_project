import { React, useEffect, Fragment } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/images/yuvasoft-logo.png";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { socialLinks } from "../../../constants";

const Header = () => {
  const router = useRouter();

  const headerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/teams" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      var header = document.getElementById("headerNav");
      var contentBanner = document.getElementById("contentBox");
      var sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        contentBanner.classList.add("afteFixedHeader");
      } else {
        header.classList.remove("sticky");
        contentBanner.classList.remove("afteFixedHeader");
      }
    });
  }, []);

  return (
    <div>
      <div className={styles.topHeader}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className={styles.topHeaderleft}>
                {/* <a href="#" className={styles.headerMenu}>About</a> */}
                <ul>
                  <li>
                    <Link href={socialLinks.facebook}>
                      <a target="_blank" className={styles.facebook}>
                        <FaFacebookF className={styles.icon} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={socialLinks.twitter}>
                      <a target="_blank" className={styles.twitter}>
                        <FaTwitter className={styles.icon} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={socialLinks.linkedin}>
                      <a target="_blank" className={styles.linkedin}>
                        <FaLinkedinIn className={styles.icon} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={socialLinks.instagram}>
                      <a target="_blank" className={styles.instagram}>
                        <FaInstagram className={styles.icon} />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={8}>
              <div className={styles.topHeaderRight}>
                <div className={styles.menuBox}>
                  <Link href="mailto:info@yuvasoftech.com">
                    <a>
                      <FiMail className={styles.Icon} />
                      info@yuvasoftech.com
                    </a>
                  </Link>
                </div>
                <div className={styles.menuBox}>
                  <Link href="tel:+91 (0) 999 3351929">
                    <a>
                      <BsTelephoneOutbound className={styles.Icon} />
                      +91 (0) 999 3351929
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar className={styles.HeaderPrimary} expand="lg" id="headerNav">
        <Container>
          <Link href="/">
            <a>
              <div className={`navbar-brand ${styles.logo}`}>
                <Image
                  src={Logo}
                  className="img-fluid header-logo"
                  alt="Yuvasoft Logo"
                />
              </div>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              {headerLinks.map((item, index) => (
                <Fragment key={index}>
                  <Link href={item.path}>
                    <a
                      className={`${
                        router.pathname == item.path ? styles.active : "active"
                      }`}
                      passHref
                    >
                      {item.name}
                    </a>
                  </Link>
                </Fragment>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
