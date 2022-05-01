import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../FormElements/FormInput";
import { FaTrashAlt, FaCheck, FaPencilAlt } from "react-icons/fa";

const ActionFooter = ({ setOpenModal, isEdit, setIsEdit }) => {
  const params = useRouter();
  const { id } = params.query;

  const handleCancel = () => {
    if (!id) {
      params.back();
    } else {
      if (id && isEdit) {
        params.back();
      } else {
        setIsEdit(true);
      }
    }
  };

  return (
    <div className="action-footer">
      <Button variant="secondary" className="me-2" onClick={handleCancel}>
        Cancel
      </Button>

      {isEdit && id && (
        <Button
          variant="primary"
          className="me-2"
          onClick={() => setIsEdit(false)}
        >
          Edit
          <FaPencilAlt />
        </Button>
      )}

      {!isEdit && (
        <Button variant="primary" type="submit" className="me-2">
          Save
          <FaCheck />
        </Button>
      )}

      {id && !isEdit && (
        <Button variant="danger" onClick={() => setOpenModal(true)}>
          Delete
          <FaTrashAlt />
        </Button>
      )}
    </div>
  );
};
export default ActionFooter;
