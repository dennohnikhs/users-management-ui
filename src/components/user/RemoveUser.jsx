import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userService from "../../utils/user.service";
import Layouts from "../../layouts/TopNavigation";
import { Button, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

function RemoveUser() {
  const { userId } = useParams();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitAction = async () => {
    const DELAY_BEFORE_REDIRECTION_MS = 3000;

    try {
      const user = await userService.retrieveUser(userId);
      if (user) {
        await userService.removeUser(userId);
        toast.success(`user with ${userId} removed successfully`);
        setSuccessMessage(apiResponse.message);
        setTimeout(() => {
          window.location.href = "/";
        }, DELAY_BEFORE_REDIRECTION_MS);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(`user with id ${userId} couldn't be found`);
      setTimeout(() => {
        window.location.href = "/";
      }, DELAY_BEFORE_REDIRECTION_MS);
    }
  };
  const cancelAction = () => {
    window.location.href = "/";
  };
  return (
    <Layouts>
      <Container className="text-center">
        <h3>Are you sure to remove this user?</h3>
        <Button variant="danger" onClick={submitAction} className="m-1">
          yes remove this user?
        </Button>
        <Button variant="secondary" onClick={cancelAction} className="m-1">
          revert my action
        </Button>
      </Container>
    </Layouts>
  );
}

export default RemoveUser;
