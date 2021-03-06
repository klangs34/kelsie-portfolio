import React from "react";

const About = () => {
  return (
    <main className="container my-3 bg-light h-100">
      <div className="text-info h3 py-3 mb-3 border-bottom">About Me</div>
      <section>
        <div
          className="card border-0 float-left mr-3"
          style={{ width: "8rem" }}
        >
          <div className="card-body p-0">
            <img
              className="img-fluid"
              src="/assets/images/latest-LinkedIn_25.jpg"
              alt="me"
            />
          </div>
        </div>
        <div className="text-muted">
          <p>
            This project formalizes a journey that started for me long ago. I've logged many hours honing my craft, learning 
            new skills and building fun projects.  This project is intented to pull everything together and
            serve as the foundation that will house some of my most comprehensive projects.
          </p>
          <p>
            I began coding as an undergrad at Elon University. I've built a few
            static sites with a little backend access, but gradually began
            incorporating dynamic pages with PHP. For a while PHP, HTML,
            CSS, and MySQL were my suite of choice.
          </p>
          <p>
            Fast forward to present, I am very much into Javascript. This project 
            was done using REACT, which was satisfying on so many
            levels because of its component-based approach.  My skills range from HTML5, Bootsrap, React, Nodejs, Express and much more.  
            Applying those skills have allowed me to build fully functional and practical apps.
          </p>
          <p>
            When I am not coding, I enjoy spending time with my family, doing
            some occassional building projects, and watching football.
          </p>
          <p>Check out my page and feel free to drop me a line or two!</p>
        </div>
      </section>
    </main>
  );
};

export default About;
