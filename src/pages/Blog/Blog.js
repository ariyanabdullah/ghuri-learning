import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="mx-auto w-75">
        {/* 1st question */}
        <div className="mx-auto my-5 shadow-lg rounded py-3 ps-2 pe-2">
          <h3>1. What is The cors in Node Js ?</h3>
          <p className="lead">
            = CORS stands for Cross-Origin Resource Sharing . It allows us to
            relax the security applied to an API. <br /> This is done by
            bypassing the Access-Control-Allow-Origin headers, which specify
            which origins can access the API.
          </p>
        </div>
        {/* second question */}
        <div className="">
          <h3>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Blog;
