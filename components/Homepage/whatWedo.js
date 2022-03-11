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
    const series = [1,2,3,4,5,6]
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
                                {series.map((item,index) => {
                                    return (
                                        <div key={index}>
                                            <div className={styles.weDoSliderBox}>
                                                <div className={styles.weDoSliderImage}>
                                                    <Image src={WebDesigning} alt="WebDesigning" />
                                                </div>
                                                <div className={styles.weDoInfoBox}>
                                                    <div className={styles.weDoInfoInfoInner}>
                                                        <h5>Web Design</h5>
                                                        <p className={styles.portfolioCates}>The web is the most popular and far-reaching application...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default WhatWeDo;