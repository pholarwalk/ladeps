import React from "react";

// config

// components
import {
  // Card,
  CardDeck,
  NavLink
  // CardBody,
  // CardText
} from "reactstrap";

// images

// styles

class Project extends React.Component {
  render() {
    return (
      <div id="project" className="Service">
        <h1 className="txt2" data-aos="zoom-in">
          Projects
        </h1>
        <CardDeck className="Service row-lg-12 row-md-12 row-sm-12">
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in-right"
          >
            <NavLink href="https://web.facebook.com/Trendy-Stores-1224260087755493/?notif_id=1569580594139386&notif_t=page_admin_guidance&_rdc=1&_rdr">
              <h5>Trendy Stores</h5>

              <img
                className="imgproject"
                src={require("../../images/trendy.jpg")}
                width="250"
                alt="f"
              />
              <p>
                 promotion for sales of children ipad 
              </p>
            </NavLink>
          </div>
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in"
          >
            <NavLink href="/">
              <h5>Travel Agency </h5>

              <img
                className="imgproject"
                src={require("../../images/comingsoonlight.jpg")}
                width="250"
                alt="f"
              />
              <p>
              ......
              </p>
            </NavLink>
          </div>
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in"
          >
            <NavLink href="/">
              <h5>Cake Bakers </h5>

              <img
                className="imgproject"
                src={require("../../images/comingsoonlight.jpg")}
                width="250"
                alt="f"
              />
              <p>
                ......
              </p>
            </NavLink>
          </div>
          <div
            className=" wholediv col-lg-3 col-md-3 col-sm-3 "
            data-aos="zoom-in-left"
          >
            <NavLink href="/">
              {" "}
              <h5>House Party </h5>
              <img
                className="imgproject"
                src={require("../../images/comingsoonlight.jpg")}
                width="250"
                alt="f"
              />
              <p>
              ......
              </p>
            </NavLink>
          </div>
        </CardDeck>
      </div>
    );
  }
}

export default Project;
