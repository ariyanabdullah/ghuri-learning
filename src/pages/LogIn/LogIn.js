import React, { useContext } from "react";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mycontext } from "../../Authcontext/Authcontext";

const LogIn = () => {
  const { loginUser, darkMode } = useContext(Mycontext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //  ---Login User---
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        form.reset();
        toast.success("SuccessFully Loged In");
        setError("");

        navigate(from, { replace: true });
      })
      .catch((e) => setError(e.message));
  };

  return (
    <div className={`${darkMode ? "" : "bg-black text-white"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-1"></div>
          <div className="col-lg-6 col-md-6 col-sm-10">
            <div>
              <h1
                className={`${
                  darkMode
                    ? "py-3 text-danger fs-1 fw-bolder"
                    : "py-3 text-white fs-1 fw-bolder"
                }`}
              >
                Please Log In Now
              </h1>

              <div className="py-5 my-5 border rounded px-5 shadow-lg">
                <Form onSubmit={handleLogIn}>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Your Email </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder=" Your Email "
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> Enter Your Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder=" Your Password"
                      required
                    />

                    <Form.Text className="text-danger">{error}</Form.Text>
                  </Form.Group>

                  {/* <Button variant="outline-danger" type="submit">
                    Log In
                  </Button> */}
                  <button
                    className={`${
                      darkMode
                        ? "btn btn-outline-danger "
                        : "btn btn-outline-dark text-white"
                    }`}
                    type="submit"
                  >
                    Log In
                  </button>
                </Form>

                <div className="my-3">
                  <p>
                    Don't have an Account ? Please
                    <Link to="/register"> Register </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
