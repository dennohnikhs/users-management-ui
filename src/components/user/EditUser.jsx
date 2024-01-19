import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import * as userService from "../../utils/user.service";
import { useParams } from "react-router-dom";
import Layouts from "../../layouts/TopNavigation";
import { Button, Col, Form, Row } from "react-bootstrap";
import { upperCaseFirstLetter } from "../../utils/string.helper";
function EditUser() {
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const populateUserFields = async () => {
    try {
      const user = await userService.retrieveUser(userId);
      setName(user.name);
      setEmail(user.email);
      setCity(user.city);
      setGender(user.gender);
      setCountry(user.country);
    } catch (error) {
      console.log(error);
      // toast.error(`user with ${userId} couldn't be found`);
      window.location.href = "/";
    }
  };
  const submitForm = async (e) => {
    const DELAY_BEFORE_REDIRECTION_MS = 3000;

    e.preventDefault();
    const payload = {
      name,
      email,
      city,
      gender,
      country,
    };
    try {
      const response = await userService.editUser(userId, payload);
      if (response?.status) {
        const userName = response.user.name;
        toast.success(`${userName} Updated Successfully`);
        setTimeout(() => {
          window.location.href = "/";
        }, DELAY_BEFORE_REDIRECTION_MS);
      } else {
        toast.warn("The user couldn't be updated");
      }
    } catch (error) {
      console.log("eroor ndo hii", error);
      if (error.response) {
        // If error has a response property
        const retrieveErrorMessage = () => {
          const {
            data: {
              errors: { body },
            },
          } = error.response;
          const errorMessage = body[0]?.message;
          return upperCaseFirstLetter(errorMessage);
        };
        toast.error(retrieveErrorMessage());
      } else {
        // If error does not have a response property
        console.log(error);
        toast.error("An error occurred while processing your request");
      }
    }
  };
  useEffect(() => {
    populateUserFields();
  }, [userId]);
  return (
    <Layouts>
      <Form action="">
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form className="mt-5" id="form" onSubmit={submitForm}>
              <h1 className="text-center">Edit User</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <label htmlFor="sel1">Select gender</label>
                <select
                  className="form-control"
                  id="sel1"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>select gender</option>
                  <option>female</option>
                  <option>male</option>
                </select>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  placeholder="Enter country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>

              <Button
                className="btn btn-primary m-1"
                type="submit"
                onClick={submitForm}
              >
                Update User
              </Button>
            </Form>
          </Col>
        </Row>
      </Form>
    </Layouts>
  );
}

export default EditUser;
