import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Homepage.module.css";
import Title from "../Layout/Titles/Titles";
import Planning from "../../assets/images/Planning.svg";
import Research from "../../assets/images/Research.svg";
import Design from "../../assets/images/Design.svg";
import Start from "../../assets/images/Start.svg";
import Image from "next/image";
const WorkFlow = () => {
  return (
    <>
      <div className={styles.workflowWrapper}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.themeTitleCenter}>
                <Title value="Flow" span="our" subTitle="Work Flow" />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <Card className={styles.workCard}>
                <Card.Body>
                  <Image src={Planning} className="img-fluid" alt="planning" />
                  <Card.Title>Meetup</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className={styles.workCard}>
                <Card.Body>
                  <Image src={Research} className="img-fluid" alt="research" />
                  <Card.Title>Research</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className={styles.workCard}>
                <Card.Body>
                  <Image src={Design} className="img-fluid" alt="design" />
                  <Card.Title>Design</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className={styles.workCard}>
                <Card.Body>
                  <Image src={Start} className="img-fluid" alt="start" />
                  <Card.Title>Start</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default WorkFlow;
