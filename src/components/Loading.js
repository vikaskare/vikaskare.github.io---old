import React from "react";
import { Spinner } from "react-bootstrap";
function Loading() {
  return (
    <Spinner animation="border" size="lg" role="status">
      <span className="sr-only"></span>
    </Spinner>
  );
}

export default Loading;
