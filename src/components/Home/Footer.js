import React from 'react';
// config

// components
import {
  // Button,
  CardDeck
} from 'reactstrap';

// images

// styles

class Footer extends React.Component {
  render() {
    return (
      <div className="footies row-lg-12 row-md-12 row-sm-12">
        <CardDeck id="contact" >
          <div className="col-lg-4 col-md-4 col-sm-4">
            
              <h2 className="brandicon" data-aos="flip-left">The  L A D E P S  Inc.</h2>
              
            
          </div>
          <div className=" col-lg-4 col-md-4 col-sm-4">
            
            <div className="icons">
                <a className="hov2" href='https://web.facebook.com/Ladeps'><i class="fab fa-facebook-f"></i></a>
                <a className="hov2" href='https://twitter.com/OlusinaL'><i class="fab fa-twitter"></i></a>
                <a className="hov2" href='https://www.linkedin.com/in/lawal-olusina-adepitan-06565012b'><i class="fab fa-linkedin-in"></i></a>
              </div>
            
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <br/><h5><i className="button-hire fas fa-phone"></i>+2348117256268</h5><br/>
          <i className="button-hire far fa-envelope"></i><a  href="mailto:lawalolusina@gmail.com" className="button-hire" >lawalolusina@gmail.com</a>
          </div>
          <div className="footer-text col-lg-12 col-md-12 col-sm-12">
          <h5>© 2019 The  L A D E P S  Inc. , All Rights Reserved.</h5>
          </div>
        </CardDeck>
        
         </div>

    );
  }
}

export default Footer;
