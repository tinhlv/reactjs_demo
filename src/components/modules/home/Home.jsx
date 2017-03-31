import React from 'react';
import SignUp from '../singup';
import {createStore, applyMiddleware} from "redux";

var imgUrl = 'src/assets/images/bg_main.png';
const bg_main = {
   backgroundImage: 'url(' + imgUrl + ')'
};

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <section className="main-container">
        <div id="home_page" className="block-container" style={bg_main}>
          <div className="container">
            <div className="row">
                <SignUp />
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </section>
    );
  }
}

export default Home;