
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import Contactus from './components/contactus';
import Home1 from './classcomponents/home1';
import FavColor from './components/hooksMethod';
import CallbackDemo from './components/demoCallback/xyz';
import CALLBACK from './components/demoCallback/callbackBenifit';
import LowP from './components/demoUsememo/lowP';
import HighP from './components/demoUsememo/highP';
import XYZ from './components/demoCallback/xyz';
import Prob from './demouseCallback/probusecallback';
import Additionuse from './demouseCallback/parentuseCallback';
import XY from './demouseCallback/xy';
import {UseM} from './useMemoConcept/memoizationConcept';
import A from './demoMounting/demoRender';
import D from './demoMounting/demochildRender';
//import X from './reduxDemo/reduxProvider';
import cartAPP from './reduxDemo/cartApp';
import X from './reduxDemo/reduxProvider';
import Post from './components/demoUsememo/postDetail';
import Axios1 from './AxiosDemo/Axios1';
import Axios2 from './AxiosDemo/Axios2';
import Axios3 from './AxiosDemo/Axios3';
import Axios4 from './AxiosDemo/Axios4';
import Axios5 from './AxiosDemo/Axios5';
import Axios6 from './AxiosDemo/Axios6';
import ErrorDemo from './windowMethod/errorMethod';
import Navigation from './MyProject/Navigation';
import Header from './MyProject/Header';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/abc' Component={Home1}></Route>
          <Route path='/' Component={Home}> </Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/registration' Component={Registration}></Route>
          <Route path='/contactus' Component={Contactus}></Route>
          <Route path='/ssss' Component={FavColor}></Route>
          <Route path='/problem-callback' Component={XYZ}></Route>
          <Route path='/solution-callback' Component={CALLBACK}></Route>
          <Route path='/low-perfomance' Component={LowP}></Route>
          <Route path='/high-performance' Component={HighP}></Route>
          <Route path='/problem-usecallback' Component={Prob}></Route>
          <Route path='/parent-usecallback' Component={Additionuse}></Route>
          <Route path='/xy-usecallback' Component={XY}></Route>
          <Route path='/usememo-concept' Component={UseM}></Route>
          <Route path='/a' Component={A}></Route>
          <Route path='/d' Component={D}></Route>
          <Route path='/rex' Component={X}></Route>
          <Route path='/reducer' Component={cartAPP}></Route>
          <Route path='/post' Component={Post}></Route> 
          <Route path='/axio1'Component={Axios1}></Route>
          <Route path='/axio2' Component={Axios2}></Route>
          <Route path='/axio3' Component={Axios3}></Route>
          <Route path='/axio4' Component={Axios4}></Route>
          <Route path='/axio5' Component={Axios5}></Route>
          <Route path='/axio6' Component={Axios6}></Route>
          <Route path='/error' Component={ErrorDemo}></Route>
          <Route path='/navigation' Component={Navigation}></Route>
          <Route path='/header' Component={Header}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
