import React from 'react'
import './Mstyle.css'
import google from '../img/google.jpg'
import facebook from '../img/facebook.jpg'

const Msignup = () => {
    return (
        <>
            <div id='moboModal' className=' w-100 h-100'>

                <div className="moboForm">
                    <div className='d-flex justify-content-between mx-3 '>
                        <h3>Create Account</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form >
                        <div className='d-flex'>
                            <label for="floatingName"></label>
                            <input type='text' className="form-control rounded-0" id='FirstName' name='FirstName' placeholder='First Name' />
                            <label for="floatingName"></label>
                            <input type='text' className="form-control rounded-0" id='FirstName' name='FirstName' placeholder='First Name' />
                        </div>

                        <div className="form-floating ">
                            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Confirm Password" />
                            <label for="floatingPassword">ConfirmPassword</label>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button className="mb-3 btn btn ms-2 px-5 rounded-5 btn-primary" type="submit">Sign up</button>
                            <a className=' me-4' href=''>or, Sign In</a>
                        </div>

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
                    <p style={{ fontSize: '11px', textAlign: 'center' }}>By signing up, you agree to our Terms & <br />conditions, Privacy policy</p>
                </div>
            </div>


        </>
    )
}

export default Msignup;
