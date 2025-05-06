
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import './Gallery.css';
import Img1 from './images/g1.jpg';
import Img2 from './images/g2.jpg';
import Img3 from './images/g5.jpg';
import Img4 from './images/g4.jpg';
import Img5 from './images/g3.jpg';
import Img6 from './images/g6.jpg';

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1, // Use the imported variables directly
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
   
  ];

  const[model, setModel] = useState(false);
  const[tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) =>{
      setTempImgSrc(imgSrc);
      setModel(true);    
  }
  return (
    <>
    <div className={model? "model open" : "model"}>
    <img src={tempImgSrc}/>

    <CloseIcon onClick={()=>setModel(false)} /></div>
      <div className="gallery">
        {data.map((item, index)=>{
          return (
            <div className="pic" key={index} onClick={()=> getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width:'100%'}} /> 
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;


