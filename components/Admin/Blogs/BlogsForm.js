import React,{useEffect,useState} from 'react'
import { Row,Col,Container,Form } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { useNotification } from '../../../contexts/NotificationContext';
import DeleteConfirmationModal from '../Utility/DeleteConfirmationModal';
import FormInput from '../../FormElements/FormInput';
import ActionFooter from '../Utility/ActionFooter';
import { useForm } from 'react-hook-form';
import {GrBlog} from "react-icons/gr";
import { blogsCreate,blogsDelete,blogsUpdate ,blogsDetails,blogsReset} from '../../../redux/Blogs/Blogs.action';
//import DatePicker from "react-datepicker";

const BlogsForm = () => {
  const params=useRouter();
  const {id}=params.query;
  const dispatch=useDispatch();
  const {Toast}=useNotification()
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [startDate, setStartDate] = useState();
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
    create: state?.blogs?.create,
    update: state?.blogs?.update,
    details: state?.blogs?.details,
    deleteblogs: state?.blogs?.delete,
    detailsLoading: state?.blogs?.detailsLoading,
    loading: state?.blogs?.createLoading || state?.blogs?.updateLoading,
    deleteLoading: state?.blogs?.deleteLoading,
  }));

  useEffect(() => {
    if (details) {
      setValue("category", details?.category);
      setValue("date", details?.date);
      setValue("title", details?.title);
      setValue("description", details?.description);
      setValue("id", details?.id);
      dispatch(blogsReset());
    }

    if (deleteblogs || create) {
      let message = "Blogs Added successfully.";
      if (deleteblogs) message = "Blogs deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
      dispatch(blogsReset());
      params.push("/admin/blogs");
    }

    if (update) {
      Toast.success("blogs updated successfully.");
      dispatch(blogsReset());
      params.push("/admin/blogs");
    }
  }, [create, update, details, deleteblogs]);
  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);
  useEffect(() => {
    if (id) dispatch(blogsDetails(id));
  }, []);
  const onSubmit = (data) => {
    
    if (id) {
      dispatch(blogsUpdate(id));
    } else {
      dispatch(blogsCreate(data));
    }
  };
  
  const handleDelete = () => {
    dispatch(blogsDelete(id));
  };
  return (
    <Container fluid>
    <Row className="mb-4">
      <Col md={12}>
        <div className="list-header">
          <GrBlog/>
          <div className="content">
            <h2>{id ? "Update" : "Create"} Blogs</h2>
            <p>Blogs</p>
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
            label="Category"
            name="category"
            placeholder="Type here...."
            {...register("category", {
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

export default BlogsForm