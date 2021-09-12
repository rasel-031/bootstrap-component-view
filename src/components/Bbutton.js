import { Button } from "react-bootstrap";
import React from "react";

function Bbutton() {
  const items = [
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-warning",
    "outline-dark",
    "outline-light",
    "outline-danger",
    "outline-info",
  ];
  return (
    <div className="container-sm">
      {items.map((data) => (
        <>
          <Button variant={data}>{data}</Button>
          &nbsp;&nbsp;
        </>
      ))}
    </div>
  );
}

export default Bbutton;
