import React, { useState } from 'react';
import Head from 'next/head'
import {
	Container,
	Row,
	Col
} from 'react-bootstrap'
import styles from './Teams.module.css'
import Title from '../common/Titles/Titles'
import Image from 'next/image'
import TeamMember1 from '../../assets/images/teams/team-1.jpg'
import HiteshKanwar from '../../assets/images/teams/hitesh-kanwar.png'
import Team1 from '../../assets/images/teams/team-1.jpg';
import { ourTeams } from '../Utils/ourTeams';
import { BsPlusLg, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Teams = () => {
	const [buttonActive, setButtonActive] = useState();

	const onCloseButton = () => {
		setButtonActive('test')
	}
	console.log(1111, ourTeams)

	return (
		<div>
			<section className={styles.TeamHeadBg}>
				<Container>
					<Row className='align-items-center'>
						<Col md={6}>
							<Image
								src={HiteshKanwar}
								alt="Member image"
								className='img-fluid'
							/>
						</Col>
						<Col md={6}>
							<div className={styles.teamSlideCard}>
								<Title />
								<p className={styles.teamHeadDescription}>
									Our clients’ interests are ours as well. We strive to deliver valuable products and services for both our clients and their customers. We think that great things can only be achieve through a sustainable, strong and professional team. We love challenges and we are keen learners. We measure our success by the success of those we serve. That’s not some tagline, It’s a tenet that informs everything we believe and do. As CEO of Yuvasoft, Mr. Hitesh Gurjar is responsible for technical leadership and innovation, further developing the company’s technical community, and aligning its software strategy, architecture and partner relationships to deliver customer value. He has a passion for innovation and development. He has extensive experience leading the development of cutting-edge products and technologies.
								</p>
								<ul className={styles.teamHeadList}>
									<li>
										<span>
											Post
										</span>
										Founder, CEO
									</li>
									<li>
										<span>
											Experience
										</span>
										Over 6+ years experience
									</li>
									<li>
										<span>
											Qualification
										</span>
										Bachelor of Engineering
									</li>
								</ul>
								<div className={styles.teamSocial}>
									<Link href='https://www.google.com'>
										<a target='_blank' className={styles.facebook}><FaFacebookF /></a>
									</Link>
									<Link href='https://www.google.com/'>
										<a target='_blank' className={styles.linkedin}><FaLinkedinIn /></a>
									</Link>
									<Link href='https://www.google.com/'>
										<a target='_blank' className={styles.twitter}><FaTwitter /></a>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className={styles.teamsBgWrapper}>
				<Container>
					<Row className='justify-content-center text-center'>
						<Col sm={6}>
							<Title />
						</Col>
					</Row>
					<Row>
						{ourTeams && ourTeams.map((value, index) => {
							return (
								<Col md={4} key={index}>
									<div className={styles.TeamCard}>
										<div className={styles.TeamPic}>
											<Image
												src={Team1}
												alt={value.thumb}
												className='img-fluid'
											// layout='fill'
											/>
										</div>
										<div className={styles.TeamInfo}>
											<h4 className={styles.TeamName}>{value.name}</h4>
											<p className={styles.TeamPost}>{value.post}</p>
											<div className={` ${buttonActive === true ? styles.activeSocial : ''} ${styles.TeamSocial}`}>
												<Link href="javascript:void(0)">
													<a><FaFacebookF className='icon' /></a>
												</Link>
												<Link href="javascript:void(0)">
													<a><FaLinkedinIn className='icon' /></a>
												</Link>
												<Link href="javascript:void(0)">
													<BsTwitter className='icon' />
												</Link>
												<BsPlusLg onClick={() => setButtonActive(!buttonActive)} className='icon iconToggle' />
											</div>
										</div>
									</div>
								</Col>
							)
						})}
					</Row>
				</Container>
			</section>

			<section>

			</section>
		</div>
	)
}
export default Teams;