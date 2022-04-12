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
import {serviceDetail} from "../Utils/servicesDetails"

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
                        {serviceDetail.slice(0, 1).map((service, index) => {
                            return (
                                <Row className="align-items-center" key={index}>
                                    <Col md={6}>
                                        <Title span={service.span} subTitle={service.subtitle} />
                                        <p>{service.details}</p>
                                    </Col>
                                    <Col md={6} className="text-center">
                                        <Image
                                            src={service.image}
                                            alt="services"
                                            width="250"
                                            height="250"
                                        />
                                    </Col>
                                    <Col md={12}>
                                        
                                    </Col>
                                </Row>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ServicesPage;
