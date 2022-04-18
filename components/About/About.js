import React, { useRef } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.scss";
import Image from 'next/image'
import AboutusImg from "../../assets/images/aboutUs.png"
import { AiOutlineArrowRight } from "react-icons/ai";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import Slider from "react-slick";
import WebDesigning from '../../assets/images/webDesignWorkFlow.png'
import Title from '../common/Titles/Titles';

const About = () => {
    const customeSlider = useRef();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        bool: true
    };
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }
    const series = [1, 2, 3, 4, 5, 6]
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
                            <div class="themeTitle">
                                <h4>who we are</h4>
                            </div>
                            <div className={styles.aboutHeadingBox}>
                                <p>We are on a Mission to Change Your View of SEO</p>
                            </div>
                            <p className={styles.aboutMainPara}>Onum is a values-driven SEO agency dedicated to empowering our customers.</p>
                            <p className={styles.aboutSubPara}>Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</p>
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
                    <Col lg={6}>
                        <Title
                            value="Professional Team"
                            span="Meet Our"
                            subTitle="Leadership Team"
                        />
                        <p className={styles.titleParagraph}>If we had a "secret sauce" it would be our awesome people. We have only professional team!</p>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.whatweDoSliderControl}>
                            <Button onClick={() => gotoNext()}><HiOutlineArrowLeft /></Button>
                            <Button onClick={() => gotoPrev()}><HiOutlineArrowRight /></Button>
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
                                )
                            })}

                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;