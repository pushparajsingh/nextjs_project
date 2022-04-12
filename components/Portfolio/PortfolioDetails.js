import styles from "./Portfolio.module.scss"
import Image from "next/image"
import detailBanner from "../../assets/images/portfolio/Project-detail-banner.webp"
import { Col, Container, Row } from "react-bootstrap"
import gallery1 from "../../assets/images/portfolio/portfolio-2.png"
import gallery2 from "../../assets/images/portfolio/portfolio-3.png"
import gallery3 from "../../assets/images/portfolio/portfolio-4.png"
import { ImageViewer } from "react-image-viewer-dv"
import Link from "next/link"
import playStoreIcon from "../../assets/images/portfolio/play-store-icon.svg"
import appStoreIcon from "../../assets/images/portfolio/app-store-icon.svg"
import {portfolioDetail} from "../Utils/portfolioDetails"


const PortfolioDetails = () => {
    return (
        <section className={styles.portfolioDetailsWrapper}>
            {portfolioDetail.map((portfolio, index) => {
                return (
                    <Container key={index}>
                        <Row>
                            <Col md={12}>
                                <div className={styles.detailBigBanner} data-aos="zoom-in" data-aos-duration="1000">
                                    <Image src={portfolio.banner} alt="banner" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-5 align-items-center">
                            <Col lg={8} data-aos="fade-right" data-aos-duration="1000">
                                <h2 className={styles.projectTitle}>{portfolio.title}</h2>
                                <p className={styles.details}>{portfolio.details}</p>
                                <Link href={portfolio.link}>
                                    <a target="_blank" className="btn themeButton d-inline-block">
                                        Visit Website
                                    </a>
                                </Link>
                            </Col>
                            <Col lg={4} data-aos="fade-left" data-aos-duration="1000">
                                <div className={styles.detailCard}>
                                    <h4>Project Info</h4>
                                    <ul>
                                        <li>
                                            <span>Category</span>
                                            <h5>{portfolio.category}</h5>
                                        </li>
                                        <li>
                                            <span>Client</span>
                                            <h5>{portfolio.client}</h5>
                                        </li>
                                        <li>
                                            <span>Date</span>
                                            <h5>{portfolio.date}</h5>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row className={styles.projectGallery} data-aos="fade-up" data-aos-duration="2000">
                            <Col lg={4}>
                                <div className={styles.imgBox}>
                                <ImageViewer>
                                    <Image src={gallery1} alt="gallery" className="img-fluid" />
                                </ImageViewer>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.imgBox}>
                                    <ImageViewer>
                                        <Image src={gallery2} alt="gallery" className="img-fluid" />
                                    </ImageViewer>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.imgBox}>
                                    <ImageViewer>
                                        <Image src={gallery3} alt="gallery" className="img-fluid" />
                                    </ImageViewer>
                                </div>
                            </Col>
                        </Row>
                        <Row data-aos="fade-up" data-aos-duration="1000">
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
                        <Row data-aos="zoom-out" data-aos-duration="1000">
                            <Col lg={12}>
                                <div className={styles.projectActionBox}>
                                    <div>
                                        <h2 className={styles.actionTitle}>Download our App</h2>
                                        <p>
                                            This product mobile app is available on Play Store and on App Store.
                                        </p>
                                        <div className={styles.appDownload}>
                                            <Link href="/">
                                                <a>
                                                    <Image src={playStoreIcon} alt="store-icon" className="img-fluid" />
                                                </a>
                                            </Link>
                                            <Link href="/">
                                                <a>
                                                    <Image src={appStoreIcon} alt="store-icon" className="img-fluid" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </section>
    )
}

export default PortfolioDetails;