import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

const Portfolio = (props) => {
  if (!props.data) return null;

  let id = 0;
  const projects = props.data.projects.map((projects) => {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap" style={{ minHeight: "400px" }}>
          <Zmage alt={projects.title} src={projectImage} />
          <div style={{ textAlign: "left", padding: "10px" }}>
            <h5>{projects.title}</h5>
            <div>
              {projects.tag.map((tag) => {
                return <div style={{marginRight: "0.8rem", display: "inline-block"}}>#{tag}</div>
              })}
            </div>
            <a href={projects.url} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              <span>Works</span>
            </h1>
            <h3>Check Out Some of My Works.</h3>

            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-halves cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
