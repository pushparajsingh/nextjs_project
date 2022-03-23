import { Carousel, Col, Container, Row } from "react-bootstrap"
import Title from "../common/Titles/Titles"
import styles from './Homepage.module.css'
import Image from 'next/image'
import bannerImg from '../../assets/images/yuva-home-banner.png'
import bannerImg1 from '../../assets/images/yuva-home-banner-2.png'
import bannerImg2 from '../../assets/images/yuva-home-banner-3.png'
import { html } from "../../assets/html"
import Script from 'next/script'


const Banner = () => {
    return (
        <>
        <Script src="/sliderJs.js" />
        <Script
  src="/jquery.js"/>
        {/* <Script >
            
        </Script> */}
            <div dangerouslySetInnerHTML={{__html:html }} />
            
            {/* <Carousel fade>
                <Carousel.Item className={`${styles.carouseItemContainer} ${styles.carouseItemContainer1}`}>
                    <Container>
                        <Row className="align-items-center vh-100">
                            <Col lg={6}>
                                <Title
                                    value="We Build Products For Next Generation"
                                    subTitle="Welcome To Yuvasoft Solutions"
                                />
                                <p>Yuvasoft Solutions Pvt Ltd is a global, software development
                                    company,  dedicated to building innovative app solutions for Mobile
                                    and Web.   We are a global team that cares deeply about creating
                                    great apps  for our customers... We Build Products For
                                    Next Generation</p>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.bannerImgWrapper}>
                                    <Image 
                                        src={bannerImg}
                                        className="img-fluid banner-image"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className={`${styles.carouseItemContainer} ${styles.carouseItemContainer2}`}>
                    <Container>
                        <Row className="align-items-center vh-100">
                            <Col lg={6}>
                                <Title
                                    value="We Build Products For Next Generation"
                                    subTitle="Welcome To Yuvasoft Solutions"
                                />
                                <p>YuvaSoft is a resourceful and dedicated professional that works well with a technical team and finds creative solutions to problems. I plan on hiring them again as soon as I have more work for them.</p>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.bannerImgWrapper}>
                                    <Image 
                                        src={bannerImg1}
                                        className="img-fluid banner-image"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className={`${styles.carouseItemContainer} ${styles.carouseItemContainer3}`}>
                    <Container>
                        <Row className="align-items-center vh-100">
                            <Col lg={6}>
                                <Title
                                    value="We Build Products For Next Generation"
                                    subTitle="Welcome To Yuvasoft Solutions"
                                />
                                <p>It was great working with YuvaSoft. They are very knowledgeable with Rails and they always checks back to make sure that the work done was satisfactory. A pleasure to work with them and I will certainly hire them for additional work.</p>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.bannerImgWrapper}>
                                    <Image 
                                        src={bannerImg2}
                                        className="img-fluid banner-image"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel> */}
        </>
    )
}
export default Banner