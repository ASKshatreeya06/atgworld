import React from 'react'
import './UserBar.css'

const UserBar = (User) => {
    return (
        <div className='userdetails'>
            <img src={User.userimg} alt='user-photo' />

            <span className='mx-2'>{User.userFname} {User.userLname}</span>
        </div>
    )
}

export default UserBar
