import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import { FaUsers, FaPlus } from "react-icons/fa";
import Button from "../../FormElements/Button";
import { TableListNotFound } from "../Utility/NoRecordFound";
import { useRouter } from "next/router";

const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TeamList = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const params = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setList([...userList]);
    }, 900);
  }, []);

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>Team</h2>
              <p>Manage your Team</p>
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
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((user, index) => {
            return (
              <tr
                key={index}
                onClick={() => params.push(`/admin/team/${index}`)}
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
                  <span className="ms-2">Gulshan singh</span>
                </td>
                <td>Otto</td>
              </tr>
            );
          })}
          {list?.length === 0 && (
            <TableListNotFound colSpan={3} loading={loading} />
          )}
        </tbody>
      </Table>
    </Container>
  );
};
export default TeamList;
