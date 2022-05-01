import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <div className="list-header">
            <FaHome />
            <div className="content">
              <h2>Dashboard</h2>
              <p>Manage your dashboard</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
