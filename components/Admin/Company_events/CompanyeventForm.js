import React,{useEffect,useState} from 'react'
import { Row,Col,Container,Form } from 'react-bootstrap';
import {VscSymbolEvent} from "react-icons/vsc";
import DeleteConfirmationModal from '../Utility/DeleteConfirmationModal';
import FormInput from '../../FormElements/FormInput';
import ActionFooter from '../Utility/ActionFooter';
import { useSelector,useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/dist/client/router';
import { useNotification } from '../../../contexts/NotificationContext';
import { companyCreate ,companyReset,companyDetails,companyUpdate,companyDelete} from '../../../redux/company_events/company.action';

const CompanyeventForm = () => {
 
  const params=useRouter();
   const {id}=params.query;
   const dispatch=useDispatch();
   const {Toast}=useNotification()
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
    deleteblogs,
    details,
    detailsLoading,
    deleteLoading,
    loading,
    allState,
  } = useSelector((state) => ({
    allState: state,
    create: state?.company?.create,
    update: state?.company?.update,
    details: state?.company?.details,
    deleteblogs: state?.company?.delete,
    detailsLoading: state?.company?.detailsLoading,
    loading: state?.company?.createLoading || state?.company?.updateLoading,
    deleteLoading: state?.company?.deleteLoading,
  }));
   useEffect(() => {
    if (details) {
      setValue("location", details?.location);
      setValue("date", details?.date);
      setValue("title", details?.title);
      setValue("description", details?.description);
      setValue("id", details?.id);
      dispatch(companyReset());
    }

    if (deleteblogs || create) {
      let message = "Company events Added successfully.";
      if (deleteblogs) message = "Company events deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
      dispatch(companyReset());
     params.push("/admin/companyevent");
    }

    if (update) {
      Toast.success("Company_events updated successfully.");
     dispatch(companyReset());
      params.push("/admin/companyevent");
    }
  }, [create, update, details, deleteblogs]);
  const onSubmit = (data) => {
    
    if (id) {
      dispatch(companyUpdate(id));
    } else {
      dispatch(companyCreate(data));
    }
     
  };
  useEffect(() => {
    if (id) dispatch(companyDetails(id));
  }, []);
  const handleDelete=()=>{
      dispatch(companyDelete(id));
  }
  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);
  return (
    <Container fluid>
    <Row className="mb-4">
      <Col md={12}>
        <div className="list-header">
          <VscSymbolEvent/>
          <div className="content">
            <h2>{id ? "Update" : "Create"} Company</h2>
            <p>Company</p>
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
            label="Location"
            name="location"
            placeholder="Type here...."
            {...register("location", {
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
            placeholder="Type here...."
            {...register("description", {
              required: true,
            })}
            errors={errors}
            disabled={isEdit}
          />
        </Col>
        <Col md={6}>
          <FormInput
            label="Title"
            name="title"
            placeholder="Type here...."
            {...register("title", {
              required: true,
            })}
            errors={errors}
            disabled={isEdit}
          />
        </Col>
        <Col md={6}>
          <FormInput
            label="Date"
            name="date"
            type="date"
            placeholder="Type here...."
            {...register("date", {
              required: true,
            })}
            errors={errors}
            disabled={isEdit}
          />
        </Col>
        {/* <Col md={6}>
        <DatePicker
              innerRef={register("date")}
              name="date"
              className={"form-control"}
              selected={startDate}
              onChange={date => setStartDate(date)}
            
            />
        </Col> */}
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

export default CompanyeventForm;