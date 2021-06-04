import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song1 from '../../assets/Greatness.mp3'

import NavBar from '../navBar/NavBar'
import './HomePage.css'
import Header from '../header/Header'

const HomePage = () => {
  let slider = document.querySelector('#slider')
  let thumbnailSlider = document.querySelector('#slider_thumbnail')

// $(function(){
//   $("#slider").slick({
//     autoplay: true,
//     speed: 1000,
//     arrows: false,
//     asNavFor: "#thumbnail_slider"
//   });
//   $("#thumbnail_slider").slick({
//     slidesToShow: 3,
//     speed: 1000,    
//     asNavFor: "#slider"
//   });
// });

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
};

  var settings2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,    
    asNavFor: slider,
    arrows: true,
};


var vpsongs = [
  {
    title: 'Greatness',
    location: '../../assets/Greatness.mp3'
  },
  {
    title: 'Meat Posse Jam',
    location: '../../assets/meatpossejam.mp3'
  },
  {
    title: 'Reap and Contrast Proto',
    location: '../../assets/REAPANDCONTRASTPROTO.mp3'
  },
  {
    title: 'Reap Krush',
    location: '../../assets/REAPKRUSH.mp3'
  },
  {
    title: 'VP Afterlife VP Vol2',
    location: '../../assets/VPAFTERLIFEVPVOL2.mp3'
  },
  {
    title: 'VP Rotting Beat VP',
    location: '../../assets/VProttingbeatvp.mp3'
  },
  {
    title: 'VP Reap Kilz',
    location: '../../assets/VPREAPKILZRIP.mp3'
  }
]

  const changeSong = (e) => {
    let songsrc = document.querySelector('.home-player')
    console.log(e.target.src)
  }


  return (
  <>
    <Header />
   <NavBar />
    <div backgroundimage src='' className="main-content">
    <Slider {...settings} className="slider"  id='slider'>
      {vpsongs.map((song) => {
        return(
          <div className="options">
            <h2>{song.title}</h2>
          </div>
        )
      })}
    </Slider>
    <Slider {...settings2}  id='thumbnail_slider'>
     {vpsongs.map((song) => {
        return(
          <div className="options">
            <h2>{song.title}</h2>
          </div>
        )
      })}
      </Slider>
      <AudioPlayer
      className="home-player"
      autoplay
      showFilledProgress
      showSkipControls
      src= '../../assets/Greatness.mp3'
      onPlay={(e) => changeSong(e)}
      />
    </div>
  </>
  )
}

export default HomePage;