import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../FormElements/FormInput";

const DeleteConfirmationModal = ({ openModal, setOpenModal, handleDelete }) => {
  return (
    <Modal show={openModal} centered>
      <Modal.Header>
        <Modal.Title>Delete team</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure want to delete team ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpenModal(false)}>
          No
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteConfirmationModal;
