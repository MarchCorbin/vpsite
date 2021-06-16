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

  const handleClick = (e) => {
    let playBtn = document.querySelector('.rhap_play-pause-button')
    let songName = document.querySelector('.current-song')
    console.log(player)
    player.current.audio.current.src = VPSongs[e.target.id].location
    songName.innerText = VPSongs[e.target.id].title
    playBtn.click()
  }

  let idnum = -1;
  return (
    <>
    <Header />
    <NavBar />
    <div className='song-container'>
    {VPSongs.map((song) => {
      idnum++;
      return(
        <div id={idnum} onClick={handleClick} className="single-song">
          <h2 className="song-title">{song.title}</h2>
        </div>
      )
    })}
    </div>
    <footer>
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