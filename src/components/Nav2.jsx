import React from 'react'

const Nav2 = (prop) => {
    return (
        <div>
            {/* <nav className="navbar  "> */}
                <div  className="container-fluid w-100 bg-body-tertiary">



                    <ul className="navbar-nav w-100 d-flex flex-row justify-content-between ">
                        <li className="nav-item">
                            <a className="nav-link active ms-4 fw-bold" aria-current="page" href="#">Posts ({prop.post})</a>
                        </li>

                        <li className="nav-item dropdown me-4">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                filter
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            {/* </nav> */}
        </div>
    )
}

export default Nav2
