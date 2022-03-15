import { Carousel, Col, Container, Row } from "react-bootstrap"
import Title from "../common/Titles/Titles"
import styles from './Homepage.module.css'

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item className={styles.carouseItemContainer}>
                    <Container>
                        <Row>
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
                        </Row>
                    </Container>

                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className={styles.carouseItemContainer1}>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <Title
                                    value="We Build Products For Next Generation"
                                    subTitle="Welcome To Yuvasoft Solutions"
                                />
                                <p>1Yuvasoft Solutions Pvt Ltd is a global, software development
                                    company,  dedicated to building innovative app solutions for Mobile
                                    and Web.   We are a global team that cares deeply about creating
                                    great apps  for our customers... We Build Products For
                                    Next Generation</p>
                            </Col>
                        </Row>
                    </Container>

                    {/* <Carousel.Caption>
                        <h3>First f fgdslide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className={styles.carouseItemContainer2}>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <Title
                                    value="We Build Products For Next Generation"
                                    subTitle="Welcome To Yuvasoft Solutions"
                                />
                                <p>2Yuvasoft Solutions Pvt Ltd is a global, software development
                                    company,  dedicated to building innovative app solutions for Mobile
                                    and Web.   We are a global team that cares deeply about creating
                                    great apps  for our customers... We Build Products For
                                    Next Generation</p>
                            </Col>
                        </Row>
                    </Container>

                    {/* <Carousel.Caption>
                        <h3>First slide vefalabel</h3>
                        <p>Nulla vitabfdsre elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Banner