import styles from "./Portfolio.module.scss"
import Image from "next/image"
import detailBanner from "../../assets/images/portfolio/Project-detail-banner.webp"
import { Col, Container, Row } from "react-bootstrap"
import gallery1 from "../../assets/images/portfolio/portfolio-1.jpg"

const PortfolioDetails = () => {
    return (
        <section className={styles.portfolioDetailsWrapper}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.detailBigBanner}>
                            <Image src={detailBanner} alt="banner" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col lg={8}>
                        <h2 className={styles.projectTitle}>
                            Freshymart
                        </h2>
                        <p className={styles.details}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae <br />
                            But I must explain to you how this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the master-build er of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses
                        </p>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.detailCard}>
                            <h4>Project Info</h4>
                            <ul>
                                <li>
                                    <span>Category</span>
                                    <h5>Web Design</h5>
                                </li>
                                <li>
                                    <span>Client</span>
                                    <h5>John Doe</h5>
                                </li>
                                <li>
                                    <span>Date</span>
                                    <h5>11 April 2022</h5>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.projectGallery}>
                    <Col lg={4}>
                        <div className={styles.imgBox}>
                            <Image src={gallery1} alt="gallery" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.imgBox}>
                            <Image src={gallery1} alt="gallery" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.imgBox}>
                            <Image src={gallery1} alt="gallery" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className={styles.summaryCard}>
                            <h4 className={styles.summaryTitle}>Projects Summery</h4>
                            <p className={styles.summaryInfo}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/> <br />
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PortfolioDetails;