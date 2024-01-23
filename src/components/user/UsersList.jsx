import { useEffect, useState } from "react";
import * as userService from "../../utils/user.service";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { BlueText, Title } from "../../styles/styledComponents";
import { NavLink } from "react-router-dom";
import { Instagram } from "react-content-loader";
import Layout from "../../layouts/Layout";
import UserCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div className="text-center">
          <Instagram />
        </div>
      ) : (
        <>
          {errorMessage ? (
            <h3 className="text-center text-danger text-bold">
              {errorMessage}
            </h3>
          ) : (
            <>
              <h4 className="text-center mb-3">Users</h4>
              <Row className="justify-content-center ">
                {users.map((user) => (
                  <Col key={user.id} lg={4}>
                    <UserCard user={user} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </>
      )}
    </Layout>
  );
};
export default UsersList;
