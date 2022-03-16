import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Titles/Titles";
import styles from './Homepage.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const WhyChooseUs = () => {
    const percentage = 66;
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
                        <div className="clearfix"></div>
                        <Col lg={2}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </Col>
                        {/* <Col lg={2}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '16px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            />
                        </Col>
                        <Col lg={2}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={{
                                    // Customize the root svg element
                                    root: {},
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                        // Path color
                                        stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                        // Customize transition animation
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        // Rotate the path
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                        // Trail color
                                        stroke: '#d6d6d6',
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                        // Rotate the trail
                                        transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                    // Customize the text
                                    text: {
                                        // Text color
                                        fill: '#f88',
                                        // Text size
                                        fontSize: '16px',
                                    },
                                    // Customize background - only used when the `background` prop is true
                                    background: {
                                        fill: '#3e98c7',
                                    },
                                }}
                            />
                        </Col> */}


                        {/* Achievement Section Start */}
                        <div className={styles.achievementSection}>
                            <div className={styles.achieventContent}>
                                <h3>60*</h3>
                                <p>client Served</p>
                            </div>
                        </div>
                        {/* Achievement Section End */}
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default WhyChooseUs;