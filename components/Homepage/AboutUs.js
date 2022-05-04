import styles from "./Homepage.module.css";
import { Container, Col, Accordion, Row } from "react-bootstrap";
import Title from "../Layout/Titles/Titles";
import Image from "next/image"
import whyYuvasoft from "../../assets/images/homepage/why-choose-graphic.svg"
const AboutUs = () => {
	return (
		<>
			<div className={styles.aboutUsSec}>
				<Container>
					<Row className="justify-content-between align-items-center">
						<Col 
							lg={6}
							data-aos="fade-right"
          					data-aos-duration="1000"
						>
							<Title value="WHY CHOOSE US?" span="Why" subTitle="Yuvasoft?" />
							<Accordion
								defaultActiveKey="0"
								className={styles.accordionContainer}
							>
								<Accordion.Item eventKey="0" className={styles.accordionCard}>
									<Accordion.Header>Your Software Dream Team</Accordion.Header>
									<Accordion.Body>
										We are a group of problem solvers and code ninjas that believe
										in building software that has real purpose. By combining
										talent, expertise, and hard work, we build custom software.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1" className={styles.accordionCard}>
									<Accordion.Header>Why Yuvasoft</Accordion.Header>
									<Accordion.Body>
										We are a group of problem solvers and code ninjas that believe
										in building software that has real purpose. By combining
										talent, expertise, and hard work, we build custom software.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2" className={styles.accordionCard}>
									<Accordion.Header>Quality Process</Accordion.Header>
									<Accordion.Body>
										We are a group of problem solvers and code ninjas that believe
										in building software that has real purpose. By combining
										talent, expertise, and hard work, we build custom software.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
						<Col 
							lg={5}
							data-aos="fade-left"
          					data-aos-duration="1500"
						>
							<Image src={whyYuvasoft} alt="why-choose" />
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};
export default AboutUs;
