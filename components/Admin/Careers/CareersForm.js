import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Container, Row, Col } from "react-bootstrap";
import { FcGraduationCap } from "react-icons/fc";
import FormInput from "../../FormElements/FormInput";
//import FormSelect from "../../FormElements/FormSelect";
import ActionFooter from "../Utility/ActionFooter";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useNotification } from "../../../contexts/NotificationContext";
import DeleteConfirmationModal from "../Utility/DeleteConfirmationModal";

import { careerReset ,careerCreate,careerDelete, careerDetails,careerUpdate,careerList} from "../../../redux/Careers/Careers.action";

const CareersForm = () => {

  const params = useRouter();
  const { id } = params.query;
  const dispatch = useDispatch();
  const { Toast } = useNotification();
  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {
    create,
    update,
    deleteCareers,
    details,
    detailsLoading,
    deleteLoading,
    loading,
    allState,
  } = useSelector((state) => ({
    allState: state,
    create: state?.careers?.create,
    update: state?.careers?.update,
    details: state?.careers?.details,
    deleteCareers: state?.careers?.delete,
    detailsLoading: state?.careers?.detailsLoading,
    loading: state?.careers?.createLoading || state?.careers?.updateLoading,
    deleteLoading: state?.careers?.deleteLoading,
  }));

  const onSubmit = (data) => {
    if (id) {
      dispatch(careerUpdate(data))
      
    } else {
      dispatch(careerCreate(data))
    }
    
  };
  const handleDelete = () => {
     dispatch(careerDelete(id));
  };
  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);
  useEffect(() => {
    if (id) dispatch(careerDetails(id));
  }, []);

  useEffect(() => {
    if (details) {
      setValue("name", details?.name);
      setValue("description", details?.description);
      setValue("id", details?.id);
      dispatch(careerReset());
    }
    if (deleteCareers || create) {
      let message = "Career Added successfully.";
      if (deleteCareers) message = "Career deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
      dispatch(careerReset());
      params.push("/admin/careers");
    }

    if (update) {
      Toast.success("Career updated successfully.");
      dispatch(careerReset());
      dispatch(careerList())
      params.push("/admin/careers");
    }
  }, [create, update, details, deleteCareers]);
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <div className="list-header">
            <FcGraduationCap />
            <div className="content">
              <h2>{id ? "Update" : "Create"} Career</h2>
              <p>career</p>
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
              label="Name"
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

export default CareersForm;
