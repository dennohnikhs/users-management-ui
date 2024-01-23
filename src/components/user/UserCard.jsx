import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { BlueText } from "../../styles/styledComponents";
import { NavLink } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Row className=" d-flex justify-content-between">
            <Col xs="auto">
              <BlueText>{user.name}</BlueText>
              <BlueText>{user.email}</BlueText>
              <BlueText>
                {user?.city}-{user?.country}
              </BlueText>
            </Col>
            <Col xs="auto">
              <Image
                src={user.profilePic}
                style={{ width: "100px", height: "100px" }}
                alt="User Profile Picture"
                roundedCircle
                fluid
              />
            </Col>
          </Row>
          <Row className="justify-content-between d-flex mt-2">
            <Col xs="auto">
              <Button variant="secondary" as={NavLink} to={`/edit/${user.id}`}>
                Edit
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="danger" as={NavLink} to={`/remove/${user.id}`}>
                delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
