import React from 'react';
import InputField from 'modules/form/input.jsx';
class SignUp extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  
  handleSubmit(e){
    alert('ssss');
  }

  render() {
    return (
        <div className="form-booking">
                <div className="col-xs-12 col-sm-8 col-md-4 pull-right">
                  <p className="text_policy_top pull-right">
                    <span>Already have an account? <a href title>Sign in</a></span>
                  </p>
                  <div className="clearfix" />
                  <div className="panel panel-default">
                    <div className ="error"></div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-12">
                            <a className="btn login_fb" href title><i className="icon-facebook" />Sign In with Facebook</a>
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <InputField typeInput="text" label="First Name" name="firstname"  value={this.props.firstname}/>
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <InputField typeInput="text" label="Last Name" name="lastname"  value={this.props.lastname}/>
                          </div>
                          <div className="col-xs-12"><span id="username_error"></span></div>
                        </div>
                        <InputField typeInput="text" label="Email" name="email"  value={this.props.email}/>
                        <span id="email_error"></span>

                        {/*form email*/}
                        <InputField typeInput="password" label="Password" name="password"  value={this.props.password}/>
                        <span id="password_error"></span>

                        {/*form password*/}
                        <InputField typeInput="number" label="Phone" name="phone"  value={this.props.phone}/>
                        <span id="phone_error"></span>

                        {/*form Phone*/}
                        <div className="form-group gender_check">
                          <label htmlFor="firstname">Gender</label>
                          <div className="row">
                            <div className="col-md-6 col-xs-6 col-sm-6">
                              <label htmlFor="radio-one">
                                <input type="radio" value="radio-one" name="Gender" id="radio-one" /><span>Male</span>
                              </label>
                            </div>
                            <div className="col-md-6 col-xs-6 col-sm-6">
                              <label htmlFor="radio-two">
                                <input type="radio" value="radio-two" name="Gender" id="radio-two" /> <span>Female</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <p className="text_policy_bottom">
                          By Signing up, you agree to the <a href title>Term of Servies</a> and <a href title>Privacy Policy</a>
                        </p>
                      </div>
                      <input type="submit" defaultValue="Sign Up Now" className="btn btn-sign btn-block" />
                    </form>
                  </div>
                </div>
                <div className="clearfix" />
        </div>
    );
  }
}

export default SignUp;