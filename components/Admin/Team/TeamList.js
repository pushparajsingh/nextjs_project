import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import { FaUsers, FaPlus } from "react-icons/fa";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useRouter } from "next/router";
import { teamList } from "../../../redux/Team/Team.action";
import { useSelector, useDispatch } from "react-redux";
import { dateTimeFormat } from "../../../constants";
import ReactPaginate from 'react-paginate'

const TeamList = () => {
  const dispatch = useDispatch();
  const params = useRouter();
  //const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  //const [page,setPage] = useState()

  const { list, listLoading } = useSelector((state) => ({
    list: state?.team?.list,
    listLoading: state?.team?.listLoading,
  }));

  useEffect(() => {
    dispatch(teamList());
  }, []);

  const onpageClick=()=>{
  //  let count=page+1
    // setPage(count)
  }
 

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <FaUsers/>
            <div className="content">
              <h2>Team</h2>
              <p>Manage your Team</p>
            </div>
          </div>
        </Col>
        <Col md={6} className="text-right">
          <Button
            variant="primary"
            onClick={() => params.push("/admin/team/create")}>
            Create
            <FaPlus/>
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Create At</th>
          </tr>
        </thead>
        <tbody>
          {list?.data?.map((team, index) => {
            return (
              <tr key={index}
                onClick={() => params.push(`/admin/team/${team.id}`)}>
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
                <td>{team?.designation ? team?.designation : "-"}</td>
                <td>{team?.email ? team?.email : "-"}</td>
                <td>{dateTimeFormat(team?.created_at)}</td>
              </tr>
            );
          })}
          {!list?.data?.length && (
            <TableListNotFound colSpan={5} loading={listLoading}/>
          )}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel={"..."}
        nextLabel={"Next"}
        previousLabel={"previous"}
        pageRangeDisplayed={5}
        pageCount={10}
        marginPagesDisplayed={2}
        containerClassName={"pagination justify-content-center"}
        pageLinkClassName={'page-link'}
        pageClassName={'page-item'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        onPageChange={onpageClick()}
        activeClassName={'active'}
      />
    </Container>
  );
};
export default TeamList;
