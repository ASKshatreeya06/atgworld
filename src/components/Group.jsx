import React, { useState } from 'react'
import './Group.css'
import location from '../img/location.png'
import RcmGroup from './RcmGroup';


const Group = () => {
    const [area, setArea] = useState('');
    const lction =(e)=>{
        setArea('');
    }
    const State = ()=>{
        
    }
    return (
        <>
            <div className='Group d-flex mt-5 m-auto'>
                <img className='my-1' src={location} alt='location' />
                <input placeholder='Enter Your location' onClick={State} value={area} onChange={(e) => setArea(e.target.value)} />
                
                <button onClick={lction}>&times;</button>
            </div>
            <div>
                <RcmGroup />
            </div>
        </>
    )
}

export default Group
