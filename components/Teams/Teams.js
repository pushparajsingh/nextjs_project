import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Teams.module.scss";
import Title from "../Layout/Titles/Titles";
import Image from "next/image";
import { ourTeams } from "../Utils/ourTeams";
import { BsPlusLg, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { teamHeads } from "../Utils/ourTeams";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {teamPageall} from '../../redux/Team/Team.action'
import Team1 from "../../assets/images/teams/team-1.jpg";


const Teams = () => {
  const dispatch = useDispatch();
  const [buttonActive, setButtonActive] = useState();
  const [pageno, setpageno] = useState(1);
  const {   pageallLoading , pageall} = useSelector((state) => ({
        pageall: state?.team?.pageall,
      pageallLoading: state?.team?.pageallLoading,
  }));
console.log(222, pageallLoading)
  useEffect(() => {
    
    dispatch(teamPageall(pageno));
  }, []);


  const onCloseButton = () => {
    setButtonActive("test");
  };

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const handleSocialClick = (value) => {
    if (value == buttonActive) {
      setButtonActive(false);
    } else {
      setButtonActive(value);
    }
  };
     
  // const handlePageClick = (event) => {
  //   const data = event.selected + 1;
  //  //dispatch(teamPage(data));
  // };


  return (
    <div>
      <section className={styles.TeamHeadBg}>
        <Container>
          <Slider {...settings}>
            {teamHeads.map((value, index) => {
              return (
                <div key={index}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <Image
                        src={value.image}
                        alt={value.image}
                        className="img-fluid"
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
                            <span>Post</span>
                            {value.post}
                          </li>
                          <li>
                            <span>Experience</span>
                            Over 6+ years experience
                          </li>
                          <li>
                            <span>Qualification</span>
                            Bachelor of Engineering
                          </li>
                        </ul>
                        <div className={styles.teamSocial}>
                          <Link href={value.urlFacebook}>
                            <a target="_blank" className={styles.facebook}>
                              <FaFacebookF />
                            </a>
                          </Link>
                          <Link href={value.urlLinkedin}>
                            <a target="_blank" className={styles.linkedin}>
                              <FaLinkedinIn />
                            </a>
                          </Link>
                          <Link href={value.urlTwitter}>
                            <a target="_blank" className={styles.twitter}>
                              <FaTwitter />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Slider>
        </Container>
      </section>

      <section className={styles.teamsBgWrapper}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col sm={6}>
              <Title
                value="Professional People"
                span="Our"
                subTitle="Leadership Team"
              />
            </Col>
          </Row>

          <Row>
            {pageall &&
              pageall.map((value, index) => {
                return (
                  <Col md={4} key={index}>
                    <div className={styles.TeamCard}>
                      <div className={styles.TeamPic}>
                        <Image
                          src={Team1}
                          alt={Team1}
                          className="img-fluid"
                          // layout='fill'
                        />
                      </div>
                      <div className={styles.TeamInfo}>
                        <h4 className={styles.TeamName}>{value.first_name}<span>{value.last_name}</span></h4>
                        <p className={styles.TeamPost}>{value.email}</p>
                        <div
                          className={` ${
                            buttonActive === value.name
                              ? styles.activeSocial
                              : ""
                          } ${styles.TeamSocial}`}
                        >
                          <Link href="https://www.google.com">
                            <a>
                              <FaFacebookF className="icon facebook" />
                            </a>
                          </Link>
                          <Link href="https://www.google.com">
                            <a>
                              <FaLinkedinIn className="icon linkedin" />
                            </a>
                          </Link>
                          <Link href="https://www.google.com">
                            <a>
                              <BsTwitter className="icon twitter" />
                            </a>
                          </Link>
                          <BsPlusLg
                            onClick={() => handleSocialClick(value.name)}
                            className="icon iconToggle"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
        {/* <ReactPaginate
        breakLabel={"..."}
        nextLabel={"next"}
        previousLabel={"previous"}
        pageRangeDisplayed={2}
        pageCount={1}
        marginPagesDisplayed={2}
        containerClassName={"pagination  justify-content-end"}
        pageLinkClassName={"page-link"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        onPageChange={handlePageClick}
        activeClassName={"active"}
      /> */}
      </section>
    </div>
  );
};
export default Teams;
