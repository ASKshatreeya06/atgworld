import React from 'react'
import group from '../img/group_add.jpg'
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Nav = (prop) => {
    
    return (
        <>
            <nav className="d-none d-lg-block navbar navbar-expand-lg bg-body-tertiary sticky-top mt-5 mx-5">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">All Posts({prop.post})</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Article</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Event</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Job</a>
                            </li>


                        </ul>
                        <div className="dropdown mx-5 me-5">
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Write Post
                            </button>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className='btn btn-primary me-5 '><GroupAddIcon /> Join Group</button>
                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Nav
