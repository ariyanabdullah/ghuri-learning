import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

import "./Premium.css";
import { useContext } from "react";
import { Mycontext } from "../Authcontext/Authcontext";

const Premium = () => {
  const premium = useLoaderData();
  const { d_hours, d_id, d_pic, d_title, price, rating } = premium;
  const { darkMode } = useContext(Mycontext);

  const notify = () => toast.success("Wow! Your checkout is Successfull");

  return (
    <div className={`${darkMode ? "premium-cource" : "bg-black"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 my-5">
            <Card className="my-5 shadow-lg">
              <Card.Img variant="top" src={d_pic} />
              <Card.Body>
                <Card.Title>{d_title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <b>Lession id :</b> 0{d_id}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Total :</b> {d_hours} hours
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Rating :</b> {rating}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Price :</b> {price} Taka
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <button
                  onClick={notify}
                  className={`${
                    darkMode ? "btn btn-danger" : " btn btn-dark text-white"
                  }`}
                >
                  Check Out
                </button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
