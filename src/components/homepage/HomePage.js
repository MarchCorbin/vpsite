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
  let playBtn = document.querySelector('.rhap_play-pause-button')

    let player = document.querySelector('.home-player')
    player = React.createRef()
    let songLocation = 0;
    const maxLocation = vpsongs.length


  const nextSong = (e) => {
    songLocation++
    if(songLocation > maxLocation){songLocation = 0}
    player.current.audio.current.src = vpsongs[songLocation].location
    updateHeader()
    playBtn.click()
  }

  const previousSong = (e) => {
    songLocation--
    if(songLocation < 0){songLocation = 0}
    player.current.audio.current.src = vpsongs[songLocation].location
    updateHeader()
    playBtn.click()
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
      <img className="home-image" src="../../assets/VPlogo.jpeg" />
      <div className="main-shwocase">TESTING</div>
      </div>
      <footer className='home-footer'>
        <h2 className='song-title'>{vpsongs[songLocation].title}</h2>
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
    
  </>
  )
}

export default HomePage;