import React from 'react';
import video_clip from "./Assets/video_clip.mp4";
import "./Home.css"; // External CSS for styling
import word_logo from './Assets/fitfusion.jpg';

function Home() {
  return (
    <>
      <section id='home'>
        <video
          src={video_clip}
          autoPlay
          loop
          muted
          playsInline
          className="fixed-top-left-video"
        >
        </video>
        <p id='welcome'>WELCOME TO <br></br><img id='word_logo' src={word_logo} alt='FitFusion'></img><br></br>WHERE FITNESS MEETS NUTRITION</p>
      </section>
    </>
  );
}

export default Home;
