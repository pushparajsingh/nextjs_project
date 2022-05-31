import React, { useEffect, useRef, useState } from "react";
import styles from "./Homepage.module.css";
import Title from "../Layout/Titles/Titles";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import QuoteSign from "../../assets/images/right-quote-sign.svg";
import { testimonials } from "../Utils/ourTestimonials";
import { useSelector, useDispatch } from "react-redux";
import { clientPageall } from "../../redux/Clientstetimonials/Client.action"
import client1 from "../../assets/images/homepage/client1.png"



const ClientTestimonial = () => {
  const dispatch = useDispatch();
  const [pageno, setpageno] = useState(1);
  const { pageallLoading, pageall } = useSelector((state) => ({
    pageall: state?.client?.pageall,
    pageallLoading: state?.client?.pageallLoading,
  }));


  useEffect(() => {
    dispatch(clientPageall(pageno))
  }, [])


  const customeSlider = useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    bool: true,
    autoplay: true,
    autoplaySpeed: 1500,
    bool: true,
  };
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const series = [1, 2, 3];
  return (
    <>
      <div className={styles.testimonialWrapper}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className={styles.clientTestimonialHeader}>
                <div className={styles.clientTestimonialTitle}>
                  <Title value="CLIENTS REVIEW" subTitle="Clients Testimonials" />
                </div>
                <div className={styles.clientTestimonialSliderControl}>
                  <Button onClick={() => gotoNext()}>
                    <HiOutlineArrowLeft />
                  </Button>
                  <Button onClick={() => gotoPrev()}>
                    <HiOutlineArrowRight />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={8} className={styles.clientTestimonialSlider}>
              <Slider {...settings} ref={customeSlider}>
                {pageall?.map((review, index) => {
                  return (
                    <div key={index}>
                      <Card className={styles.clientTestimonialCard}>
                        <Card.Body>
                          <div className={styles.testimonialCardHeader}>
                            <div className={styles.clientProfileBox}>
                              <div className={styles.clientProfileImg}>
                                <Image
                                  src={client1}
                                  alt="ClientProfile"
                                  className="img-fluid"
                                />
                              </div>
                              <div className={styles.clientDetail}>
                                <h5>{review.name}</h5>
                                <p>{review.city}</p>
                              </div>
                            </div>
                            <div className={styles.quoteImgBox}>
                              <Image
                                src={QuoteSign}
                                className="img-fluid"
                                alt="quote-sign"
                              />
                            </div>
                          </div>
                          <div className={styles.clientFeedbackBox}>
                            {review.description}
                          </div>
                        </Card.Body>
                      </Card>
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
export default ClientTestimonial;
