import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import styles from "./Homepage.module.css";
// import ServiceIconImg from '../..'
import Image from "next/image";
import { ServiceIcon } from "../Utils/ourServices";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Title from "../common/Titles/Titles";
import ServiceModal from "./serviceModal";
const Services = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.servicesContainerBg}>
        <div className={styles.shapeContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>
        <Container>
          {show && <ServiceModal show={show} setShow={setShow} />}
          <Row>
            <Col lg={12}>
              <div className={styles.themeTitleCenter}>
                <Title
                  value="all solutions are here"
                  span="our"
                  subTitle="domain expertise"
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center" xl={6} lg={4} md={4}>
            {ServiceIcon?.map((value, index) => {
              return (
                <Col key={index}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <Image
                        alt={value.service}
                        src={value.icon}
                        className="img-fluid"
                        height={58}
                        width={58}
                      />
                    </div>
                    <h5>{value.service}</h5>
                    <Button
                      onClick={handleShow}
                      className={styles.serviceAction}
                    >
                      More Details
                      <span>
                        <BsArrowRight />
                      </span>
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col lg={12}>
              <Button className="themeButton">View more</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Services;
