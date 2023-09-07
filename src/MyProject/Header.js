
function Header () {
    return(
        <div>
            <a className="btn btn-primary" href="Home">Home</a>
            <a className="btn btn-primary" href="Login">Login</a>
            <a className="btn btn-primary" href="Registration">Registration</a>
            <a className="btn btn-primary" href="ContactUs">ContactUs</a>
            <input type="text" className="Form-Control" placeholder="search"></input>
            <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
            </button>
        
        </div>
    )
}
export default Header;