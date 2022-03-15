import { React } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../Titles/Titles';

import FooterLogo from '../../../assets/images/yuvasoft-logo-white.png'
import Facebook from '../../../assets/images/footer/facebook.png'
import Linkedin from '../../../assets/images/footer/linkedin.png'
import Twitter from '../../../assets/images/footer/twitter.png'
import Instagram from '../../../assets/images/footer/instagram.png'
import Ratings from '../../../assets/images/footer/ratings.png'
import upworkLogo from '../../../assets/images/footer/upwork-logo.png'
import clutchLogo from '../../../assets/images/footer/clutch-logo.png'
import freelancerLogo from '../../../assets/images/footer/freelancer-logo.png'

import { BiHome } from "react-icons/bi"
import { BsTelephoneOutbound } from "react-icons/bs"
import { FiMail } from "react-icons/fi"

const Footer = () => {
    return (
        <section>
            <div className={styles.reviewsWrapper}>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <Title />
                        </Col>
                        <Col lg={9}>
                            <Row>
                                <Col>
                                    <Card className={styles.reviewCard}>
                                        <div className={styles.reviewLogo}>
                                            <Image
                                                src={upworkLogo}
                                                alt="Review"
                                                className='img-fluid review-logo'
                                            />
                                        </div>
                                        <div className={styles.reviewContent}>
                                            <h5 className={styles.title}>Reviews</h5>
                                            <h4 className={styles.rating}>5/5</h4>
                                            <Image
                                                src={Ratings}
                                                alt="stars"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className={styles.reviewCard}>
                                        <div className={styles.reviewLogo}>
                                            <Image
                                                src={clutchLogo}
                                                alt="Review"
                                                className='img-fluid review-logo'
                                            />
                                        </div>
                                        <div className={styles.reviewContent}>
                                            <h5 className={styles.title}>Reviews</h5>
                                            <h4 className={styles.rating}>4.9/5</h4>
                                            <Image
                                                src={Ratings}
                                                alt="stars"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className={styles.reviewCard}>
                                        <div className={styles.reviewLogo}>
                                            <Image
                                                src={freelancerLogo}
                                                alt="Review"
                                                className='img-fluid review-logo'
                                            />
                                        </div>
                                        <div className={styles.reviewContent}>
                                            <h5 className={styles.title}>Reviews</h5>
                                            <h4 className={styles.rating}>4.4/5</h4>
                                            <Image
                                                src={Ratings}
                                                alt="stars"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className={styles.footerWrapper}>
                <div className={styles.footerShapeTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                    </svg>
                </div>
                <Container>
                    <div className={styles.footerLogoBox}>
                        <Link href="/">
                            <a>
                                <Image
                                    src={FooterLogo}
                                    alt="Logo"
                                    className='img-fluid'
                                />
                            </a>
                        </Link>
                    </div>
                    <Row>
                        <Col md={12}>
                            <ul className={styles.addressList}>
                                <li>
                                    <BiHome className={styles.Icon} />
                                    <span>715-7th Floor, Pukhraj Corporate, Navlakha Square, Indore(MP)-452001, INDIA.</span>
                                    <h4 className={styles.addressTitle}>Our Address</h4>
                                </li>
                                <li>
                                    <FiMail className={styles.Icon} />
                                    <span>info@yuvasoftech.com</span>
                                    <h4 className={styles.addressTitle}>Our Mailbox</h4>
                                </li>
                                <li>
                                    <BsTelephoneOutbound className={styles.Icon} />
                                    <span>+91 (0) 731 4227200 <br /> +91 (0) 999 3351929</span>
                                    <h4 className={styles.addressTitle}>Our Phone</h4>
                                </li>
                            </ul>
                            <ul className={styles.footerMenuList}>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                    <Link href="http://www.yuvasoftech.com/about">
                                        <a target="_blank">About</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Services</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Portfolio</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Team</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Career</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Contact</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                            </ul>
                            <p className={styles.copyright}>
                                © 2017 Yuvasoft Solutions PVT. LTD. | All Rights Reserved
                            </p>
                            <ul className={styles.footerSocials}>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Image
                                                src={Facebook}
                                                alt="Icon"
                                                className='img-fluid'
                                            />
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a>
                                            <Image
                                                src={Twitter}
                                                alt="Icon"
                                                className='img-fluid'
                                            />
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a>
                                            <Image
                                                src={Linkedin}
                                                alt="Icon"
                                                className='img-fluid'
                                            />
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a>
                                            <Image
                                                src={Instagram}
                                                alt="Icon"
                                                className='img-fluid'
                                            />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    )
}

export default Footer;