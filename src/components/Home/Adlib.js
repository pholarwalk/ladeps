import React from "react";
import { Media, Button } from "reactstrap";

class Adlib extends React.Component {
  render() {
    return (
      <div className="adlib-container">
        <Media>
          <Media className="media-card" left href="#">
            <div data-aos="fade-right">
              <img
                className="img-experience"
                id="img1"
                src={require("../../images/ladepswork.jpg")}
                width="500"
                alt="f"
              />
            </div>
          </Media>
          <Media id="text" body>
            <div className="text-experience" data-aos="fade-left">
              <h2>About Me</h2>I'm Olusina Lawal a Chartered digital marketer,
              Certifed customer service professional, a Teamplayer, Active
              listener that shows Genuine Commitment, pretty much flexible, 100%
              Reliable and responsible, with great Communication skill also
              Collaborating with other colleagues, i am skilled at Digital
              marketing campaign creation and execution, Online marketing tools
              and platforms Social media channels, Website analytics and
              development, Lead generation/qualification, Budget
              development/management, Sales conversions, Partnership
              building/management, Team collaboration and leadership, guaranteed
              to deliver actual and surpass result
            </div>
            <h2>
              <Button className="contactbtn" href="#contact">
                Contact Me
              </Button>
            </h2>
          </Media>
        </Media>
      </div>
    );
  }
}

export default Adlib;
