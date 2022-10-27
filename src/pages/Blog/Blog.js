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
        <div className="mx-auto my-5 shadow-lg rounded py-3 ps-2 pe-2">
          <h3>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p className="lead">
            = Firebase Authentication provides backend services, easy-to-use
            SDKs, and ready-made UI libraries to authenticate users to your app.
            It supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
            <br />
            The other optiion is Auth0, MongoDB, Passport, Okta, and Firebase
            are the most popular alternatives and competitors to Firebase
            Authentication.
          </p>
        </div>
        {/* third question */}
        <div className="mx-auto my-5 shadow-lg rounded py-3 ps-2 pe-2">
          <h3>3. How does the private route work?</h3>
          <p className="lead">
            = In English The react private route component renders child
            components ( children ) if the user is logged in. If not logged in
            the user is redirected to the /login page with the return url passed
            in the location state property
          </p>
        </div>
        {/* fourth question */}

        <div className="mx-auto my-5 shadow-lg rounded py-3 ps-2 pe-2">
          <h3>4. What is Node? How does Node work?</h3>
          <p className="lead">
            =Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests.
            <br />
            Node is completely event-driven. Basically the server consists of
            one thread processing one event after another. A new request coming
            in is one kind of event. The server starts processing it and when
            there is a blocking IO operation, it does not wait until it
            completes and instead registers a callback function.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
