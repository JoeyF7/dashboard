import React from "react";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

const Main = () => {
  return (
    <div>
      <div className="float-end m-5">
        <Button
          className="me-3 px-4 py-2 text-dark rounded-pill fw-bolder"
          style={{ backgroundColor: "#fbc106" }}
        >
          <BsFillBagCheckFill className="me-2" />
          Add order
        </Button>
        <Button
          className="me-3 px-4 py-2 text-dark rounded-pill fw-bold"
          style={{ backgroundColor: "#fbc106" }}
        >
          <MdAdd className="me-2" /> Add product
        </Button>
      </div>
    </div>
  );
};

export default Main;
