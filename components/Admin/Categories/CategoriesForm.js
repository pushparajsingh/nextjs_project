import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Container, Row, Col } from "react-bootstrap";
import {MdOutlineCategory} from "react-icons/md";
import FormInput from "../../FormElements/FormInput";
import { useRouter } from "next/router";
import ActionFooter from "../Utility/ActionFooter";
import { useNotification } from "../../../contexts/NotificationContext";
import DeleteConfirmationModal from "../Utility/DeleteConfirmationModal";
import { useSelector, useDispatch } from "react-redux";
import {categoriesCreate,categoriesDelete, categoriesDetails, categoriesReset, categoriesUpdate} from "../../../redux/Categories/categories.action"

const CategoriesForm = () => {

  const params = useRouter();
  const { id } = params.query;
  const dispatch = useDispatch();

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
    deleteTeam,
    details,
    detailsLoading,
    deleteLoading,
    loading,
    allState,
  } = useSelector((state) => ({
    allState: state,
    create: state?.categories?.create,
    update: state?.categories?.update,
    details: state?.categories?.details,
    deleteTeam: state?.categories?.delete,
    detailsLoading: state?.categories?.detailsLoading,
    loading: state?.team?.createLoading || state?.categories?.updateLoading,
    deleteLoading: state?.categories?.deleteLoading,
  }));
  useEffect(() => {
    if (details) {
      setValue("name", details?.name);
      setValue("id", details?.id);
      dispatch(categoriesReset());
    }

    if (deleteTeam || create) {
      let message = "Team Added successfully.";
      if (deleteTeam) message = "Team deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
      dispatch(categoriesReset());
      params.push("/admin/categories");
    }

    if (update) {
      Toast.success("Team updated successfully.");
      dispatch(categoriesReset());
      params.push("/admin/categories");
    }
  }, [create, update, details, deleteTeam]);

  const onSubmit = (data) => {
    if (id) {
      dispatch(categoriesUpdate(id))
    } else {
      dispatch(categoriesCreate(data));
    }
    
  };
  const handleDelete = () => {
    dispatch(categoriesDelete(id));
    };
  useEffect(() => {
    if (id) dispatch(categoriesDetails(id));
  }, []);

  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);

  


  return (
    <Container fluid>
    <Row className="mb-4">
      <Col md={12}>
        <div className="list-header">
         <MdOutlineCategory/>
          <div className="content">
            <h2>{id ? "Update" : "Create"} Categories</h2>
            <p>Categories</p>
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
            label=" Name"
            name="name"
            placeholder="Type here"
            {...register("name", {
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
  )
}

export default CategoriesForm