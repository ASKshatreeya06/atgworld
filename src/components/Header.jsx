import React from 'react'
import logo from '../img/whole.jpg'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-4 border">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="./index.html"><img
            src={logo} alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">

            </ul>
            <form className="d-flex me-auto align-item-center" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>

            <div class="dropdown-center">
              <button class="btn btn-lightblue dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Create account.<b>It's free!</b>
              </button>
              <ul class="dropdown-menu">
                <li data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <Link class="dropdown-item" to="/login">Login</Link>
                </li>
                <li><Link class="dropdown-item" to="/home">home</Link></li>
                <li data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <Link class="dropdown-item" to="/signup">sing up</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
