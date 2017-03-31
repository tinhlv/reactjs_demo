import React from 'react';
import Socials from 'modules/social/Socials.jsx';
import Image from 'modules/images/Image.jsx';

var logo = 'src/assets/images/logo.png';
var imgUrl = 'src/assets/images/parten.jpg';
const bg_partent = {
   backgroundImage: 'linear-gradient(to bottom right, rgba(34, 34, 34, 0.89), rgba(245, 245, 245, 0.6)), url(' + imgUrl + ')'
};

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-content">
        <section className="header-top">
          <div className="container">
            <div className="row">
              <div className="arrow-content">
                <div className="arrow-up">▲</div>
                <div className="arrow-down">▼</div>
              </div>
              <div className="top-left">
                <div className="col-xs-8 col-md-5 col-sm-8 menu_mobile">
                    <Socials />
                </div>
                {/* show button mobile */}
                <div className="buton-booknow-mobile hidden-md hidden-sm visible-xs">
                  <div className="col-xs-4 col-md-3">
                    <button type="button" className="btn btn-lg pull-left">Book now</button>
                  </div>  
                </div>
              </div>
              {/* /top-left */}
              <div className="top-center">
                <div className="col-xs-4 col-md-3 col-sm-4 hidden-screen-600 menu_mobile">
                  <span>Dowload Apps</span>
                  <a href title>
                    <i className="icon-apple" />
                  </a>
                  <a href title>
                    <i className="icon-android" />
                  </a>
                </div>
              </div>
              {/* /top-center */}
              <div className="top-right hidden-sm">
                <div className="col-md-4 col-xs-8">
                  <ul className="pull-right">
                    <li>
                      <a href="#" title>
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        Become a member
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /top-right */}
            </div>
          </div>
        </section>
        {/* /header-top */}
        <section className="header-bottom" style={bg_partent}>
          <div className="container">
            <div className="row">
              <div className="logo">
                <div className="col-sm-3 col-xs-12 col-md-3">
                  <a href="/" title="">
                    <Image source ={logo} name=""/>
                  </a>
                </div>
              </div>
              {/* /logo */}
              <div className="slogan">
                <div className="col-sm-6 col-xs-12 col-md-6">
                  <div className="text-center">
                    <h1>Online Appointment Booking</h1>
                  </div>
                </div>
              </div>
              <div className="buton-booknow hidden-xs">
                <div className="col-xs-3 col-md-3">
                  <button type="button" className="btn btn-lg pull-right">Book now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </header>
    );
  }
}
export default Header;
