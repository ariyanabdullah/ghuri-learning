import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Mycontext } from "../../Authcontext/Authcontext";

const Faq = () => {
  const { darkMode } = useContext(Mycontext);
  return (
    <section className={`${darkMode ? "my-5 py-5" : "bg-black  py-5"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Which Qualifications do I need to start the Course ?
                </Accordion.Header>
                <Accordion.Body>
                  At first, You must have to good command of English. If you
                  have academic degree it will help you to get job early . If
                  you don't have academic degree you have To work hard to get a
                  job . Just Focus on your skills .
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Which Divice Do I need to start The Course ?
                </Accordion.Header>
                <Accordion.Body>
                  You must have to a Computer or a Leptop. Also you have to
                  Internet Connection very well. Then you can start the course.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Do You guys give us Job directly?
                </Accordion.Header>
                <Accordion.Body>
                  No, We don't directly give you any job . If you do good in
                  Your HomeWork we will send your Portfolio to many companies.
                  Then you have to pass the interview then you will get your
                  job. Thanks
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
