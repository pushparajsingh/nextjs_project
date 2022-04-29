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
                <Slider {...settings} className={styles.mainBanner}>
                    <div>
                        <div className={styles.bannerSliderBox}>
                           <Container>
                               <Row>
                                   <Col lg={6}>
                                        <div className={styles.bannerTitle}>
                                            <h3>The #1 SEO Services Company <br/>  with 200+ Case Studies</h3>
                                            <p>We help you succeed online with proven SEO methods.</p>
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
                                   <Col lg={6}>
                                        <div className={styles.bannerTitle}>
                                            <h3>The #1 SEO Services Company <br/>  with 200+ Case Studies</h3>
                                            <p>We help you succeed online with proven SEO methods.</p>
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
                                   <Col lg={6}>
                                        <div className={styles.bannerTitle}>
                                            <h3>The #1 SEO Services Company <br/>  with 200+ Case Studies</h3>
                                            <p>We help you succeed online with proven SEO methods.</p>
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
                        <Col lg={4}>
                            <div className={`${styles.serviceBoxSmall} ${styles.serviceBoxbg1}`}>
                                <div className={`${styles.numberBox} ${styles.serviceFirst}`}>01</div>
                                <div className={styles.contentBox}>
                                    <h5>Radical Integrity</h5>
                                    <p>Our people truly care for our work and for each other.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.serviceBoxSmall} ${styles.serviceBoxbg2}`}>
                                <div className={`${styles.numberBox} ${styles.serviceSecond}`}>02</div>
                                <div className={styles.contentBox}>
                                    <h5>People First</h5>
                                    <p>We believe that a culture will build a thriving company.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.serviceBoxSmall} ${styles.serviceBoxbg3}`}>
                                <div className={`${styles.numberBox} ${styles.serviceThird}`}>03</div>
                                <div className={styles.contentBox}>
                                    <h5>Process Perfection</h5>
                                    <p>We are driven to becoming the best version of ourselves.</p>
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