import { Col, Container, Row } from "react-bootstrap";
import Title from "../Layout/Titles/Titles";
import styles from "./Homepage.module.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { useState } from "react";
import { skillsProgress } from "../Utils/ourSkillsProgress";

const WhyChooseUs = () => {
  const [percentage, setPercentage] = useState(0);
  const [visble, setVisible] = useState(false)
  const handleValue = (value) => {
    if (visble) {
     return value ;
    } else {
      return 0
    }
  };

  const handleChange=(isVisible)=>{
    if(isVisible && !visble ){
      setVisible(isVisible)
    }
    
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
                  Our design and development team knows very well what it takes
                  to successfully develop web products across multiple domains.
                </p>
              </div>
            </Col>
            <div className="clearfix"></div>
            {skillsProgress.map((value, index) => {
              return (
                <Col lg={2} md={4} sm={6} key={value.id}>
                  <div className={styles.progressBarContainer}>
                    <VisibilitySensor
                      delayedCall={true}
                      offset={{top:200,bottom:200}}
                      onChange={(isVisible) => handleChange(isVisible)}
                    >
                      <>
                        <CircularProgressbarWithChildren
                          value={handleValue(value.progress)}
                          text={`${value.progress}%`}
                          styles={{
                            text: {
                              fill: 'var(--primary)',
                              fontSize: '16px',
                              fontWeight: 700
                            },
                            trail: {
                              stroke: '#fff',
                            },
                            pathTransition:
                              percentage === 0
                                ? "none"
                                : "stroke-dashoffset 2s ease 0s",
                          }}
                        >
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
                    <div className={styles.skillsHeading}>
                      {value.skills}
                    </div>
                  </div>
                </Col>
              );
            })}
           
            {/* Achievement Section Start */}
            <Col lg={12}>
            <div className={styles.achievementSection}>
              <div className={styles.achievementcontainer}>
                <CountUp end={60} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />*
                        </h3>
                        <p>client Served</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp end={140} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />*
                        </h3>
                        <p>Project Completed</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp end={97} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />%
                        </h3>
                        <p>Project Succeses</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
                <CountUp end={250} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div className={styles.achieventContent}>
                        <h3>
                          <span ref={countUpRef} />M
                        </h3>
                        <p>revenue from client</p>
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            </Col>
            {/* Achievement Section End */}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default WhyChooseUs;
