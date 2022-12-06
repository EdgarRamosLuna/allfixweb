import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import { GalleryS } from '../../styles/Main';
const imagesList1 = [
    {
        title: 'Servicios eléctricos'
    },
    {
        img: '/assets/img/s1/1.jpeg'
    },
    {
        img: '/assets/img/s1/2.jpeg'
    },
    {
        img: '/assets/img/s1/3.jpeg'
    },
    {
        img: '/assets/img/s1/4.jpeg'
    },
];
const imagesList2 = [
    {
        title: 'Sistemas de enfriamiento'
    },
    {
        img: '/assets/img/s2/1.jpeg'
    },
    {
        img: '/assets/img/s2/2.jpeg'
    },
    {
        img: '/assets/img/s2/3.jpeg'
    },
    {
        img: '/assets/img/s2/4.jpeg'
    },
    {
        img: '/assets/img/s2/5.jpeg'
    },
    {
        img: '/assets/img/s2/6.jpeg'
    },
    {
        img: '/assets/img/s2/7.jpeg'
    },
    {
        img: '/assets/img/s2/8.jpeg'
    },
];
const imagesList3= [
    {
        title: 'Servicios de pintura e impermeabilizante'
    },
    {
        img: '/assets/img/s3/1.jpeg'
    },
    {
        img: '/assets/img/s3/2.jpeg'
    },
    {
        img: '/assets/img/s3/3.jpeg'
    },
    {
        img: '/assets/img/s3/4.jpeg'
    },
    {
        img: '/assets/img/s3/5.jpeg'
    },
    {
        img: '/assets/img/s3/6.jpeg'
    },
    {
        img: '/assets/img/s3/7.jpeg'
    },
    {
        img: '/assets/img/s3/8.jpeg'
    },
    {
        img: '/assets/img/s3/9.jpeg'
    },
];
const imagesList4 = [
    {
        title: 'Servicios de carpintería'
    },
    {
        img: '/assets/img/s4/1.jpeg'
    },
    {
        img: '/assets/img/s4/2.jpeg'
    },
    {
        img: '/assets/img/s4/3.jpeg'
    },
    {
        img: '/assets/img/s4/4.jpeg'
    },
];

const Gallery = (props) => {
 const {id} = props;
  const params = useParams();
  //let id = parseInt(params.num);
  console.log(id);
  const {hideService} = useContext(MainContext);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    if(id === 1){
        setData(imagesList1);
    }
    if(id === 2){
        setData(imagesList2);
    }
    if(id === 3){
        setData(imagesList3);
    }
    if(id === 4){
        setData(imagesList4);
    }
    setShowData(true);
  }, []);
  return (
    <GalleryS>
        <div className='container'>
            <div className='close-btn' onClick={hideService}>
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div className='title'><h1><i class="fa-solid fa-users-gear"></i> <br />{ data.length > 1 && data[0].title }</h1></div>
            <div className='img-container'>
                
                {
                    showData == true ? (
                        data.map((imgs, i) =>{
                            return (
                                
                                i === 0 ? "":
                                    <div className='img-item'>
                                        <div className='img'>
                                            <img src={imgs.img} alt="" />
                                        
                                        </div>
                                    </div>
                                
                            
                            )
                        })
                    ) : ""
                }
                
                
            </div>

        </div>
    </GalleryS>
  )
}

export default Gallery