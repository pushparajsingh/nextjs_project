import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ServiceIconDetails } from "../Utils/ourServices";


const ServiceModal = (props) => {
 console.log(props)
    const handleClose = () => props.setShow(false);
    // console.log(9999,ServiceIconDetails)
    // console.log(888,props.id)
    // console.log(777,ServiceIconDetails.filter((item)=>item.id==props.id).map((item)=>item.title))


    return (
        <>
            {
                  <Modal show={props.show} onHide={handleClose} centered>
                  <Image
                        alt={props?.data?.service}
                        src={props?.data?.icon}
                        className="img-fluid"
                        height={58}
                        width={58}
                      />
                            <Modal.Header closeButton>
                                <Modal.Title>{props?.data?.service}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{props?.data?.description}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark" onClick={handleClose}>
                                    Close
                                </Button>
                                {/* <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button> */}
                            </Modal.Footer>
                        </Modal>
            }
        </>
    )
}
export default ServiceModal