import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import NavBar from '../navBar/NavBar'
import './HomePage.css'
import Header from '../header/Header'
import vpsongs from '../VPSongs'

const HomePage = () => {
  let slider = document.querySelector('#slider')
  let thumbnailSlider = document.querySelector('#slider_thumbnail')

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

    let player = document.querySelector('.home-player')
    player = React.createRef()
    let songLocation = 0;
    const maxLocation = vpsongs.length


  const nextSong = (e) => {
    songLocation++
    if(songLocation > maxLocation){songLocation = 0}
    player.current.audio.current.src = vpsongs[songLocation].location
    updateHeader()
  }

  const previousSong = (e) => {
    songLocation--
    if(songLocation < 0){songLocation = 0}
    player.current.audio.current.src = vpsongs[songLocation].location
    updateHeader()
  }

  useEffect(() => {
  console.log(vpsongs[songLocation].title)
})

  const updateHeader = () => {
    const songTitle = document.querySelector('.song-title')
    if(songTitle) {
      songTitle.innerText = vpsongs[songLocation].title
    }
  }
 

  return (
  <>
    <Header />
   <NavBar />
    <div backgroundimage className="main-content">
    {/* <Slider {...settings} className="slider"  id='slider'>
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
      </Slider> */}
      <h2 className='song-title'>{vpsongs[songLocation].title}</h2>
      <footer>
      <AudioPlayer
        ref={player}
        className="home-player"
        header={updateHeader()}
        showFilledProgress
        showSkipControls
        src= {vpsongs[songLocation].location}
        onClickNext={(e) => nextSong(e)}
        onClickPrevious={(e) => previousSong(e)}
      />
      </footer>
    </div>
  </>
  )
}

export default HomePage;