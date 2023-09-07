
import Card from "./Card";
import Carousal from "./Carousal";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Cart from "./Cart";

function Navigation () {
    return(
        <div>
            <Header></Header>
            <Home></Home>
            <Login></Login>
            <Footer></Footer>
            <Registration></Registration>
            <Contactus></Contactus>
            <Carousal></Carousal>
            <Card></Card>
            <Cart></Cart>
        </div>
    )
}
export default Navigation;