import React from "react";
import Fade from "react-reveal";

const About = (props) => {
  if (!props.data) return null;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={"images/" + props.data.image}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{props.data.bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{props.data.name}</span>
                  <br />
                  <span>
                    {props.data.address.city}, {props.data.address.country}
                  </span>
                  <br />
                  <span>{props.data.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;