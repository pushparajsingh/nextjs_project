import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import styles from "./Homepage.module.css";
import Image from "next/image";
import { ServiceIcon } from "../Utils/ourServices";
import { BsArrowRight } from "react-icons/bs";
import Title from "../Layout/Titles/Titles";
import ServiceModal from "./ServiceModal";
const Services = () => {
  const [show, setShow] = useState(false);
  const [data,setData] = useState();
  const handleShow = (value) => {
    console.log(12394,value)
    setShow(true)
    setData(value)
  
  };

  return (
    <>
      <div className={styles.servicesContainerBg}>
        <Container>
          <ServiceModal show={show} setShow={setShow} data={data} />
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
                <Col key={index} xs={6}>
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
                      onClick={()=>{handleShow(value)}}
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
              <Button className={`${styles.servicesViewBtn} themeButton`}>View more</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Services;
