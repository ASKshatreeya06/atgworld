import React, { useState } from 'react'
import imgsrc from '../img/logimg.png'
import google from '../img/google.jpg'
import facebook from '../img/facebook.jpg'
import { Link } from 'react-router-dom'
import './Signup.css'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Signup = (prop) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <!-- Modal --> */}
            {/* <div className="modal fade " id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg h-100 pb-5" >
                    <div className="modal-header custom-transparent ">
                        <button show={show} onHide={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-content ">
                       
                        <p classNameName='text-center my-3 d-none d-lg-block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        <div classNameName='d-flex justify-content-between mx-5 d-none d-lg-block'>
                            <h2>{prop.title}</h2>
                            <p>Don’t have an account yet? <a classNameName='text-decoration-none' href='/'>Create new for free!</a></p>
                        </div>
                        <div className="modal-body row ">
                            <div classNameName='col-lg-6 col-md-6 col-12'>
                                <form classNameName="">
                                <div className="form-floating ">
                                        <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="First Name" />
                                        <label for="floatingInput">First Name</label>
                                    </div><div className="form-floating ">
                                        <input type="text" className="form-control rounded-3" id="floatingInput" placeholder="Last Name" />
                                        <label for="floatingInput">Last Name</label>
                                    </div>
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
                                        <a classNameName='text-decoration-none' href='/'> Sign up with Facebook</a>

                                    </button>
                                    <button className="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                                        <a classNameName='text-decoration-none' href='/'> Sign up with Google</a>

                                    </button>
                                  

                                </form>
                            </div>
                            <div classNameName='col-4 d-none d-md-block'>
                                <img src={imgsrc} alt='image'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
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
                        <p className='text-center my-3 text-success'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        <div className='d-flex justify-content-between mx-5'>
                            <h2>{prop.title}</h2>
                            <p>Already have an account? <Link to='/login'>Sign In</Link></p>
                        </div>
                        <div className="modal-body row ">
                            <div className='col-lg-6 col-md-6 col-12 ps-5'>
                                <form className="">
                                    <div className='d-flex'>
                                        <label for="floatingName"></label>
                                        <input type='text' className="form-control rounded-0" id='FirstName' name='FirstName' placeholder='First Name' />
                                        <label for="floatingName"></label>
                                        <input type='text' className="form-control rounded-0" id='FirstName' name='FirstName' placeholder='First Name' />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label for="email"></label>
                                        <input type="email" className="form-control w-100 m-0" id="email" name='email' placeholder="name@example.com" />


                                        <label for="Password"></label>
                                        <input type="password" className="form-control w-100" id="Password" placeholder="Password" /><span id='eye'><RemoveRedEyeOutlinedIcon/></span>
                                        <label for="PasswordConfirm"></label>
                                        <input type="password" className="form-control w-100 bi bi-eye" id="PasswordConfirm" placeholder="Confirm Password" />


                                        <button className="w-100 mb-3 mt-3 btn btn-lg rounded-5 btn-primary" type="submit">Create Account</button>


                                        <button className="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                                            <a className='text-decoration-none' href='/'> <img className='pb-1 pe-2' src={facebook} alt='facebook' />Sign up with Facebook</a>

                                        </button>
                                        <button className="w-100 py-1 mb-3 btn btn-outline-secondary rounded-3" type="submit">
                                            <a className='text-decoration-none' href='/'> <img className='pb-1 pe-2' src={google} alt='google' />Sign up with Google</a>

                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='col-6 d-none d-md-block'>
                                <img src={imgsrc} alt='image' />
                                <p style={{fontSize:'11px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
