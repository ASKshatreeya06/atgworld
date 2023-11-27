import React, { useState } from 'react'
import imgsrc from '../img/logimg.png'
import google from '../img/google.jpg'
import facebook from '../img/facebook.jpg'
import './Login.css'
import { Link } from 'react-router-dom'


const Login = (prop) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({ email: '', password: '' });
  const handlesubmit = (e) => {

  }
  return (
    <>
     

      
      {/* <!-- Modal --> */}
      <div className="modal fade " id={prop.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg h-100 pb-5" >
          <div className="modal-header custom-transparent ">
            <button show={show} onHide={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-content ">
            <div className='d-flex justify-content-between mx-3 mt-5 d-none d-ms-block'>
              <h3>Welcome Back</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p className='text-center my-3 d-none d-lg-block text-success'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <div className='d-flex justify-content-between mx-5 mt-5'>
              <h2>{prop.title}</h2>
              <p>Don’t have an account yet? <Link to='/signup'>Create new for free!</Link></p>
            </div>
            <div className="modal-body row ">
              <div className='col-lg-6 col-md-6 col-12'>
                <form className="">

                  <div className="form-floating ">
                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <button className="w-100 mb-3 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>


                  <button className="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                    <a className='text-decoration-none' href='/'><img className='pb-1' src={facebook} alt='facebook' /> Sign up with Facebook</a>

                  </button>
                  <button className="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                    <a className='text-decoration-none' href='/'><img className='pb-1' src={google} alt='google' /> Sign up with Google</a>

                  </button>
                  <button className='w-100 mt-1 px-0 forgot_pass'>
                    <a className='text-decoration-none  ' href='/'>Forgot Password?</a>
                  </button>

                </form>
              </div>
              <div className='col-4 d-none d-md-block'>
                <img src={imgsrc} alt='image' />
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login
