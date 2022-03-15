import styles from './Homepage.module.css'
import { Container, Col, Accordion } from 'react-bootstrap';
import Title from '../common/Titles/Titles';
const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutUsSec}>
                <Container>
                    <Col lg={6}>
                        <Title
                            value="WHY CHOOSE US?"
                            span="Why"
                            subTitle="Yuvasoft?"
                        />
                    </Col>
                    <Col lg={6}>
                        <Accordion defaultActiveKey="0" className={styles.accordionContainer}>
                            <Accordion.Item eventKey="0" className={styles.accordionCard}>
                                <Accordion.Header>Your Software Dream Team</Accordion.Header>
                                <Accordion.Body>
                                    We are a group of problem solvers and code ninjas that believe in
                                    building software that has real purpose. By combining talent, expertise,
                                    and hard work, we build custom software.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className={styles.accordionCard}>
                                <Accordion.Header>Why Yuvasoft</Accordion.Header>
                                <Accordion.Body>
                                    We are a group of problem solvers and code ninjas that believe in
                                    building software that has real purpose. By combining talent, expertise,
                                    and hard work, we build custom software.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className={styles.accordionCard}>
                                <Accordion.Header>Quality Process</Accordion.Header>
                                <Accordion.Body>
                                    We are a group of problem solvers and code ninjas that believe in
                                    building software that has real purpose. By combining talent, expertise,
                                    and hard work, we build custom software.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Container>
            </div>
        </>
    )
}
export default AboutUs;