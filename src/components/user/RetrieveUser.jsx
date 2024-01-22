import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BlueText } from "../../styles/styledComponents";
import * as userService from "../../utils/user.service";
import Layout from "../../layouts/Layout";
function RetrieveUser() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const userResponse = await userService.retrieveUser(userId);
      setUser(userResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  // Rest of your component...

  return (
    <>
      <Layout className="mt-5 mb-3">
        {user ? (
          <Row className="d-flex flex-row flex-wrap justify-content-between">
            <Row className="justify-content-center">
              <Col lg={4}>
                <Card className="mt-2 mb-2">
                  <Card.Body>
                    <BlueText>{user.name}</BlueText>
                    <BlueText>{user.email}</BlueText>
                    <BlueText>{user.gender}</BlueText>
                    <BlueText>
                      {user?.city}-{user?.country}
                    </BlueText>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        ) : (
          <div className="text-danger text-center font-bold">
            user was not found
          </div>
        )}
      </Layout>
    </>
  );
}

export default RetrieveUser;
