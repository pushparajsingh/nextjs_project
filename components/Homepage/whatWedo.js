import React, { useRef } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Title from "../Layout/Titles/Titles";
import styles from "./Homepage.module.css";
import Slider from "react-slick";
import Image from "next/image";
import WebDesigning from "../../assets/images/webDesignWorkFlow.png";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import portfolioData from "../Utils/ourPortfolio";
const WhatWeDo = () => {
  const customeSlider = useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: "200px",
    // autoplay: true,
    autoplaySpeed: 1500,
    bool: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const series = [{ value: 1, Image: WebDesigning }, 1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className={styles.whatWeDoWrapper}>
        <Container>
          <Row>
            <Col lg={6} md={8}>
              <Title value="what we do" span="what" subTitle="we do?" />
              <p className={styles.titleParagraph}>
                Our design and development team knows very well what it takes to
                successfully develop web products across multiple domains.
              </p>
            </Col>
            <Col lg={6} md={4}>
              <div className={styles.whatweDoSliderControl}>
                <Button onClick={() => gotoNext()}>
                  <HiOutlineArrowLeft />
                </Button>
                <Button onClick={() => gotoPrev()}>
                  <HiOutlineArrowRight />
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className={styles.whatweDoSlider}>
              <Slider {...settings} ref={customeSlider}>
                {portfolioData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.weDoSliderBox}>
                        <div className={styles.weDoSliderImage}>
                          {/* <Image src={item.thumb} alt="WebDesigning" /> */}
                          <Image src={item.thumb} alt="WebDesigning" />
                        </div>
                        <div className={styles.weDoInfoBox}>
                          <div className={styles.weDoInfoInfoInner}>
                            <h5>{item.category}</h5>
                            <p className={styles.portfolioCates}>
                            {item.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default WhatWeDo;