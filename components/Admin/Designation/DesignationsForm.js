import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { designationCreate, designationReset,designationUpdate,designationsList } from "../../../redux/Designations/Designations.action";
import { BsCheckSquareFill } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
import { useNotification } from "../../../contexts/NotificationContext";



const DesignationsForm = (props) => {
  
  const [ids,setids]=useState()
  
  const {
    details,
    detailsLoading,
    loading,
    allState,
    update,
    id
  } = useSelector((state) => ({
    allState: state,
    update: state?.designations?.update,
    details: state?.designations?.details,
    detailsLoading: state?.designations?.detailsLoading,
    id:state?.designations?.id,
    loading:
      state?.designations?.createLoading || state?.designations?.updateLoading,
  }));
  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { Toast } = useNotification();

    
  const onSubmit = (data) => {
  
    if(ids){
     
      dispatch(designationUpdate(data))
    }
    else{ dispatch(designationCreate(data)); }
      
    };
  useEffect(() => {
    if (details) {
     
      const record=details?.id
      setids(record)
      setValue("name", details?.name);
      setValue("id",details?.id)
     dispatch(designationReset());
     
    }
    if (update) {
      Toast.success("Designation updated successfully.");
      dispatch(designationReset());
  
    }


  },[details,update]);
  useEffect(()=>{
   dispatch(designationsList())
  },[])
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Designation-Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            {
              ids ?
                <span>
              <Button type="submit" >Save</Button>
              <Button type="button" onClick={props.onHide} >Cancel</Button>
            </span>
            : <Button  type="submit" >
            Submit
            <BsCheckSquareFill />
          </Button>}
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>
            Close
            <CgCloseR />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DesignationsForm;
