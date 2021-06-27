import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Header from '../../header/Header'
import VPSongs from '../../VPSongs'
import NavBar from '../../navBar/NavBar'
import './MusicScreen.css'

const MusicScreen = () => {
    let player = document.querySelector('.music-player')
    player = React.createRef()
    let imageString = <img src='/assets/playbtn.png' alt='playlogo' />

  const handleClick = (e) => {
    let playBtn = document.querySelector('.rhap_play-pause-button')
    let songName = document.querySelector('.current-song')
    let allSongs = document.querySelectorAll('.single-song')
    let imageSlot = document.querySelector(`.song${e.target.id}`)
    let AllSongsArray = Array.from(allSongs)
    AllSongsArray.forEach((song) => {
      if(song.classList.contains('active')){
        song.classList.remove('active')
        
      }
    })
    removeImages()
    e.target.classList.add('active')
    player.current.audio.current.src = VPSongs[e.target.id].location
    songName.innerText = VPSongs[e.target.id].title
    imageSlot.src = '/assets/playbtn.png'
    playBtn.click()
  }

  const removeImages = () => {
    let allImageSlots = document.querySelectorAll('.play-icon')
    let allImageArray = Array.from(allImageSlots)
    allImageArray.forEach((box) => box.src = '')
  }

  let singleSong = document.querySelector('single-song')
  let idnum = -1;
  return (
    <>
    <Header />
    <NavBar />
    <div className='song-container'>
      <div className='seperator'></div>
    {VPSongs.map((song) => {
      idnum++;
      return(
        <div id={idnum} onClick={handleClick} className="single-song">
            
            <img className={`song${idnum} play-icon`} />
          
          <h2 className="song-title">{song.title}</h2>
        </div>
      )
    })}
    </div>
    <footer className="player-container">
      <h2 className="current-song"></h2>
    <AudioPlayer
        autoPlayAfterSrcChange
        ref={player}
        src
        className="music-player"
        showFilledProgress
        showSkipControls
    />
    </footer>
    </>
  )
}

export default MusicScreen;