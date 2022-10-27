import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Mycontext } from "../../Authcontext/Authcontext";

const Footer = () => {
  const { darkMode } = useContext(Mycontext);
  return (
    <div>
      <section
        className={`${
          darkMode ? "footer blue border-top py-5" : "bg-black border-top py-5"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div
                className={`${
                  darkMode
                    ? "row  dark  p-5 text-light rounded"
                    : "row  bg-dark  p-5 text-light rounded"
                }`}
              >
                <div className="col-lg-5">
                  <h6 className="horiz pb-3 mb-3">BROUGHT TO YOU BY</h6>
                  <p className="companies pb-3">
                    Top companies choose us to build in-demand career skills.
                  </p>
                </div>
                <div className="col-lg-7">
                  New here? Courses start at €14.99. Get your new-student offer
                  before it expires. Choose from 100 online video courses.
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div>
                <h3 className="border-bottom text-white pb-2"> All Pages</h3>
                <p>
                  <Link
                    to="/course"
                    className="text-white text-decoration-none"
                  >
                    {" "}
                    Courses{" "}
                  </Link>
                </p>
                <p>
                  <Link to="/blog" className="text-white text-decoration-none">
                    {" "}
                    Blog{" "}
                  </Link>
                </p>
                <p>
                  <Link to="/faq" className="text-white text-decoration-none">
                    {" "}
                    FAQ{" "}
                  </Link>
                </p>
                <p>
                  <Link className="text-white text-decoration-none">
                    {" "}
                    Terms & condition
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${
          darkMode
            ? "blue text-white border-top"
            : "bg-black text-white border-top "
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="py-2 ">
                <p className="text-center p-0 ">
                  Copyright @2022. All rights reserved By
                  <span className="fw-bolder"> Abdur Rahman</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
