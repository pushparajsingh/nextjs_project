import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import styles from './Homepage.module.css'
// import ServiceIconImg from '../..'
import Image from 'next/image'
import { ServiceIcon } from '../Utils/ourServices';
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Title from '../common/Titles/Titles'

const Services = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const _renderModal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    return (
        <>
            <div className={styles.servicesContainerBg}>
                <Container>

                    <Row>
                        <Col lg={12}>
                            <div className={styles.themeTitleCenter}>
                                <Title
                                    value="all solutions are here"
                                    span="our"
                                    subTitle="domain expertise"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" xl={6} lg={4} md={4}>
                        {ServiceIcon?.map((value, index) => {
                            return (
                                <Col key={index}>
                                    <div className={styles.serviceCard}>
                                        <div className={styles.serviceIcon}>
                                            <Image
                                                alt={value.service}
                                                src={value.icon}
                                                className='img-fluid'
                                                height={58}
                                                width={58}
                                            />
                                        </div>
                                        <h5>{value.service}</h5>
                                        <Button onClick={handleShow} className={styles.serviceAction}>
                                            More Details
                                            <span><BsArrowRight /></span>
                                        </Button>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Button className="themeButton">
                                View more
                            </Button>
                        </Col>
                    </Row>

                </Container>
                {_renderModal()}
            </div>

        </>
    )
}
export default Services;