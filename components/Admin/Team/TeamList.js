import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import { FaUsers, FaPlus } from "react-icons/fa";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useRouter } from "next/router";
import { teamList, teamPage } from "../../../redux/Team/Team.action";
import { useSelector, useDispatch } from "react-redux";
import { dateTimeFormat } from "../../../constants";
import DesignationsList from "../Designation/DesignationsList";
import { BsChevronDoubleDown } from "react-icons/bs";
import { designationsList } from "../../../redux/Designations/Designations.action";
import ReactPaginate from "react-paginate";
//import { normalizeRepeatedSlashes } from "next/dist/shared/lib/utils";
const TeamList = () => {
  const dispatch = useDispatch();
  const params = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [pages, setpages] = useState(0);
  const [pageno, setpageno] = useState(1);

  const { list, listLoading, page, pageLoading } = useSelector((state) => ({
    list: state?.team?.list,
    listLoading: state?.team?.listLoading,
    page: state?.team?.page,
    pageLoading: state?.team?.pageLoading,
  }));
  const handleModal = () => {
    setModalShow(true);
    dispatch(designationsList());
  };
  const handlePageClick = (event) => {
    const data = event.selected + 1;
    setpageno(data);
    dispatch(teamPage(data));
  };
  useEffect(() => {
    dispatch(teamList());
    dispatch(teamPage(pageno));
  }, []);
  useEffect(() => {
    var items = list?.pagination?.total_entries;
    var data = items /6;
    setpages(data);
  }, [list]);

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>Team</h2>
              <p>Manage Your Team</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-rights">
            <Button variant="primary" onClick={() => handleModal()}>
              Designations
              <BsChevronDoubleDown />
            </Button>
            <Button
              variant="primary"
              onClick={() => params.push("/admin/team/create")}
            >Create
              <FaPlus />
            </Button>
          </div>
        </Col>
      </Row>
      <DesignationsList show={modalShow} onHide={() => setModalShow(false)} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last_Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Create_At</th>
            <th>Updated_At</th>
          </tr>
        </thead>
        <tbody>
          {page?.map((team, index) => {
            return (
              <tr
                key={index}
                onClick={() => params.push(`/admin/team/${team.id}`)}
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
                  <span className="ms-2">{team?.first_name}</span>
                </td>
                <td>{team?.last_name}</td>
                <td>{team?.description}</td>
                <td>{team?.email ? team?.email : "-"}</td>
                <td>{team?.contact}</td>
                <td>{dateTimeFormat(team?.created_at)}</td>
                <td>{dateTimeFormat(team?.updated_at)}</td>
              </tr>
            );
          })}
          {!page?.length && (
            <TableListNotFound colSpan={8} loading={pageLoading} />
          )}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel={"..."}
        nextLabel={"next"}
        previousLabel={"previous"}
        pageRangeDisplayed={2}
        pageCount={pages}
        marginPagesDisplayed={2}
        containerClassName={"pagination  justify-content-end"}
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
    </Container>
  );
};
export default TeamList;
