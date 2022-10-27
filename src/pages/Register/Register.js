import React from "react";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { useContext } from "react";
import { Mycontext } from "../../Authcontext/Authcontext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleUser, updateUserProfile, githubUser, darkMode } =
    useContext(Mycontext);

  // ====onSubmit button===
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    //  ---create User---
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photo);
        toast.success("Registration complete");
      })
      .catch((e) => console.log(e.message));
  };

  //  ===handle User Profile===
  const handleUpdateUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e.message));
  };

  // ===handleGoogle===
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    googleUser(provider)
      .then((result) => {
        const user = result.user;
        console.log("google user", user);
      })
      .catch((e) => console.log(e.message));
  };

  // === handleGithub===
  const provider = new GithubAuthProvider();
  const handleGithub = () => {
    githubUser(provider)
      .then((result) => {
        const user = result.user;
        console.log("github user", user);
      })
      .catch((e) => console.log(e.message));
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
                {" "}
                Register To Visit Our Course{" "}
              </h1>

              <div className="py-5 my-5 border rounded px-5 shadow-lg">
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3">
                    <Form.Label> Full Name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" Your Full Name"
                      name="name"
                      required
                    />
                    {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> Your Photo URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="photoURL"
                      placeholder="Your PhotoURL"
                    />
                  </Form.Group>

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
                  </Form.Group>

                  {/* <Button variant="outline-danger" type="submit">
                    Register
                  </Button> */}
                  <button
                    className={`${
                      darkMode
                        ? "btn btn-outline-danger "
                        : "btn btn-outline-dark text-white"
                    }`}
                    type="submit"
                  >
                    Register
                  </button>
                </Form>

                <div className="my-3">
                  <p>
                    Already Have an Acount? Please
                    <Link to="/login"> Log In </Link>
                  </p>

                  <div>
                    <button
                      onClick={handleGithub}
                      className="border mx-2 rounded border-none"
                    >
                      <AiFillGithub /> Register with GitHub
                    </button>

                    <button
                      onClick={handleGoogle}
                      className="border rounded my-2 mx-2 border-none"
                    >
                      <AiFillGoogleCircle /> Register with Google
                    </button>
                  </div>
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

export default Register;
