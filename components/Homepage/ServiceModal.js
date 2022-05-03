import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ServiceModal = (props) => {

    const handleClose = () => props.setShow(false);

    return (
        <>

            <Modal show={props.show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ServiceModal