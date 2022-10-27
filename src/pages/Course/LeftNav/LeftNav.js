import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const LeftNav = ({ course }) => {
  const { id, title } = course;

  return (
    <ListGroup className="my-2">
      <ListGroup.Item>
        <Link  className="text-decoration-none" to={`/details/${id}`}>
          {title}
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default LeftNav;
