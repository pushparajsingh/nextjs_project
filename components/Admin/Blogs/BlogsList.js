import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { dateTimeFormat } from "../../../constants";
import { FaBlog } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import { blogsList, blogsPage } from "../../../redux/Blogs/Blogs.action";

const BlogsList = () => {
  const dispatch = useDispatch();
  const params = useRouter();
  const [pages, setpages] = useState(0);
  const [pageno, setpageno] = useState(1);

  const { list, listLoading, page, pageLoading } = useSelector((state) => ({
    list: state?.blogs?.list,
    listLoading: state?.blogs?.listLoading,
    page: state?.blogs?.page,
    pageLoading: state?.blogs?.pageLoading,
  }));
  const handlePageClick=(event)=>{
    const data = event.selected + 1;
    setpageno(data);
    dispatch(blogsPage(data));
  }
  useEffect(()=>{
    dispatch(blogsList());
    dispatch(blogsPage(pageno))
       
  },[])
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
            <FaBlog />
            <div className="content">
              <h2>Blog</h2>
              <p>Blogs</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="text-right">
            <Button
              variant="primary"
              onClick={() => params.push("/admin/blogs/create")}
            >
              Create
              <IoCreateOutline />
            </Button>
          </div>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Title</th>
            <th>Create_At</th>
            <th>Updated_At</th>
          </tr>
        </thead>
         <tbody>
          {page?.map((blogs, index) => {
            return (
              <tr
                key={index}
                onClick={() => params.push(`/admin/blogs/${blogs.id}`)}
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
                  <span className="ms-2">{blogs?.category}</span>
                </td>
                
                <td>{blogs?.description}</td>
                <td>{blogs?.date}</td>
               <td>{blogs.title}</td>
                <td>{dateTimeFormat(blogs?.created_at)}</td>
                <td>{dateTimeFormat(blogs?.updated_at)}</td>
              </tr>
            );
          })}
          {!page?.length && (
            <TableListNotFound colSpan={5} loading={listLoading} />
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

export default BlogsList;
