import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { Mycontext } from "../../Authcontext/Authcontext";
import { useContext } from "react";
import { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

const Details = () => {
  const allDetails = useLoaderData();
  const componentRef = useRef();
  // handlePrint button
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => toast.success("print success"),
  });

  // console.log(allDetails);
  const { darkMode } = useContext(Mycontext);

  const { d_id, d_title, d_pic, d_details, price, rating } = allDetails;

  return (
    <div>
      <div className={`${darkMode ? "" : "bg-black text-white"}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="px-3 py-4 border rounded">
                <div className="row pb-3 border-bottom">
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <h3>{d_title}</h3>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 text-end ">
                    <button
                      onClick={handlePrint}
                      type="button"
                      className={`${
                        darkMode
                          ? "btn btn-danger"
                          : " btn btn-outline-dark text-white"
                      }`}
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
                {/* akhane pd f */}
                <div className="row my-2">
                  <div ref={componentRef} className="col ">
                    <img className="mx-auto w-100 rounded" src={d_pic} alt="" />
                    <div>
                      <p className="lead py-4">{d_details}</p>
                    </div>
                  </div>
                </div>
                {/* ekahne pdf */}
                <div className="row">
                  <div className="col">
                    <div className="my-2 d-flex justify-content-between align-items-center  border-top p-2">
                      <div>
                        {" "}
                        <span>Ratings:</span>{" "}
                        <span className="text-warning">
                          <BsFillStarFill />
                        </span>{" "}
                        <span> {rating} </span>{" "}
                      </div>

                      <div className="">
                        <span> Price: </span> <span> ${price}</span>
                      </div>

                      <div>
                        <Link to={`/premium/${d_id}`}>
                          <button
                            className={`${
                              darkMode
                                ? "btn btn-danger"
                                : " btn btn-outline-dark text-white"
                            }`}
                          >
                            Get Premium Access
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
