import Head from 'next/head'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Homepage.module.scss'
import ServiceData from './services'

const Homepage = () => {
    return(
        <div>
            <Header />
      
            {/* Services starts */}
            <Container>
				<Row>
					{ServiceData.map((item, index) =>(
							<Col lg={3} key={index}>
								<div className={styles.serviceCard}>
									<div className={styles.serviceIcon}>
										<img src='../../../images/Ruby-on-Rails.png' alt="icon" />
									</div>
									<h2 className={styles.serviceTitle}>{item.title}</h2>
								</div>
							</Col>
						))
					}
					<Col lg={3}>
						<div className={styles.serviceCard}>
							<div className={styles.serviceIcon}>
								<img src='../../../images/Ruby-on-Rails.png' alt="icon" />
							</div>
							<h2 className={styles.serviceTitle}>Ruby On Rails</h2>
						</div>
					</Col>
				</Row>
            </Container>
            {/* Services ends */}
            <Footer />
        </div>
    )
}
export default Homepage;