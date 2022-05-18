import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Image, Pagination } from "react-bootstrap";
import { FaUsers, FaPlus } from "react-icons/fa";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useRouter } from "next/router";
import { teamList, teamPage } from "../../../redux/Team/Team.action";
import { useSelector, useDispatch } from "react-redux";
import { dateTimeFormat } from "../../../constants";
import DesignationsList from "../Designation/DesignationsList";
import { RiArrowDownSLine } from "react-icons/ri";
import { designationsList } from "../../../redux/Designations/Designations.action";
import ReactPaginate from "react-paginate";
//import { normalizeRepeatedSlashes } from "next/dist/shared/lib/utils";
const TeamList = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [pages, setpages] = useState(0);
  const [pageno, setpageno] = useState(1);
  const params = useRouter();
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

  useEffect(() => {
    dispatch(teamList());
    // if(list){
    dispatch(teamPage(pageno));
    // }
  }, []);
  useEffect(() => {
    console.log("list", list);
    var items = list?.pagination?.total_entries;
  
    var data = (items / 5);
    setpages(data);
  }, [list]);

  const handlePageClick = (event) => {
    const data = event.selected + 1;
    setpageno(data);
    dispatch(teamPage(data));
  };
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
        <Col md={6} className="text-right">
          <Button
            variant="primary"
            onClick={() => params.push("/admin/team/create")}
          >
            Create
            <FaPlus />
          </Button>
        </Col>
        <Col md={6}>
          <Button variant="primary" onClick={() => handleModal()}>
            Designations
            <RiArrowDownSLine />
          </Button>
        </Col>
      </Row>
      <DesignationsList show={modalShow} onHide={() => setModalShow(false)} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last_Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Create At</th>
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
                <td>{team?.designation ? team?.description : "-"}</td>
                <td>{team?.email ? team?.email : "-"}</td>
                <td>{dateTimeFormat(team?.created_at)}</td>
              </tr>
            );
          })}
          {!page?.length && (
            <TableListNotFound colSpan={5} loading={pageLoading} />
          )}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel={"..."}
        nextLabel={">>"}
        previousLabel={"<<"}
        pageRangeDisplayed={2}
        pageCount={pages}
        marginPagesDisplayed={2}
        containerClassName={"pagination justify-content-center"}
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
