import React from 'react'
import NavBar from '../../../Home/components/NavBar';
import firstBg from "../../../images/first bg.webp"
import VideoPlayer from '../VideoPlayer/VideoPlayer';

function VideoHeader() {
  return(
    <header>
        <NavBar transparent={true}></NavBar>
        <VideoPlayer/>
    </header>
);
}

export default VideoHeader;

