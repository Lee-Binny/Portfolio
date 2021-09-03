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
        <div className="item-wrap">
          <Zmage alt={projects.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>
            <a href={projects.url} target="_blank" rel="noreferrer">
              {projects.title}
            </a>
          </div>
          <div style={{ textAlign: "center", backgroundColor: "#f9f7f7d1" }}>
              {projects.tag.map((tag) => {
                return <span style={{marginRight: '0.8rem'}}>#{tag}</span>
              })}
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
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
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
