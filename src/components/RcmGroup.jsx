import React, { useState } from 'react'
import UserBar from './UserBar'


const RcmGroup = (user) => {
    const profiles = [
        {
            userFname: "Aarti ",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",

        },
        {
            userFname: "Aditya",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",

        },
        {
            userFname: "Aarti ",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",

        },
        {
            userFname: "Aditya",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",

        }
    ];
    const [follow, setFollow] = useState('Follow');
    const [count, setCount] = useState(0);
    const [setb, setSetb] = useState('');
    const [setc, setSetc] = useState('');
    const handleFollw = () => {
        if (count == 0) {

            setFollow('Followed');
            setSetb('black');
            setSetc('white')
            setCount(count + 1);
        } else {
            setFollow('Follow');
            setSetb('');
            setSetc('');
            setCount(count - 1);
        }
    }
    const style = {
        backgroundColor: setb,
        color:setc
        
    }
    return (
        <>
            {profiles.map((User, index) => (
                <div key={index} className='d-flex flex-row justify-content-around mt-5'>
                    <div className='userdetails'>
                        <img src={User.userimg} alt='user-photo' />

                        <span className='mx-2'>{User.userFname} {User.userLname}</span>
                    </div>
                    <button style={style} className=' rounded-5 px-4' onClick={handleFollw}>{follow}</button>
                </div>))
            }
        </>
    )
}

export default RcmGroup
