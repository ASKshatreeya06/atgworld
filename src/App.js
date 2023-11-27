
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css';

import Banner from './components/Banner';
import Card from './components/Card';
import Group from './components/Group';
import Header from './components/Header';
import Login from './components/Login';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Signup from './components/Signup';
import Mlogin from './mobilemodal/Mlogin';
import Msignup from './mobilemodal/Msignup';
import Mcard from './mobilemodal/Mcard';


function App() {

  const post = 23;
  return (
    <div className="App">
 {/* Here is phone responsive uncomment and check only for phone */}
      {/* uncomment to check mobile resposive only login page  */}
      {/* <Mlogin /> */}
      {/* uncomment to check mobile resposive only signup page  */}
      {/* <Msignup /> */}
      {/* <Mcard /> */}
     
 {/* below is desktop or big srceen responsive uncomment and check  */}
      <BrowserRouter >
        <div className='d-none d-lg-block'>
          <Header />
        </div>
        <Banner />
        <div className='d-block d-lg-none sticky-top'><Nav2 post={post} /></div>
        <Nav post={post} />
        <Routes>

          <Route path='/login' element={<Login id="exampleModal" title="Sing In" />} />
          <Route path='/' element={<div className='container justify-content-evenly'>
            <div className='rowbody'>
              <div className='colbody1 '><Card /></div>
              <div className='colbody2 d-none d-lg-block'><Group /></div>
            </div>
          </div>} />
          <Route path='/signup' element={<Signup id="signupModal" title="Create account" />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
