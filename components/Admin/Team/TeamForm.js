import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Container, Row, Col, Modal, Image } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import { FormInput } from "../../FormElements/FormInput";
import { useRouter } from "next/router";
import { emailPattern } from "../../../constants";
import ActionFooter from "../Utility/ActionFooter";
import { useNotification } from "../../../contexts/NotificationContext";
import DeleteConfirmationModal from "../Utility/DeleteConfirmationModal";
import { propTypes } from "react-bootstrap/esm/Image";

const TeamForm = () => {
  const params = useRouter();
  const { id } = params.query;
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { Toast } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(111, data);
    let message = "Team Added successfully.";
    if (id) message = "Team Updated successfully.";
    Toast.success(message);
    if (!id) {
      params.push("/admin/team");
    }
  };

  useEffect(() => {
    if (id) setIsEdit(true);
  }, []);

  const handleDelete = () => {
    setOpenModal(false);
    Toast.success("Delete successfully.");
    params.push("/admin/team");
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>{id ? "Update" : "Create"} Team</h2>
              <p>Manage your Team</p>
            </div>
          </div>
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
        <FormInput
          label="Email"
          name="email"
          placeholder="me@gmail.com"
          {...register("email", {
            required: true,
            pattern: {
              value: emailPattern,
              message: "Email should be in valid format.",
            },
          })}
          errors={errors}
          disabled={isEdit}
        />
        <label className="form-label">Designation</label>
        <Form.Select aria-label="Select one" disabled={isEdit}>
          <option>Select one</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <ActionFooter
          setOpenModal={setOpenModal}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        <DeleteConfirmationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleDelete={handleDelete}
        />
      </Form>
    </Container>
  );
};
export default TeamForm;
