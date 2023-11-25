import React, { useState } from 'react'
import './Card.css'
import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import UserBar from './UserBar';

const Card = () => {
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
  // const [photo, setPhoto] = useState('');
  return (
    <>
      {
        posts.map((post, index) => (
          <div key={index} className="card my-3" style={{ width: '18rem;' }}>
            <img src={post.imgsrc} className="card-img-top" alt="photo" />
            <div className="card-body">
              <p>{post.category}</p>
              <div className='d-flex justify-content-between'>
                <h5 className="card-title">{post.title}</h5>
                <MoreHorizOutlinedIcon />
              </div>
              <p className="card-text">{post.text}</p>

              <div className='d-flex justify-content-between'>
              <div className='d-flex flex-sm-column'>
                  <UserBar userimg={post.userimg} userFname={post.userFname} userLname={post.userLname} />
                  <span>{post.views} views</span>
                  
                </div>
                <button className='border-0'>
                  <a href="#" className="mx-2 text-decoration-none">
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>share</a>
                </button>
              </div>

            </div>
          </div>)
        )
      }
    </>
  )
}

export default Card
