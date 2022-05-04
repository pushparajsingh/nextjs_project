import { React } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import Title from "../Titles/Titles";
import { RatingCards } from "../../Utils/ourRatings";
import Slider from "react-slick";
import FooterLogo from "../../../assets/images/yuvasoft-logo-white.png";
import { BiHome } from "react-icons/bi";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { socialLinks } from "../../../constants";

const Footer = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplaySpeed: 500,
        },
      },
    ],
  };
  return (
    <section>
      {router?.pathname !== "/admin/login" && (
        <div className={styles.reviewsWrapper}>
          <Container>
            <Row className="align-items-center">
              <Col lg={12} xl={3}>
                <Title value="Ratings" span="Our" subTitle="Reviews" />
              </Col>
              <Col lg={12} xl={9}>
                <Row>
                  <Slider {...settings} className={styles.reviewCardSlider}>
                    {RatingCards &&
                      RatingCards.map((value, index) => {
                        return (
                          <Col md={6} lg={4} key={index}>
                            <Card className={styles.reviewCard}>
                              <div className={styles.reviewLogo}>
                                <Image
                                  src={value.icon}
                                  alt={value.icon}
                                  className="img-fluid review-logo"
                                />
                              </div>
                              <div className={styles.reviewContent}>
                                <h5 className={styles.title}>{value.title}</h5>
                                <h4 className={styles.rating}>
                                  {value.rating}
                                </h4>
                                <Image
                                  src={value.stars}
                                  alt="stars"
                                  className="img-fluid"
                                />
                              </div>
                            </Card>
                          </Col>
                        );
                      })}
                  </Slider>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      <section className={styles.footerWrapper}>
        {/* <div className={styles.footerShapeTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                    </svg>
                </div> */}
        <Container>
          <div className={styles.footerLogoBox}>
            <Link href="/">
              <a>
                <Image src={FooterLogo} alt="Logo" className="img-fluid" />
              </a>
            </Link>
          </div>
          <Row>
            <Col md={12}>
              <ul className={styles.addressList}>
                <li>
                  <BiHome className={styles.Icon} />
                  <span>
                    715-7th Floor, Pukhraj Corporate, Navlakha Square,
                    Indore(MP)-452001, INDIA.
                  </span>
                  <h4 className={styles.addressTitle}>Our Address</h4>
                </li>
                <li>
                  <FiMail className={styles.Icon} />
                  <Link href="mailto:info@yuvasoftech.com">
                    info@yuvasoftech.com
                  </Link>
                  <h4 className={styles.addressTitle}>Our Mailbox</h4>
                </li>
                <li>
                  <BsTelephoneOutbound className={styles.Icon} />
                  <span>
                    <Link href="tel:+91 (0) 731 4227200">
                      +91 (0) 731 4227200
                    </Link>
                    <br />
                    <Link href="tel:+91 (0) 999 3351929">
                      +91 (0) 999 3351929
                    </Link>
                  </span>
                  <h4 className={styles.addressTitle}>Our Phone</h4>
                </li>
              </ul>
              <ul className={styles.footerMenuList}>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                  <Link href="/services">
                    <a>Services</a>
                  </Link>
                  <Link href="/portfolio">
                    <a>Portfolio</a>
                  </Link>
                  <Link href="/teams">
                    <a>Team</a>
                  </Link>
                  <Link href="/gallery">
                    <a>Gallery</a>
                  </Link>
                  <Link href="/career">
                    <a>Career</a>
                  </Link>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                  <Link href="/">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
              <p className={styles.copyright}>
                &#169; 2021 Yuvasoft Solutions PVT. LTD. | All Rights Reserved
              </p>
              <ul className={styles.footerSocials}>
                <li>
                  <Link href={socialLinks.facebook}>
                    <a target="_blank" className={styles.facebook}>
                      <FaFacebookF className={styles.icon} />
                    </a>
                  </Link>
                  <Link href={socialLinks.twitter}>
                    <a target="_blank" className={styles.twitter}>
                      <FaTwitter className={styles.icon} />
                    </a>
                  </Link>
                  <Link href={socialLinks.linkedin}>
                    <a target="_blank" className={styles.linkedin}>
                      <FaLinkedinIn className={styles.icon} />
                    </a>
                  </Link>
                  <Link href={socialLinks.instagram}>
                    <a target="_blank" className={styles.instagram}>
                      <FaInstagram className={styles.icon} />
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Footer;
