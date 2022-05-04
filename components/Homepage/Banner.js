// import { html } from "../../assets/html"
// import Script from 'next/script'
// import { useEffect } from "react"
import Slider from "react-slick";
import styles from './Homepage.module.css'
import { Col, Container, Row, Button } from "react-bootstrap";

const Banner = () => {
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = '/sliderJs.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    // }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            {/* <Script
                src="/jquery.js" />
            <Script
                src="/sliderJs.js" /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}

            <div>
                <Slider {...settings} className={styles.mainBanner} fade>
                    <div>
                        <div className={styles.bannerSliderBox}>
                           <Container>
                               <Row>
                                   <Col lg={6} md={8}>
                                        <div className={styles.bannerTitle}>
                                            <h3>We are a team of Developers, Designers, Innovators...</h3>
                                            <p>We are Yuvasoft. A journey to innovation!</p>
                                            <Button className={styles.bannerBtn}>
                                                More Details
                                            </Button>
                                        </div>
                                        
                                   </Col>
                               </Row>
                           </Container>
                        </div>
                    </div>
                    <div>
                        <div className={styles.bannerSliderBox}>
                           <Container>
                               <Row>
                                   <Col lg={6} md={8}>
                                        <div className={styles.bannerTitle}>
                                        <h3>We Build Products for <br/> next generation</h3>
                                            <p>We are dedicated to building innovative app for Mobile and Web.</p>
                                            <Button className={styles.bannerBtn}>
                                                More Details
                                            </Button>
                                        </div>
                                        
                                   </Col>
                               </Row>
                           </Container>
                        </div>
                    </div>
                    <div>
                        <div className={styles.bannerSliderBox}>
                           <Container>
                               <Row>
                                   <Col lg={6} md={8}>
                                        <div className={styles.bannerTitle}>
                                            <h3>We Ensure Your Growth And Success</h3>
                                            <p>We are a leading software development company providing industry-specific solutions.</p>
                                            <Button className={styles.bannerBtn}>
                                                More Details
                                            </Button>
                                        </div>
                                        
                                   </Col>
                               </Row>
                           </Container>
                        </div>
                    </div>
                </Slider>.
                <section className={styles.homeService}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4} md={6}>
                            <div className={`${styles.serviceBoxSmall} ${styles.serviceBoxbg1}`}>
                                <div className={`${styles.numberBox} ${styles.serviceFirst}`}>01</div>
                                <div className={styles.contentBox}>
                                    <h5>Providing All The Expertise That You Need</h5>
                                    <p>You can rely on our team of designers and developers to produce the product you are looking for across a range of platforms and devices.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className={`${styles.serviceBoxSmall} ${styles.serviceBoxbg2}`}>
                                <div className={`${styles.numberBox} ${styles.serviceSecond}`}>02</div>
                                <div className={styles.contentBox}>
                                    <h5>Trust Our Team Of Professionals</h5>
                                    <p>We keeps its words and will complete your project according to your specifications. We can help if you feel trapped by your current developer.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className={`${styles.serviceBoxSmall} ${styles.serviceBoxbg3}`}>
                                <div className={`${styles.numberBox} ${styles.serviceThird}`}>03</div>
                                <div className={styles.contentBox}>
                                    <h5>Providing All The Services That You Need</h5>
                                    <p>Our words are our actions. Our team will work with you to define your scope of work and ensure it is fulfilled, making changes according to your approval.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </div>
        </>
    )
}
export default Banner