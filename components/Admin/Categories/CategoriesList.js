import React,{useEffect,useState} from 'react';
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import {MdOutlineCategory,MdCreateNewFolder,MdCategory} from "react-icons/md";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { dateTimeFormat } from "../../../constants";
import ReactPaginate from "react-paginate";
import { categoriesList, categoriesPage } from '../../../redux/Categories/categories.action';

const CategoriesList = () => {

  const dispatch = useDispatch();
  const params = useRouter();
  const [pages, setpages] = useState(0);
  const [pageno, setpageno] = useState(1);

  const { list, listLoading, page, pageLoading } = useSelector((state) => ({
    list: state?.categories?.list,
    listLoading: state?.categories?.listLoading,
    page: state?.categories?.page,
    pageLoading: state?.categories?.pageLoading,
  }));
  useEffect(()=>{
      dispatch(categoriesList())
      dispatch(categoriesPage(pageno));
  },[])
  const handlePageClick = (event) => {
    const data = event.selected + 1;
    setpageno(data);
    dispatch(categoriesPage(data));
  };
  
  useEffect(() => {
    var items = list?.pagination?.total_entries;
    var data = (items / 5);
    setpages(data);
  }, [list]);
  
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <MdCategory/>
            
            <div className="content">
              <h2>Categories</h2>
              <p>categories</p>
            </div>
          </div>
        </Col>
        <Col md={6} className="text-right">
          <Button
            variant="primary"
            onClick={() => params.push("/admin/categories/create")}
          >
            Create
            <MdCreateNewFolder />
          </Button>
        </Col>
        </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Create_At</th>
            <th>Update_At</th>
          </tr>
        </thead>
        <tbody>
          {page?.map((categories, index) => {
            return (
              <tr
                key={index}
                onClick={() => params.push(`/admin/categories/${categories.id}`)}
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
                  <span className="ms-2">{categories?.name}</span>
                </td>
                <td>{dateTimeFormat(categories?.created_at)}</td>
                <td>{dateTimeFormat(categories?.updated_at)}</td>
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
export default CategoriesList;