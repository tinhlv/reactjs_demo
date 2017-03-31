import React from 'react';

function isEmail(v) {
    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.match(r) == null) ? false : true;
}

class InputField extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  onChange(e) {
      const firstname =  $.trim(e.target.value);
      const lastname = $.trim(e.target.value);
      const email = $.trim(e.target.value);
      const password = $.trim(e.target.value);
      const phone = $.trim(e.target.value);

      if (firstname == '' || lastname == ''){
        $('#username_error').text('Vui lòng nhập đầy đủ họ và tên');
        
      }
      else{
          $('#username_error').text('');
      }

      // Email
      if (!isEmail(email) || email == ''){
          $('#email_error').text('Email không được để trống và phải đúng định dạng');
          
      }
      else{
          $('#email_error').text('');
      }

      // Password
      if (password.length <= 0){
          $('#password_error').text('Vui lòng nhập mật khẩu');
          
      }
      else{
          $('#password_error').text('');
      }

      // Phone
      if (phone.length <= 0){
          $('#phone_error').text('Vui lòng nhập số điện thoại');
          
      }
      else{
          $('#phone_error').text('');
      }
  }

  render() {
    return (
        <div className="form-group">
          <label htmlFor={this.props.label}>{this.props.label}</label><br />
          <input type={this.props.typeInput} placeholder={this.props.placeholder} onChange={this.onChange.bind(this)} name={this.props.name} className="form-control input-lg" />
        </div>
    );
  }
}

export default InputField;