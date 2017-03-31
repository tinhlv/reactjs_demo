import React from 'react';
import Image from 'modules/images/Image.jsx';

var logo = 'src/assets/images/logo.png';
var imgUrl = 'src/assets/images/up-arrow.png';
var icon_totop = {
  backgroundColor: 'rgba(85, 85, 85, 0.83)',
  backgroundImage: 'url(' + imgUrl + ') no-repeat center 50%'
};

class Footer extends React.Component {
  render() {
    return (
      	<div>
	        {/* include footer.html */}
	        <footer className="footer-container">
	          <div className="container-fluid">
	            <div className="row">
	              <div className="col-md-12">
	                <div className="logo_footer">
	                  <a href="/" title="">
	                    <Image source ={logo} name=""/>
	                  </a>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="clearfix" />
	        </footer>
	        <a href="#0" className="cd-top" style={{icon_totop}}> </a>
      	</div>
    );
  }
}
export default Footer;