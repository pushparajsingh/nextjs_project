import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Titles/Titles";
import styles from './Homepage.module.css'
import {
    CircularProgressbar, buildStyles, CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { useState } from "react";

const WhyChooseUs = () => {
    const [percentage,setPercentage]= useState(0)
    const handleChange=()=>{
        debugger
        setPercentage(66)
    }
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
                        {/* <Col lg={2}>
                            <div style={{ width: "80%" }}>
                                <CountUp end={60} redraw={true}>
                                    {({ countUpRef, start }) => ( 
                                        <VisibilitySensor delayedCall>
                                        <>
                                        {handleChange()}
                                            <CircularProgressbarWithChildren value={percentage} text={`${percentage}%`} styles={buildStyles({
                                                trailColor: "#fff",
                                                fill: "linear-gradient(90deg, rgba(240,35,52,1) 0%, rgba(255,59,75,1) 100%)",
                                            })}>
                                                <div style={{ width: "60%" }}>

                                                    <CircularProgressbar
                                                        value={100}
                                                        strokeWidth={15}
                                                        styles={buildStyles({
                                                            pathColor: "#F0F6FF",
                                                           
                                                        })}

                                                    />
                                                </div>
                                            </CircularProgressbarWithChildren>
                                            </>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </div>
                        </Col> */}

                        {/* Achievement Section Start */}
                        <div className={styles.achievementSection}>
                            <div className={styles.achievementcontainer}>
                                <CountUp end={60} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>

                                            <div className={styles.achieventContent}>
                                                <h3><span ref={countUpRef} />*</h3>
                                                <p>client Served</p>
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <CountUp end={140} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>

                                            <div className={styles.achieventContent}>
                                                <h3><span ref={countUpRef} />*</h3>
                                                <p>Project Completed</p>
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <CountUp end={97} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>

                                            <div className={styles.achieventContent}>
                                                <h3><span ref={countUpRef} />%</h3>
                                                <p>Project Succeses</p>
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <CountUp end={250} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>

                                            <div className={styles.achieventContent}>
                                                <h3><span ref={countUpRef} />M</h3>
                                                <p>revenue from client</p>
                                            </div>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
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