function Header (x){
  console.log(x.a)
  console.log(x.b)
return (
    <div>
      {x.a}
      <a className="btn btn-info" href="home">Home</a> {'  '}
      <a className="btn btn-info" href="contactus">ContactUs</a> {'  '}
      <a className="btn btn-info" href="about">About</a> {'  '}
      <a className="btn btn-info" href="login">Login</a> {'  '}
      <a className="btn btn-info" href="registration">SignUp</a>
      </div>
)
}

export default Header;