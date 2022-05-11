import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Layout/Titles/Titles";
import styles from "./Homepage.module.css";
import Slider from "react-slick";
import Image from "next/image";
import IndianAchivement from "../../assets/images/IndianAchivement.svg";
import IAF from "../../assets/images/IAF.svg";
import IAA from "../../assets/images/IAA.svg";

const Achievements = () => {
  const customeSlider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    bool: true,
    autoplay: true,
    autoplaySpeed: 1500,
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
  // const gotoNext = () => {
  //     customeSlider.current.slickNext()
  // }

  // const gotoPrev = () => {
  //     customeSlider.current.slickPrev()
  // }
  const series = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className={styles.awardsSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.themeTitleCenter}>
                <Title
                  value="Achievements"
                  span="Awards"
                  subTitle="& Achievements"
                />
              </div>
            </Col>
            <Col lg={12} className={styles.awardsSlider}>
              <Slider {...settings} ref={customeSlider}>
                {/* {series.map((item, index) => {
                                    return ( */}
                {/* <div key={index}> */}
                <div className={styles.awardsSliderBox}>
                  <div className={styles.awardsSliderImage}>
                    <Image src={IndianAchivement} alt="IndianAchivement" />
                  </div>
                </div>
                <div className={styles.awardsSliderBox}>
                  <div className={styles.awardsSliderImage}>
                    <Image src={IAF} alt="IAF" />
                  </div>
                </div>
                <div className={styles.awardsSliderBox}>
                  <div className={styles.awardsSliderImage}>
                    <Image src={IAA} alt="IAA" />
                  </div>
                </div>
                <div className={styles.awardsSliderBox}>
                  <div className={styles.awardsSliderImage}>
                    <Image src={IAA} alt="IAA" />
                  </div>
                </div>
                <div className={styles.awardsSliderBox}>
                  <div className={styles.awardsSliderImage}>
                    <Image src={IAA} alt="IAA" />
                  </div>
                </div>
                <div className={styles.awardsSliderBox}>
                  <div className={styles.awardsSliderImage}>
                    <Image src={IAA} alt="IAA" />
                  </div>
                </div>
                {/* </div> */}
                {/* )
                                })} */}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Achievements;
