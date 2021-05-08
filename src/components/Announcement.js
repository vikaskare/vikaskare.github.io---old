import React from "react";
import { Alert } from "react-bootstrap";

function Announcement({ show, variant }) {
  return (
    <Alert className="my-0" variant={variant}>
      <p className="text-center my-0">This site is under developement!</p>
    </Alert>
  );
}

export default Announcement;
