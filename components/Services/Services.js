import Head from "next/head"
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import Title from "../common/Titles/Titles";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import styles from "./Services.module.scss";
import Link from "next/link";
import Image from "next/image";
import serviceGraphic from "../../assets/images/serviceIcon/ruby-on-rails.svg";
import { ServiceIcon } from "../Utils/ourServices";
import portfolioData from "../Utils/ourPortfolio";

const ServicesPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        bool: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
        ]
    };
    return (
        <>
            <Head>
				<title>Yuvasoft Solutions - Services</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
            <section className={styles.serviceWrapper}>
                <Container className={styles.serviceHead}>
                    <Row className="justify-content-between align-items-end">
                        <Col md={5}>
                            <Title
                                value="Our Services"
                                span="Some of"
                                subTitle="Our Services & Skills"
                            />
                        </Col>
                        <Col md={6}>
                            <div className={styles.serviceHeadControls}>
                                <Button className="themeButton">
                                    <BsFillArrowLeftCircleFill className={styles.icon} />
                                </Button>
                                <Button className="themeButton">
                                    <BsFillArrowRightCircleFill className={styles.icon} />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={`${styles.serviceCategoryList}`}>
                                <Slider {...settings}>
                                    {ServiceIcon.map((value, index) => {
                                        return (
                                            <div key={index}>
                                                <Link href="#">
                                                    <a className={`${styles.activeTab} ${styles.inActiveTab}`}>
                                                        <span className={styles.inactiveIcon}>
                                                            <Image src={value.iconInactive} alt="service-icon" />
                                                        </span>
                                                        <span className={styles.activeIcon}>
                                                            <Image src={value.icon} alt="service-icon" />
                                                        </span>
                                                        <h4 className={styles.serviceTitle}>
                                                            {value.service}
                                                        </h4>
                                                    </a>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.serviceDetailWrapper}>
                <Container>
                    <div className={`${styles.serviceDetailBox} ${styles.activeBox}`}>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <Title span="Ruby" subTitle="on Rails" />
                                <p>
                                    Ruby on Rails, or simply Rails, is a web application framework
                                    written in Ruby under the MIT License. Rails is a
                                    model–view–controller (MVC) framework, providing default
                                    structures for a database, a web service, and web pages. It
                                    encourages and facilitates the use of web standards such as
                                    JSON or XML for data transfer, and HTML, CSS and JavaScript
                                    for display and user interfacing. In addition to MVC, Rails
                                    emphasizes the use of other well-known software engineering
                                    patterns and paradigms, including convention over
                                    configuration (CoC), don't repeat yourself (DRY), and the
                                    active record pattern In a default configuration, a model in
                                    the Ruby on Rails framework maps to a table in a database and
                                    to a Ruby file. For example, a model class User will usually
                                    be defined in the file 'user.rb' in the app/models directory,
                                    and linked to the table 'users' in the database. While
                                    developers are free to ignore this convention and choose
                                    differing names for their models, files, and database table,
                                    this is not common practice and is usually discouraged in
                                    accordance with the "convention-over-configuration"
                                    philosophy.
                                </p>
                            </Col>
                            <Col md={6} className="text-center">
                                <Image
                                    src={serviceGraphic}
                                    alt="services"
                                    width="250"
                                    height="250"
                                />
                            </Col>
                            <Col md={12}>
                                
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ServicesPage;
