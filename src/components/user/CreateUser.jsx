import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import * as userService from "../../utils/user.service";
import "react-toastify/dist/ReactToastify.css";

import Layouts from "../../layouts/TopNavigation";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      city,
      gender,
      country,
      profilePic,
    };
    try {
      const apiResponse = await userService.createUser(payload);
      if (apiResponse?.status) {
        const getUserId = apiResponse?.user?.id;
        toast.success(`User ${getUserId} Created Successfully`);
        setTimeout(() => {
          setCity(""), setName(""), setEmail(""), setGender(""), setCountry("");
        }, 2000);
      } else {
        toast.warn("User Creation was not successful");
      }
    } catch (error) {
      const fixCaps = (message) => {
        return message[0].toUpperCase() + message.substring(1);
      };
      const retrieveErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;
        const errorMessage = body[0]?.message;
        //uppercase the first letter of the message to be displayed as the error
        return fixCaps(errorMessage);
      };
      toast.error(retrieveErrorMessage);
      console.log(error);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the file to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Layouts className="mb-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className="mt-5" id="form" onSubmit={submitForm}>
            <h1>Create User</h1>
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
                // type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="city"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="country"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicProfilePic">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
            {profilePic && (
              <img
                src={profilePic}
                alt="Profile Preview"
                style={{ maxWidth: "100%", marginTop: "10px" }}
              />
            )}

            <button className="btn btn-primary m-1" type="submit">
              Add User
            </button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Layouts>
  );
}

export default CreateUser;
