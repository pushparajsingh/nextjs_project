import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Titles/Titles";
import styles from './Homepage.module.css'

const WhyChooseUs = () => {
    return (
        <>
            <div className={styles.whyUsContainer}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.whyusTitle}>
                                <Title
                                    value="WHY CHOOSE US?"
                                    span="we are"
                                    subTitle="Creative Dreamers & Innovators"
                                />
                                <p className={styles.titleParagraph}>
                                    Our design and development team knows very well what it takes to successfully develop web products across multiple domains.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default WhyChooseUs;