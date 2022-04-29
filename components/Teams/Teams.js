import React, { useState } from 'react';
import Slider from "react-slick";
import Head from 'next/head'
import {
	Container,
	Row,
	Col
} from 'react-bootstrap'
import styles from './Teams.module.scss'
import Title from '../common/Titles/Titles'
import Image from 'next/image'
import { ourTeams } from '../Utils/ourTeams';
import { BsPlusLg, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { teamHeads } from '../Utils/ourTeams';
import {SSRProvider} from '@react-aria/ssr';

const Teams = () => {
	const [buttonActive, setButtonActive] = useState();

	const onCloseButton = () => {
		setButtonActive('test')
	}

	var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        bool: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
        ]
    };
	const handleSocialClick=(value)=>{
		if(value==buttonActive){
			setButtonActive(false)
		}else{
			setButtonActive(value)
		}
		
	}

	return (
		<SSRProvider>
		<div>
			<Head>
				<title>Yuvasoft Solutions - Teams</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			
			<section className={styles.TeamHeadBg}>
				<Container>
					<Slider {...settings}>
						{teamHeads.map((value, index) => {
							return (
								<div key={index}>
									<Row className='align-items-center'>
										<Col md={6}>
											<Image
												src={value.image}
												alt={value.image}
												className='img-fluid'
											/>
										</Col>
										<Col md={6}>
											<div className={styles.teamSlideCard}>
												<Title
													value={value.post}
													span={value.name}
													subTitle={value.nameSpan}
												/>
												<p className={styles.teamHeadDescription}>
													{value.bio}
												</p>
												<ul className={styles.teamHeadList}>
													<li>
														<span>
															Post
														</span>
														{value.post}
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
													<Link href={value.urlFacebook}>
														<a target='_blank' className={styles.facebook}><FaFacebookF /></a>
													</Link>
													<Link href={value.urlLinkedin}>
														<a target='_blank' className={styles.linkedin}><FaLinkedinIn /></a>
													</Link>
													<Link href={value.urlTwitter}>
														<a target='_blank' className={styles.twitter}><FaTwitter /></a>
													</Link>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							)
						})}
					</Slider>
				</Container>
			</section>
			
			<section className={styles.teamsBgWrapper}>
				<Container>
					<Row className='justify-content-center text-center'>
						<Col sm={6}>
							<Title
								value="Professional People"
								span="Our"
								subTitle="Leadership Team"
							/>
						</Col>
					</Row>
					
					<Row>
						{ourTeams && ourTeams.map((value, index) => {
							return (
								<Col md={4} key={index}>
									<div className={styles.TeamCard}>
										<div className={styles.TeamPic}>
											<Image
												src={value.thumb}
												alt={value.thumb}
												className='img-fluid'
											// layout='fill'
											/>
										</div>
										<div className={styles.TeamInfo}>
											<h4 className={styles.TeamName}>{value.name}</h4>
											<p className={styles.TeamPost}>{value.post}</p>
											<div className={` ${buttonActive === value.name  ? styles.activeSocial : ''} ${styles.TeamSocial}`}>
												<Link href='https://www.google.com'>
													<a><FaFacebookF className='icon facebook' /></a>
												</Link>
												<Link href='https://www.google.com'>
													<a><FaLinkedinIn className='icon linkedin' /></a>
												</Link>
												<Link href='https://www.google.com'>
													<a><BsTwitter className='icon twitter' /></a>
												</Link>
												<BsPlusLg onClick={() => handleSocialClick(value.name)} className='icon iconToggle' />
											</div>
										</div>
									</div>
								</Col>
							)
						})}
					</Row>
					
				</Container>
			</section>

			
		</div>
		</SSRProvider>
	)
}
export default Teams;