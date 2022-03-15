import React, { useRef } from 'react'
import styles from './Homepage.module.css'
import Title from '../common/Titles/Titles';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Slider from "react-slick";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import Image from 'next/image'
import ClientProfile from '../../assets/images/ClientProfile.svg'
import QuoteSign from '../../assets/images/right-quote-sign.svg'

const ClientTestimonial = () => {
    const customeSlider = useRef();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        bool: true
    };
    const gotoNext = () => {
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }
    const series = [1, 2, 3]
    return (
        <>
            <div className={styles.testimonialWrapper}>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className={styles.clientTestimonialTitle}>
                                <Title
                                    value="CLIENT’S REVIEW"
                                    subTitle="Clients Testimonials"
                                />
                            </div>
                            <div className={styles.clientTestimonialSliderControl}>
                                <Button onClick={() => gotoNext()}><HiOutlineArrowLeft /></Button>
                                <Button onClick={() => gotoPrev()}><HiOutlineArrowRight /></Button>
                            </div>
                        </Col>
                        <Col lg={8} className={styles.clientTestimonialSlider}>
                            <Slider {...settings} ref={customeSlider}>
                                {series.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Card className={styles.clientTestimonialCard}>
                                                <Card.Body>
                                                    <div className={styles.testimonialCardHeader}>
                                                        <div className={styles.clientProfileBox}>
                                                            <div className={styles.clientProfileImg}>
                                                                <Image src={ClientProfile} alt="ClientProfile" className="img-fluid" />
                                                            </div>
                                                            <div className={styles.clientDetail}>
                                                                <h5>Mathias Muleme Ssena</h5>
                                                                <p>Canada</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.quoteImgBox}>
                                                            <Image src={QuoteSign} className='img-fluid' alt="quote-sign" />
                                                        </div>
                                                    </div>
                                                    <div className={styles.clientFeedbackBox}>
                                                        It was great working with YuvaSoft. They are very knowledgeable with Rails and they always checks back to make sure that the work done was satisfactory. A pleasure to work with them and I will certainly hire them for additional work.
                                                    </div>
                                                </Card.Body>
                                            </Card>
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
export default ClientTestimonial;
