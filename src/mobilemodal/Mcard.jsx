import React from 'react'
import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CreateTwoToneIconLarge from '@mui/icons-material/CreateTwoTone';
import UserBar from '../components/UserBar';
import pen from '../img/pen.jpg'
import Banner from '../components/Banner';
import larrow from '../img/Arrowl.png'
const Mcard = () => {
    const posts = [
        {
            userFname: "Aarti ",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",
            category: "actor",
            imgsrc: "https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            views: 12
        },
        {
            userFname: "Aditya",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",
            category: "Education",
            imgsrc: "https://i.pinimg.com/originals/cd/bc/f0/cdbcf077b62246123f74fcc919587b0b.jpg",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            views: 1
        },
        {
            userFname: "Aarti ",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",
            category: "actor",
            imgsrc: "https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            views: 12
        },
        {
            userFname: "Aditya",
            userLname: "singh",
            userimg: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookIndia.jpg",
            category: "Education",
            imgsrc: "https://i.pinimg.com/originals/cd/bc/f0/cdbcf077b62246123f74fcc919587b0b.jpg",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            views: 1
        }
    ];
    return (
        <>
            <div>
                <div>

                    <img style={{ height: '24px', width: '30px', position: 'absolute', zIndex: '1', top: '2rem', left: '1rem', backgroundColor: 'transparent' }} src={larrow} alt='left-arrow' />
                    <button style={{position: 'absolute', zIndex: '1', top: '2rem',right:'2rem', backgroundColor:'transparent', color:'white', fontSize:'15px', fontWeight:'bold', padding:'5px 10px 5px 10px'}}>Join Group</button>
                    <Banner />
                </div>
                <img style={{ height: '70px', width: '70px', position: 'fixed', zIndex: '1', borderRadius: '60%', top: '45rem', right: '0.3rem', }} src={pen} alt='pen' /></div>
            {
                posts.map((post, index) => (
                    <div key={index} className="card my-3  w-100" style={{ marginLeft: '2.5rem' }}>
                        <img src={post.imgsrc} className="card-img-top" alt="photo" />
                        <div className="card-body">
                            <p>{post.category}</p>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">{post.title}</h5>
                                <MoreHorizOutlinedIcon />
                            </div>
                            <p className="card-text">{post.text}</p>

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <UserBar userimg={post.userimg} userFname={post.userFname} userLname={post.userLname} />

                                    <span style={{ marginLeft: '4rem' }}> {post.views} views</span>
                                </div>
                                <div>

                                    <button className='border-0 bg-light ms-4'>
                                        <a href="#" className="mx-2 text-decoration-none">
                                            <ShareIcon /> Share</a>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>)
                )
            }
        </>
    )
}

export default Mcard
