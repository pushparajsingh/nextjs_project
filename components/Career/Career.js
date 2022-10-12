import { Col, Container, Row, Button } from "react-bootstrap";
import Title from "../Layout/Titles/Titles";
import styles from "./Career.module.scss";
import careerGraphic from "../../assets/images/careers/career-graphic.webp";
import jobIcon from "../../assets/images/careers/web-design.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { careerPage } from '../../redux/Careers/Careers.action'
import { useSelector, useDispatch } from "react-redux";


const CareerPage = () => {
	const dispatch = useDispatch()
	const series = [1, 2, 3, 4];
	const [pageno, setpageno] = useState(1);
	const career = useSelector((state) => state);
	console.log(333, career?.careers?.page)
	useEffect(() => {

		dispatch(careerPage(pageno));
	}, []);

	return (
		<section className={`${styles.careerPage} themeSectionPadding`}>
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<Title value="Latest" span="jobs" subTitle="openings" />
						<p className={styles.careerBasic}>
							Yuvasoft Solutions Pvt Ltd is a global, software development
							company, dedicated to building innovative app solutions for Mobile
							and Web. We are a In-house team that cares deeply about creating
							great apps for our customers. Yuvasoft Solutions Pvt Ltd was
							established in January 2011 as a Web Project and Programme
							Development Company however due to the changing built environment
							and the growing needs of our Clients; it became necessary to
							broaden the services that could be provided by Yuvasoft, so as to
							offer multi-disciplinary under one banner, we now provide services
							in Project Management & Analysis, Project Architecture, Mobile
							Apps Development, Designs, Quality Assurance. <br /> <br />
							Based on your resources need-people or financial-we are able to
							quickly scale up or down to fill any gaps and deliver your mobile
							application on time and on budget.
						</p>
						<Button className="themeButton">Apply Now</Button>
					</Col>
					<Col md={6}>
						<Image
							src={careerGraphic}
							className="img-fluid"
							alt="career-image"
						/>
					</Col>
				</Row>
				<Row>
					{career?.careers?.page?.map((value) => {
						return (
							<Col key={value} lg={4}>
								<div className={styles.jobCard}>
									<div className={styles.jobIcon}>
										<Image src={jobIcon} className="img-fluid" alt="icon" />
									</div>
									<h2 className={styles.jobTitle}>{value.name}</h2>
									<p className={styles.jobDesc}>
										{value.description}
									</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
			{/* <Container fluid>
				<Row></Row>
			</Container> */}
		</section>
	);
};

export default CareerPage;
