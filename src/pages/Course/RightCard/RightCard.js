import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Mycontext } from "../../../Authcontext/Authcontext";

const RightCard = ({ course }) => {
  const { id, c_thumb, title, author } = course;
  const { darkMode } = useContext(Mycontext);

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <Card>
        <Card.Img style={{ height: "150px" }} variant="top" src={c_thumb} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>
            <small>{author}</small>
          </Card.Text>

          <Link to={`/details/${id}`}>
            <button
              className={`${
                darkMode
                  ? "btn btn-danger btn-sm"
                  : "btn btn-outline-dark btn-sm"
              }`}
            >
              More Details
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightCard;
