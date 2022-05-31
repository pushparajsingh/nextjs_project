import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { FaUsers } from "react-icons/fa";
import FormInput from "../../FormElements/FormInput";
import ActionFooter from "../Utility/ActionFooter";
import DeleteConfirmationModal from "../Utility/DeleteConfirmationModal";
import { useNotification } from "../../../contexts/NotificationContext";
import { useSelector, useDispatch } from "react-redux";
import {
  clientCreate,
  clientUpdate,
  clientDetails,
  clientDelete,
  clientReset,
} from "../../../redux/Clientstetimonials/Client.action.js";

const ClientstetimonialsForm = () => {
  const dispatch = useDispatch();
  const params = useRouter();
  const { id } = params.query;
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { Toast } = useNotification();
  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    create,
    update,
    deleteclient,
    details,
    detailsLoading,
    deleteLoading,
    loading,
    allState,
  } = useSelector((state) => ({
    allState: state,
    create: state?.client?.create,
    update: state?.client?.update,
    details: state?.client?.details,
    deleteclient: state?.client?.delete,
    detailsLoading: state?.client?.detailsLoading,
    loading: state?.client?.createLoading || state?.client?.updateLoading,
    deleteLoading: state?.client?.deleteLoading,
  }));

  const onSubmit = (data) => {
    if (id) {
      dispatch(clientUpdate(data));
    } else {
      dispatch(clientCreate(data));
    }
  };

  useEffect(() => {
    if (details) {
      setValue("name", details?.name);
      setValue("city", details?.city);
      setValue("description", details?.description);
      setValue("id", details?.id);
      dispatch(clientReset());
    }

    if (deleteclient|| create) {
      let message = "Client Added successfully.";
      if (deleteclient) message = "Client deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
      dispatch(clientReset());
      params.push("/admin/clientstetimonials");
    }

    if (update) {
      Toast.success("Client updated successfully.");
      params.push("/admin/clientstetimonials");
      dispatch(clientReset());
    }
  }, [create, update, details, deleteclient]);

  useEffect(() => {
    if (id) dispatch(clientDetails(id));
  }, []);
  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);
  const handleDelete = () => {
    dispatch(clientDelete(id));
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>{id ? "Update" : "Create"} Clientstetimonials</h2>
              <p>Manage your Clientstetimonials</p>
            </div>
          </div>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {id && (
          <FormInput
            name="id"
            type="hidden"
            {...register("id")}
            errors={errors}
            disabled={isEdit}
          />
        )}
        <Row>
        <Col md={6}>
          <FormInput
            label="First Name"
            name="name"
            placeholder="Type here"
            {...register("name", {
              required: true,
            })}
            errors={errors}
            disabled={isEdit}
          />
        </Col>
        <Col md={6}>
          <FormInput
            label="City"
            name="city"
            placeholder="Type here"
            {...register("city", {
              required: true,
            })}
            errors={errors}
            disabled={isEdit}
          />
        </Col>
        <Col md={6}>
          <FormInput
            as="textarea"
            label="Description"
            name="description"
            placeholder="Type here"
            {...register("description", {
              required: true,
            })}
            errors={errors}
            disabled={isEdit}
          />
        </Col>
        </Row>
        <ActionFooter
          isEdit={isEdit}
          loading={loading}
          setIsEdit={setIsEdit}
          setOpenModal={setOpenModal}
        />
        <DeleteConfirmationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleDelete={handleDelete}
          deleteLoading={deleteLoading}
        />
      </Form>
    </Container>
  );
};

export default ClientstetimonialsForm ;
