import React from "react";
import { useRouter } from "next/router";
import Button from "../../FormElements/Button";
import { FaTrashAlt, FaCheck, FaPencilAlt } from "react-icons/fa";

const ActionFooter = ({
  isEdit,
  loading,
  setOpenModal,
  setIsEdit,
  isHideDelete,
}) => {
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
        <Button
          variant="primary"
          type="submit"
          className="me-2"
          loading={loading}
        >
          Save
          <FaCheck />
        </Button>
      )}

      {!isHideDelete && id && !isEdit && (
        <Button variant="danger" onClick={() => setOpenModal(true)}>
          Delete
          <FaTrashAlt />
        </Button>
      )}
    </div>
  );
};
export default ActionFooter;
