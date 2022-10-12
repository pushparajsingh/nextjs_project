import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import Title from "../Layout/Titles/Titles";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import styles from "./Services.module.scss";
import Image from "next/image";
import { ServiceIcon, serviceDetail } from "../Utils/ourServices";

const ServicesPage = () => {
  const [selectOption, setSelectOption] = useState(ServiceIcon[0].service);
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.serviceWrapper}>
        <Container className={styles.serviceHead}>
          <Row className="justify-content-between align-items-end">
            <Col md={5} data-aos="fade-right" data-aos-duration="1000">
              <Title
                value="Our Services"
                span="Some of"
                subTitle="Our Services & Skills"
              />
            </Col>
            <Col md={6} data-aos="fade-left" data-aos-duration="2000">
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
          <Row data-aos="fade-up" data-aos-duration="3000">
            <Col md={12}>
              <div className={`${styles.serviceCategoryList}`}>
                <Slider {...settings}>
                  {ServiceIcon.map((value, index) => {
                    return (
                      <div key={index}>
                        <div
                          className={`${
                            selectOption == value.service
                              ? styles.activeTab
                              : ""
                          } ${styles.serviceIconTab}`}
                          onClick={() => setSelectOption(value.service)}
                        >
                          <span className={styles.inactiveIcon}>
                            <Image
                              src={value.iconInactive}
                              alt="service-icon"
                            />
                          </span>
                          <span className={styles.activeIcon}>
                            <Image src={value.icon} alt="service-icon" />
                          </span>
                          <h4 className={styles.serviceTitle}>
                            {value.service}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.serviceDetailWrapper}>
        <Container>
          {serviceDetail?.map((value, index) => {
            if (selectOption === value.service) {
              return (
                <div
                  className={`${styles.serviceDetailBox} ${styles.activeBox}`}
                >
                  <Row className="align-items-center" key={index}>
                    <Col md={6}>
                      <Title
                        span={value.span}
                        value={value.value}
                        subTitle={value.subtitle}
                      />
                      <p
                        dangerouslySetInnerHTML={{ __html: value.details }}
                      ></p>
                    </Col>
                    <Col md={6} className="text-center">
                      <Image src={value.image} alt="services" />
                    </Col>
                    <Col md={12}></Col>
                  </Row>
                </div>
              );
            } else {
              return null;
            }
          })}
        </Container>
      </section>
    </>
  );
};

export default ServicesPage;
