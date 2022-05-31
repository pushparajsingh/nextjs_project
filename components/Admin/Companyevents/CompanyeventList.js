import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useDispatch,useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { dateTimeFormat } from "../../../constants";
import ReactPaginate from "react-paginate";
import {MdEventBusy} from "react-icons/md";
import {MdCreateNewFolder} from "react-icons/md";
import { companyPage,companyList } from "../../../redux/companyevents/company.action";

const CompanyeventList = () => {
 
  const dispatch=useDispatch();
  const params=useRouter();
  const [pages, setpages] =useState(0);
  const [pageno, setpageno] =useState(1);

  const { list, listLoading, page, pageLoading } = useSelector((state) => ({
    list: state?.company?.list,
    listLoading: state?. company?.listLoading,
    page: state?. company?.page,
    pageLoading: state?. company?.pageLoading,
  }));

  const handlePageClick=(event)=>{
    const data = event.selected + 1;
    setpageno(data);
    dispatch(companyPage(data));
  }
  useEffect(()=>{
    dispatch(companyList());
    dispatch(companyPage(pageno))
       
  },[])
  useEffect(() => {
    var items = list?.pagination?.total_entries;
    var data = (items / 6);
    setpages(data);
  }, [list]);
  
  return (
    
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <MdEventBusy />
            <div className="content">
              <h2>Company</h2>
              <p>Company Events</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-right">
            <Button
              variant="primary"
              onClick={() => params.push("/admin/companyevent/create")}
            >
              Create
              <MdCreateNewFolder />
            </Button>
          </div>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Location</th>
            <th>Create_At</th>
            <th>Updated_At</th>
          </tr>
        </thead>
          <tbody>
          {page?.map((company, index) => {
            return (
              <tr
                key={index}
                onClick={() => params.push(`/admin/companyevent/${company.id}`)}
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
                  <span className="ms-2">{company?.title}</span>
                </td>
                
                <td>{company?.description}</td>
                <td>{company?.date}</td>
               <td>{company.location}</td>
                <td>{dateTimeFormat(company?.created_at)}</td>
                <td>{dateTimeFormat(company?.updated_at)}</td>
              </tr>
            );
          })}
          {!page?.length && (
            <TableListNotFound colSpan={7} loading={pageLoading} />
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
  );
};

export default CompanyeventList;