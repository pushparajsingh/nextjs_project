import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Title from '../common/Titles/Titles';
import { BsFillArrowRightCircleFill } from 'react-icons/Bs'
import styles from './Services.module.scss'
import Link from 'next/link'
import ServiceIcon from "../Utils/ourServices";
import portfolioData from "../Utils/ourPortfolio";


const ServicesPage = () => {
    return (
        <section className={styles.serviceWrapper}>
            <Container className={styles.serviceHead}>
                <Row className='justify-content-between align-items-end'>
                    <Col md={5}>
                        <Title value="Our Services" span="Some of" subTitle="Our Services & Skills" />
                    </Col>
                    <Col md={6}>
                        <Button className="themeButton">
                            Scroll more
                            <BsFillArrowRightCircleFill className={styles.icon} />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul className={styles.serviceCategoryList}>
                            <li key={index}>
                                <Link href="#">
                                    <a>

                                        <h4 className={styles.serviceTitle}>Ruby On Rails</h4>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesPage;