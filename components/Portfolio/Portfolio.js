import { Col, Container, Row, Tabs, Tab, Card, Button } from "react-bootstrap";
import Title from "../Layout/Titles/Titles";
import styles from "./Portfolio.module.scss";

import Image from "next/image";
import Link from "next/link";
import portfolioData from "../Utils/ourPortfolio";

const Portfolio = () => {
  return (
    <section className="themeSectionPadding">
      <Container className={styles.portfolioWrapper}>
        <Row
          className="justify-content-center text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Col lg={6}>
            <Title
              value="Our Projects"
              span="Some of"
              subTitle="Our Creative Works For Clients"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="all" title="All">
                <Row>
                  {portfolioData.map((item, index) => {
                    return (
                      <Col
                        lg={4}
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <Card className={styles.portfolioCard}>
                          <Link
                            href={`/portfolio/${item.title?.replaceAll(
                              " ",
                              "-"
                            )}`}
                          >
                            <a>
                              <div className={styles.portfolioThumb}>
                                <Image src={item.thumb} alt={item.title} />
                              </div>
                              <Card.Body>
                                <div className={styles.cardContent}>
                                  <Card.Title>{item.title}</Card.Title>
                                  <Card.Text>{item.category}</Card.Text>
                                </div>
                              </Card.Body>
                            </a>
                          </Link>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="profile" title="Web Applications">
                <Row>
                  {portfolioData
                    .filter((item) => item.category == "Website")
                    .map((item, index) => {
                      return (
                        <Col lg={4} key={index}>
                          <Card className={styles.portfolioCard}>
                            <Link
                              href={`/portfolio/${item.title?.replaceAll(
                                " ",
                                "-"
                              )}`}
                            >
                              <a>
                                <div className={styles.portfolioThumb}>
                                  <Image src={item.thumb} alt={item.title} />
                                </div>
                                <Card.Body>
                                  <div className={styles.cardContent}>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.category}</Card.Text>
                                  </div>
                                </Card.Body>
                              </a>
                            </Link>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </Tab>
              <Tab eventKey="contact" title="Mobile Applications">
                <Row>
                  {portfolioData
                    .filter((item) => item.category == "Mobile App")
                    .map((item, index) => {
                      return (
                        <Col lg={4} key={index}>
                          <Card className={styles.portfolioCard}>
                            <Link
                              href={`/portfolio/${item.title?.replaceAll(
                                " ",
                                "-"
                              )}`}
                            >
                              <a>
                                <div className={styles.portfolioThumb}>
                                  <Image src={item.thumb} alt={item.title} />
                                </div>
                                <Card.Body>
                                  <div className={styles.cardContent}>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.category}</Card.Text>
                                  </div>
                                </Card.Body>
                              </a>
                            </Link>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
