import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Header from '../../header/Header'
import VPSongs from '../../VPSongs'
import NavBar from '../../navBar/NavBar'
import './MusicScreen.css'

const MusicScreen = () => {


  return (
    <>
    <Header />
    <NavBar />
    {VPSongs.map((song) => {
      return(
        <div className="single-song">
          <h2>{song.title}</h2>
        </div>
      )
    })}
    <footer>
    <AudioPlayer
        className="music-player"
        showFilledProgress
        showSkipControls
    />
    </footer>
    </>
  )
}

export default MusicScreen;