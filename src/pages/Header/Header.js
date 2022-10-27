import React from "react";

import fav from "../../asset/fav.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle, BsMoon, BsLightbulb } from "react-icons/bs";
import { useContext } from "react";
import { Mycontext } from "../../Authcontext/Authcontext";
import { Image } from "react-bootstrap";
import toast from "react-hot-toast";

const Header = () => {
  const { user, userSignOut, handleDarkTheme, handleLightTheme, darkMode } =
    useContext(Mycontext);
  // toogler
  // navigator
  const navigate = useNavigate();
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success(" Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Navbar className={`${darkMode ? " blue" : "bg-dark"}`} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          {darkMode ? (
            <>
              <img style={{ width: "23px" }} src={fav} alt="" />
              <span className="fw-bolder ms-1 fs-4 text-white">
                GHURI LEARNING
              </span>
            </>
          ) : (
            <>
              <img style={{ width: "23px" }} src={fav} alt="" />
              <span className="fw-bolder ms-1 fs-4 text-white">
                GHURI LEARNING
              </span>
            </>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className="text-decoration-none text-white fw-normal fs-6 px-3 "
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-decoration-none text-white fw-normal fs-6 px-3 "
              to="/course"
            >
              Courses
            </Link>

            <Link
              className="text-decoration-none text-white fw-normal fs-6 px-3 "
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-decoration-none text-white fw-normal fs-6 px-3 "
              to="/faq"
            >
              FAQ
            </Link>
            <div>
              <span
                role="button"
                title="Dark Theme"
                className={`${
                  darkMode ? " me-3  text-white" : " text-white me-3 "
                }`}
                onClick={handleDarkTheme}
              >
                <BsMoon /> <small className="fw-bolder">Dark Theme</small>
              </span>

              <span
                role="button"
                title="Light Theme"
                className={`${
                  darkMode ? "me-3 text-white " : " text-white  me-3"
                }`}
                onClick={handleLightTheme}
              >
                <BsLightbulb />
                <small className="fw-bolder">Light Theme</small>
              </span>
            </div>
          </Nav>

          <div className="d-flex align-items-center ">
            {user?.uid ? (
              <>
                {user?.photoURL ? (
                  <>
                    <Image
                      data-toggle="tooltip"
                      title={user.displayName}
                      style={{ height: "40px" }}
                      roundedCircle
                      src={user.photoURL}
                    ></Image>
                  </>
                ) : (
                  <>
                    <span className="text-white" title={user.displayName}>
                      <BsPersonCircle />
                    </span>
                  </>
                )}
                <button
                  onClick={handleSignOut}
                  className={`${
                    darkMode
                      ? "btn btn-outline-danger btn-sm ms-3"
                      : "btn btn-dark text-white btn-sm ms-3"
                  }`}
                >
                  SignOut
                </button>
              </>
            ) : (
              <>
                <Link
                  className="text-decoration-none text-white fw-normal fs-6 px-3 "
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-decoration-none text-white fw-normal fs-6 px-3 "
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
