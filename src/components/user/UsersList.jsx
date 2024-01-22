import { useEffect, useState } from "react";
import * as userService from "../../utils/user.service";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { BlueText, Title } from "../../styles/styledComponents";
import { NavLink } from "react-router-dom";
import Layout from "../../layouts/Layout";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchUsers = async () => {
    try {
      const usersFromApi = await userService.retrieveAllUsers();
      setUsers(usersFromApi);
    } catch (error) {
      const retrieveErrorMessage = () => {
        //return the error also when the server is down rather than just returning the error from the api
        const errorFromApi = error?.response?.data?.message;
        //null coalescing operator -??
        return errorFromApi ?? "Server error please try again later ...";
        const {
          data: { message },
        } = error.response;
        return message;
      };
      setErrorMessage(retrieveErrorMessage);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <h3 className="text-center py-2 fw-bold fst-normal">Users</h3>
      {errorMessage ? (
        <h3 className="text-center text-danger text-bold">{errorMessage}</h3>
      ) : (
        <Row className="d-flex flex-row flex-wrap justify-content-between">
          {users.map((user) => (
            <Row key={user.id} className="justify-content-center">
              <Col lg={4}>
                <Card>
                  <Card.Body>
                    <Row className=" d-flex justify-content-between">
                      <Col>
                        <BlueText>{user.name}</BlueText>
                        <BlueText>{user.email}</BlueText>
                        <BlueText>
                          {user?.city}-{user?.country}
                        </BlueText>
                      </Col>
                      <Col>
                        <Image
                          src={user.profilePic}
                          style={{ width: "100px", height: "100px" }}
                          alt="User Profile Picture"
                          roundedCircle
                          fluid
                        />
                      </Col>
                    </Row>
                    <Container className="justify-content-between d-flex">
                      <Button
                        variant="secondary"
                        as={NavLink}
                        to={`/edit/${user.id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        as={NavLink}
                        to={`/remove/${user.id}`}
                      >
                        delete
                      </Button>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Row>
      )}
    </Layout>
  );
};
export default UsersList;
