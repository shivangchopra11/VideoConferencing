import { useState } from 'react';
import './App.css';
import {WebcamComponent} from './Components/Webcam/webcam';
import {VideoPlayerComponent} from './Components/VideoPlayer/video-player';
import Mute from "./Assets/Images/mute.png";
import Unmute from "./Assets/Images/unmute.png";
import VideoOn from "./Assets/Images/videoOn.png";
import VideoOff from "./Assets/Images/videoOff.png";
import Leave from "./Assets/Images/end-call.png";
import SideNavbar from './Components/SideNavbar/SideNavbar';
import HeadBar from './Components/HeadBar/HeadBar';

function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [muteAudio, setMuteAudio] = useState(true);
  return (
    <div>
      <div>
        <SideNavbar />
        <HeadBar />
        {(
            <div className="videoCalling">
            <div className="headVideoPanel">
                <div className="controlVideo" onClick={() => {
                  setMuteAudio(!muteAudio);
                  console.log(muteAudio);
                }}>
                <img src={!muteAudio ? Mute : Unmute} alt="mute" />
                </div>
                <div className="controlVideo" onClick={() => {
                  setShowVideo(!showVideo);
                  console.log(showVideo);
                }}>
                <img
                    src={showVideo ? VideoOn : VideoOff}
                    alt="video off"
                />
                </div>
                <div className="controlVideo ">
                  <div className="leave">
                    <img src={Leave} alt="video off" /> Leave
                  </div>
                </div>
            </div>
            <div className="videos">
                <>
                <WebcamComponent showVideo={showVideo} muteAudio={muteAudio} />
                </>

                <>
                <VideoPlayerComponent showVideo={showVideo} muteAudio={muteAudio} />
                </>

            </div>
            </div>
        )}
        </div>
    </div>
  );
}

export default App;
