
import { React, useEffect, Fragment } from 'react'
import {
    Container,
    Nav,
    Navbar,
    Row,
    Col
} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../assets/images/yuvasoft-logo.png'
import styles from './Header.module.css'
import { useRouter } from 'next/router'
import FooterLogo from '../../../assets/images/yuvasoft-logo-white.png'
import Facebook from '../../../assets/images/footer/facebook.png'
import Linkedin from '../../../assets/images/footer/linkedin.png'
import Twitter from '../../../assets/images/footer/twitter.png'
import Instagram from '../../../assets/images/footer/instagram.png'
import { BiHome } from "react-icons/bi"
import { BsTelephoneOutbound } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Header = () => {
    const router = useRouter()

    const headerLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Team", path: "/teams" },
        { name: "Gallery", path: "/gallery" },
        { name: "Career", path: "/career" },
        { name: "Contact", path: "/contact" },
    ]
    useEffect(() => {
        document.addEventListener('scroll', function (e) {
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
        })
    }, [])

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
                                    <Link href="https://www.facebook.com/YuvaSoftSolutions">
                                        <a target="_blank" className={styles.facebook}>
                                            <FaFacebookF className={styles.icon} />
                                        </a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="https://twitter.com/yuvasoftech">
                                        <a target="_blank" className={styles.twitter}>
                                            <FaTwitter className={styles.icon}  />
                                        </a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="https://in.linkedin.com/company/yuvasoft-solutions-pvt-ltd">
                                        <a target="_blank" className={styles.linkedin}>
                                            <FaLinkedinIn className={styles.icon} />
                                        </a>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="https://www.instagram.com/yuvasoftsolutions/?hl=en">
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
                                {/* <div className={styles.menuBox}>
                                    <BiHome className={styles.Icon} />
                                    715-7th Floor, Pukhraj Corporate, Navlakha Square
                                </div> */}
                                <div className={styles.menuBox}>
                                    <FiMail className={styles.Icon} />
                                    info@yuvasoftech.com
                                </div>
                                <div className={styles.menuBox}>
                                    <BsTelephoneOutbound className={styles.Icon} />
                                    +91 (0) 999 3351929
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar className={styles.HeaderPrimary} expand="lg" id='headerNav'>
                <Container>
                    <Navbar.Brand href="/" className={styles.logo} passHref>
                        <Image src={Logo} className='img-fluid header-logo' alt="Yuvasoft Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            {headerLinks.map((item, index) => (
                                <Fragment key={index}> 
            
                                    <Link  href={item.path}><a className={`${router.pathname == item.path ? styles.active : "active"}`} passHref>{item.name}</a></Link>

                                 </Fragment>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;