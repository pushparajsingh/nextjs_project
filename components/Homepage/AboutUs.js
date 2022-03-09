import styles from './Homepage.module.css'
import { Container, Col, Accordion } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutUsSec}>
                <Container>
                    <Col lg={6}>
                        <div className="themeTitle">
                            <h4>WHY CHOOSE US?</h4>
                            <h3><span>Why</span> Yuvasoft?</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Accordion defaultActiveKey="0" className={styles.accordionContainer}>
                            <Accordion.Item eventKey="0" className={styles.accordionCard}>
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className={styles.accordionCard}>
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
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