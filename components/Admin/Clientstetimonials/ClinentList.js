import React ,{useEffect, useState}from 'react';
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import { FaUsers, FaPlus } from "react-icons/fa";
import Button from "../../FormElements/Button";
import { useRouter } from "next/router";
import {clientList,clientPage} from "../../../redux/Client/Client.action"
import { useSelector, useDispatch } from "react-redux";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { dateTimeFormat } from "../../../constants";
import ReactPaginate from 'react-paginate'

const ClientsList  = () => {
 
    const dispatch = useDispatch();
    const params = useRouter();
    const [pages,setpages]=useState(0)
    const [pageno,setpageno]=useState(1)
    const { list, listLoading ,pageLoading,page} = useSelector((state) => ({
    list: state?.client?.list,
       listLoading: state?.client?.listLoading,
       page: state?.client?.page,
       pageLoading: state?.client?.pageLoading,
     }));
    useEffect(()=>{
      dispatch(clientList())
      dispatch(clientPage(pageno))
    },[])
    useEffect(()=>{
    var items = list?.pagination?.total_entries;
    var data = (items / 6);
    setpages(data);
    }, [list]);
    const onpageClick = (event) =>{
      const data = event.selected + 1;
          setpageno(data);
      dispatch(clientPage(data))
    }
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <FaUsers/>
            <div className="content">
              <h2>Clientstetimonials</h2>
              <p>Manage your clientstetimonials</p>
            </div>
          </div>
        </Col>
        <Col md={6} className="text-right">
          <Button
            variant="primary"
            onClick={() => params.push("/admin/clientstetimonials/create")}
          >
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
            <th>City</th>
            <th>Description</th>
            <th>created At</th>
          </tr>
        </thead>
          <tbody>
            {page?.map((client, index) => {
            return (
                <tr key={index}
                onClick={() => params.push(`/admin/client/${client.id}`)}>
                <td>{index + 1}</td>
                <td>
                  <Image
                    src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                    roundedCircle
                    height="40"
                    width="40"
                    alt="user"
                  />
                  <span className="ms-2">{client?.name}</span>
                </td>
                <td>{client?.city ? client?.city : "-"}</td>
                <td>{client?.description ? client?.description: "-"}</td>
                <td>{dateTimeFormat(client?.created_at)}</td>
              </tr>
            );
          })}
          {!page?.length && (
            <TableListNotFound colSpan={5} loading={pageLoading}/>
          )}   
        </tbody>   
        </Table>  
        <ReactPaginate
        breakLabel={"..."}
        nextLabel={"Next"}
        previousLabel={"previous"}
        pageCount={pages}
        containerClassName={"pagination justify-content-end"}
        pageLinkClassName={'page-link'}
        pageClassName={'page-item'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        onPageChange={onpageClick}
        activeClassName={'active'}
      />
      

        </Container>
       
    
  );
};

export default ClientsList ;
