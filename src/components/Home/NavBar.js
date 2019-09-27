import React from 'react';


// import logo from "./images/logo.svg";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
// import Login from "../Auth/Login.js";

// images

// styles

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div id="home" className=" row-lg-12">
        <Navbar expand="md" id="home1" className="nav-container " >
          <NavbarBrand className="brandlogo" href="/">
          <h2 className="brandicon">The   L  A D E P S   Inc.</h2>
          {/* <NavLink href="/">The   L  A D E P S   Inc.</NavLink> */}


          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="#project">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://drive.google.com/open?id=1JDlFQbBAGMHpSAQ5dLz-kqR73qQPOThB">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
