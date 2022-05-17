import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { FaUsers } from "react-icons/fa";
import FormInput from "../../FormElements/FormInput";
import ActionFooter from "../Utility/ActionFooter";
import DeleteConfirmationModal from "../Utility/DeleteConfirmationModal";
import { useNotification } from "../../../contexts/NotificationContext";
import { useSelector, useDispatch } from "react-redux";
import { clientCreate, clientUpdate, clintDetails, clintDelete,clientReset } from "../../../redux/Client/Client.action"

const Clinents = () => {
  const dispatch = useDispatch();
  const params = useRouter();
  const { id } = params.query;
  const [openModal, setOpenModal] = useState(false);
  const { control, setValue, register, handleSubmit, formState: { errors }, } = useForm();
  const [isEdit, setIsEdit] = useState(false);
  const { Toast } = useNotification();

  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);


  const {
    create,
    update,
    deleteTeam,
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
    deleteTeam: state?.client?.delete,
    detailsLoading: state?.client?.detailsLoading,
    loading: state?.client?.createLoading || state?.client?.updateLoading,
    deleteLoading: state?.client?.deleteLoading,
  }));


  const onSubmit = (data) => {


    if (id) {

      dispatch(clientUpdate(id));
    }
    else {
      dispatch(clientCreate(data));
    }
  };


  useEffect(() => {
    if (details) {
      setValue("name", details?.name);
      setValue("city", details?.city);
      setValue("description", details?.description);
      //setValue("contact", details?.contact);
      setValue("id", details?.id);
      dispatch(clientReset());
    }

    if (deleteTeam || create) {
      let message = "Team Added successfully.";
      if (deleteTeam) message = "Team deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
       dispatch(clientReset());
      params.push("/admin/client");
    }

    if (update) {
      Toast.success("Team updated successfully.");
      params.push("/admin/client");
    dispatch(clientReset());
    }
  }, [create, update, details, deleteTeam]);









  useEffect(() => {

    if (id) dispatch(clintDetails(id));
  }, []);



  const handleDelete = () => {
    dispatch(clintDelete(id));
  };

  return (

    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>{id ? "Update" : "Create"} Team</h2>
              <p>Manage your client</p>
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

  )
}

export default Clinents;
