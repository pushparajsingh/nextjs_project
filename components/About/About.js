import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.scss";
import Image from "next/image";
import AboutusImg from "../../assets/images/aboutUs.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Slider from "react-slick";
import WebDesigning from "../../assets/images/webDesignWorkFlow.png";
import Title from "../Layout/Titles/Titles";

const About = () => {
  const customeSlider = useRef();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
  const series = [1, 2, 3, 4, 5, 6];
  return (
    <section className={styles.aboutusSec}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.aboutusImage}>
              <Image src={AboutusImg} alt="aboutUs" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.aboutContent}>
              <div className="themeTitle">
                <h4>who we are</h4>
              </div>
              <div className={styles.aboutHeadingBox}>
                <p>Yuvasoft Helps You to Grow Your Business and Build An Audience.</p>
              </div>
              <p className={styles.aboutMainPara}>
              Preeminent Full Stack Development Company
              </p>
              <p className={styles.aboutSubPara}>
              Yuvasoft Solutions Pvt Ltd is a global, software development company, dedicated to building innovative app solutions for Mobile and Web. We are a In-house team that cares deeply about creating great apps for our customers. Yuvasoft Solutions Pvt Ltd was established in January 2011 as a Web Project and Programme Development Company however due to the changing built environment and the growing needs of our Clients; it became necessary to broaden the services that could be provided by Yuvasoft, so as to offer multi-disciplinary under one banner, we now provide services in Project Management & Analysis, Project Architecture, Mobile Apps Development, Designs, Quality Assurance. 
              </p>
              <div className={styles.moreDetails}>
                <div className={styles.btnInner}>
                  <Button className={styles.btnPlay}>
                    <AiOutlineArrowRight />
                    <span className={styles.circleFirst}></span>
                    <span className={styles.circleSecond}></span>
                  </Button>
                </div>
                <span className={styles.viewMoreBtn}>View More</span>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className={styles.achievementSection}>
              <div className={styles.achievementcontainer}>
                <CountUp end={60} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />*
                        </h3>
                        <p>client Served</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp end={140} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />*
                        </h3>
                        <p>Project Completed</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp end={97} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />%
                        </h3>
                        <p>Project Succeses</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp end={250} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />M
                        </h3>
                        <p>revenue from client</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} className="aboutPageTitle">
            <Title
              value="Professional Team"
              span="Meet Our"
              subTitle="Leadership Team"
            />
            <p className={styles.titleParagraph}>
              We do everything with our core values of <span>honesty</span>, hard <span>work</span>, and <span>trust</span>.
            </p>
          </Col>
          <Col lg={4} md={4}>
            <div className={styles.whatweDoSliderControl}>
              <Button onClick={() => gotoNext()}>
                <HiOutlineArrowLeft />
              </Button>
              <Button onClick={() => gotoPrev()}>
                <HiOutlineArrowRight />
              </Button>
            </div>
          </Col>

          <Col lg={12} className={styles.whatweDoSlider}>
            <Slider {...settings} ref={customeSlider}>
              {series.map((item, index) => {
                return (
                  <div key={index}>
                    <div className={styles.weDoSliderBox}>
                      <div className={styles.weDoSliderImage}>
                        <Image src={WebDesigning} alt="WebDesigning" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
