import React, { useState } from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import { FaUsers, FaPlus } from "react-icons/fa";
import Button from "../../FormElements/Button";
import FormInput from "../../FormElements/FormInput";
import ActionFooter from "../Utility/ActionFooter";
import { useRouter } from "next/router";

const Profile = () => {
  const params = useRouter();
  const { id } = params.query;
  const [isEdit, setIsEdit] = useState(true);
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={6}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>Profile</h2>
              <p>Manage your profile</p>
            </div>
          </div>
        </Col>
      </Row>
      <ActionFooter isHideDelete={true} isEdit={isEdit} setIsEdit={setIsEdit} />
    </Container>
  );
};
export default Profile;
