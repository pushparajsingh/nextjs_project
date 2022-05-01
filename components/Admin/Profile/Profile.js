import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Container, Row, Col, Modal } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import Button from "../../FormElements/Button";
import FormInput from "../../FormElements/FormInput";
import ActionFooter from "../Utility/ActionFooter";
import { useRouter } from "next/router";
import { useNotification } from "../../../contexts/NotificationContext";

const Profile = () => {
  const params = useRouter();
  const { id } = params.query;
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const { Toast } = useNotification();
  const [isEdit, setIsEdit] = useState(false);

  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Toast.success("Successfully updpated.");
  };

  const handleChangePassword = (data) => {
    debugger;
  };

  const handleCloseModal = (data) => {
    reset();
    setChangePasswordModal(false);
  };

  const _renderChangePassword = () => {
    return (
      <Modal show={changePasswordModal} centered>
        <Modal.Header>
          <Modal.Title>Change password</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(handleChangePassword)}>
          <Modal.Body>
            <FormInput
              type="password"
              label="Current Password"
              name="currentPassword"
              placeholder="Type here"
              {...register("currentPassword", {
                required: true,
              })}
              errors={errors}
            />
            <FormInput
              type="password"
              label="New Password"
              name="newPassword"
              placeholder="Type here"
              {...register("newPassword", {
                required: true,
              })}
              errors={errors}
            />
            <FormInput
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Type here"
              {...register("confirmPassword", {
                required: true,
              })}
              errors={errors}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleCloseModal()}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>Profile</h2>
              <p>Manage your profile</p>
            </div>
          </div>
        </Col>
        <Col md={6} className="text-right">
          <Button
            variantt="primary"
            onClick={() => setChangePasswordModal(true)}
          >
            Change password
          </Button>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Name"
          name="name"
          placeholder="Type here"
          {...register("name", {
            required: true,
          })}
          errors={errors}
          disabled={isEdit}
        />
        <ActionFooter isEdit={isEdit} setIsEdit={setIsEdit} />
      </Form>
      {_renderChangePassword()}
    </Container>
  );
};
export default Profile;
