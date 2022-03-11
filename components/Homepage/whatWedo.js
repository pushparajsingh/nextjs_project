import { Col, Container, Row } from 'react-bootstrap';
import Title from '../common/Titles/Titles'
import styles from './Homepage.module.css'
import Slider from "react-slick";
import Image from 'next/image'
import WebDesigning from '../../assets/images/webDesignWorkFlow.png'

const WhatWeDo = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (

        <>
            <div className={styles.whatWeDoWrapper}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Title
                                value="what we do"
                                span="what"
                                subTitle="do we do?"
                            />
                            <p className={styles.titleParagraph}>Our design and development team knows very well what it takes to successfully develop web products across multiple domains.</p>
                        </Col>
                        <Col lg={6}>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Slider {...settings}>
                                <div>
                                    <div className={styles.weDoSliderBox}>
                                        <div className={styles.weDoSliderImage}>
                                            <Image src={WebDesigning} alt="WebDesigning" />
                                        </div>
                                        <div className={styles.weDoInfoBox}>
                                            <div className={styles.weDoInfoInfoInner}>
                                                <h5>New Soft for Watch</h5>
                                                <p className={styles.portfolioCates}>Media Optimizations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default WhatWeDo;