
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Group from './components/Group';
import Header from './components/Header';
import Login from './components/Login';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';


function App() {
  const post = 23;
  return (
    <div className="App">


      <BrowserRouter >
        <div className='d-none d-lg-block'>
          <Header />
        </div>
        <Banner />
        <div className='d-block d-lg-none sticky-top'><Nav2 post={post} /></div>
        <Nav post={post} />
        <Routes>

          <Route path='/login' element={<Login id="exampleModal" title="Sing In" />} />
          <Route path='/home' element={<div className='container justify-content-evenly'>
            <div className='rowbody'>
              <div className='colbody1 '><Card /></div>
              <div className='colbody2 d-none d-lg-block '><Group /></div>
            </div>
          </div>} />
          <Route path='/singup' element={<Login id="exampleModal1" title="Create account" input1='<input type="text" value{userFname}/>'/>} />

        </Routes>
      </BrowserRouter>

      {/* 
      
      <Nav />
      
      
       */}
    </div>
  );
}

export default App;
