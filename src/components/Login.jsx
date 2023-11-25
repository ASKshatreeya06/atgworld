import React, { useState } from 'react'
import imgsrc from '../img/logimg.png'
import './Login.css'

const Login = (prop) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const handlesubmit = (e) => {

  }
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login
      </button> */}

      {/* <!-- Modal --> */}
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg h-100 pb-5" >
          <div class="modal-header custom-transparent ">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-content ">
            <div className='d-flex justify-content-between mx-3 mt-5'>
              <h3>Welcome Back</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p className='text-center my-3 d-none d-lg-block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <div className='d-flex justify-content-between mx-5 d-none d-lg-block'>
              <h2>Sign In</h2>
              <p>Don’t have an account yet? <a className='text-decoration-none' href='/'>Create new for free!</a></p>
            </div>
            <div class="modal-body row ">
              <div className='col-lg-6 col-md-6 col-12'>
                <form class="">
                  <div class="form-floating ">
                    <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <button class="w-100 mb-3 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>


                  <button class="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                    <a className='text-decoration-none' href='/'> Sign up with Facebook</a>

                  </button>
                  <button class="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                    <a className='text-decoration-none' href='/'> Sign up with Google</a>

                  </button>
                  <button className='w-100 mt-5 px-0 forgot_pass'>
                    <a className='text-decoration-none  ' href='/'>Forgot Password?</a>
                  </button>

                </form>
              </div>
              <div className='col-4 d-none d-md-block'>
                <img src={imgsrc} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login
