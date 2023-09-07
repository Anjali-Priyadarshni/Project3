import React from "react";
class Header1 extends React.Component {
    render() {
        return (
     <div>
      <a className="btn btn-info" href="#home">Home</a> {'  '}
      <a className="btn btn-info" href="#contactus">ContactUs</a> {'  '}
      <a className="btn btn-info" href="#about">About</a> {'  '}
      <a className="btn btn-info" href="#login">Login</a> {'  '}
      <a className="btn btn-info" href="#signup">SignUp</a>
      </div>
        );
    }
}
export default Header1;