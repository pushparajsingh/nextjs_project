import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { dateTimeFormat } from "../../../constants";
import { AiOutlineCloseCircle, AiTwotoneEdit } from "react-icons/ai";
import { IoCreateSharp } from "react-icons/io5";
import { FaListOl } from "react-icons/fa";
import DesignationsForm from "./DesignationsForm";
import { MdDeleteForever } from "react-icons/md";
import ReactPaginate from "react-paginate";
import {
  designationDelete,
  designationDetails,
  designationReset,
  designationsList,
  designationPage,
} from "../../../redux/Designations/Designations.action";
import { useNotification } from "../../../contexts/NotificationContext";

const DesignationsList = (props) => {
  const { list, listLoading, create, deleteDesignations, page, pageLoading } =
    useSelector((state) => ({
      list: state?.designations?.list,
      listLoading: state?.designations?.listLoading,
      create: state?.designations?.create,
      deleteDesignations: state?.designations?.delete,
      page: state?.designations?.page,
      pageLoading: state?.designations?.pageLoading,
    }));

  const dispatch = useDispatch();
  const [pages, setpages] = useState(0);
  const [pageno, setpageno] = useState(1);

  const { Toast } = useNotification();

  const [show, setShow] = useState(false);

  const handleForm = () => {
    setShow(true);
  };
  
  const handleDelete = (id) => {
    dispatch(designationDelete(id));
  };

  const handleEdit = (id) => {
    dispatch(designationDetails(id));
    setShow(true);
  };
  

  useEffect(() => {
    dispatch(designationPage(pageno));
    if (deleteDesignations || create) {
      let message = "Designation Added successfully.";
      if (deleteDesignations) message = "Designation deleted successfully.";
      Toast.success(message);
      dispatch(designationReset());
      //dispatch(designationsList());
    }
  }, [deleteDesignations, create]);

  useEffect(() => {
    var items = list?.pagination?.total_entries;
    var data = (items / 6);
    setpages(data);
  }, [list]);

  const handlePageClick = (event) => {
    const data = event.selected + 1;
    setpageno(data);
    dispatch(designationPage(data));
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <FaListOl /> Designation-List
          </Modal.Title>

          <Button variant="primary" onClick={() => handleForm()}>
            Create
            <IoCreateSharp />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Create_At</th>
                <th>Updated_At</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {page?.map((designations, index) => {
                return (
                  <tr
                    key={index}
                    
                  >
                    <td>{index + 1}</td>
                    <td>
                      <Image
                        src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                        roundedCircle
                        height="40"
                        width="40"
                        alt="user"
                      />
                      <span className="ms-2">{designations?.name}</span>
                    </td>
                    <td>{dateTimeFormat(designations?.created_at)}</td>
                    <td>{dateTimeFormat(designations?.updated_at)}</td>
                    <td>
                      <Button onClick={() => handleDelete(designations.id)}>
                        Delete
                        <MdDeleteForever />
                      </Button>
                    </td>
                    <td>
                      <Button onClick={() => handleEdit(designations.id)}>
                        Edit
                        <AiTwotoneEdit />
                      </Button>
                    </td>
                  </tr>
                );
              })}
              {!page?.length && (
                <TableListNotFound colSpan={5} loading={pageLoading} />
              )}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">
            Close <AiOutlineCloseCircle />
          </Button>
        </Modal.Footer>
        <ReactPaginate
          breakLabel={"..."}
          nextLabel={"Next"}
          previousLabel={"previous"}
          pageRangeDisplayed={5}
          pageCount={pages}
          containerClassName={"pagination justify-content-end"}
          pageLinkClassName={"page-link"}
          pageClassName={"page-item"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          onPageChange={handlePageClick}
          activeClassName={"active"}
        />
      </Modal>

      {/*Create-Form */}
      <DesignationsForm show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default DesignationsList;
