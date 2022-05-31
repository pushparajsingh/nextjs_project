import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import {FaGraduationCap} from "react-icons/fa";
import { TableListNotFound } from "../Utility/NoRecordFound";
import Button from "../../FormElements/Button";
import { IoCreate } from 'react-icons/io5';
import { useRouter } from "next/router";
import {careerList, careerPage} from "../../../redux/Careers/Careers.action"
import { useSelector, useDispatch } from "react-redux";
import { dateTimeFormat } from "../../../constants";
import ReactPaginate from 'react-paginate';

const CareersList= () => {


  const params = useRouter();
  const dispatch = useDispatch();
  const [pages,setpages]=useState(0);
  const [pageno,setpageno]=useState(1);
  const { list, listLoading, page, pageLoading } = useSelector((state) => ({
    list: state?.careers?.list,
    listLoading: state?.careers?.listLoading,
    page: state?.careers?.page,
    pageLoading: state?.careers?.pageLoading,
  }));
  const handlePageClick=(event)=>{
    const data = event.selected + 1;
    setpageno(data);
    dispatch(careerPage(data));
  }
  useEffect(()=>{
     dispatch(careerList())
     dispatch(careerPage(pageno))
  },[])
  useEffect(()=>{
    var items = list?.pagination?.total_entries;
    var data = (items / 6);
    setpages(data);
  }, [list]);
  
  return (
    <div>
      <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
          
            <FaGraduationCap />
            <div className="content">
              <h2>Career</h2>
              <p>career</p>
            </div>
          </div>
        </Col>
         <Col md={6} className="text-right">
          <Button
            variant="primary"
             onClick={() => params.push("/admin/careers/create" )}
          >
            Create
            <IoCreate />
          </Button>
        </Col> 
      
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Create At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {page?.map((careers, index) => {
            return (
              <tr
                key={index}
                 onClick={() => params.push(`/admin/careers/${careers.id}`)}
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
                  <span className="ms-2">{careers?.name}</span>
                </td>
                 <td>{careers?.description ? careers?.description : "-"}</td>
                 <td>{dateTimeFormat(careers?.created_at)}</td>
                 <td>{dateTimeFormat(careers?.updated_at)}</td>
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
        nextLabel={"next"}
        previousLabel={"previous"}
        pageRangeDisplayed={2}
        pageCount={pages}
        marginPagesDisplayed={2}
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
      </Container>



    </div>
  )
}

export default CareersList;