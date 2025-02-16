import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Valentine from "./components/Valentine";
import VideoSection from "./components/video-section";
import Section6 from "./components/section6";
import video1 from "./video/IMG_5112.mp4"
import video2 from "./video/IMG_5894.mp4"
import Gallery from "./components/gallery";

export default function App() {
  return (
    <div className="App">
        <Header      />
        <Section1    />
        <Section2    />
        <Section3    />
        <Valentine   />
        <VideoSection video={video1} text={"Лавки чмавки)"} autoPlay={true} loop={true} mute={true} controls={true}/>
        <Section6  />
        <VideoSection video={video2} text={"Мне так нравится проводить с тобой время ты бы знала)"}
                      autoPlay={false} loop={false} mute={false} controls={true} />
        <Gallery />
    </div>
  );
}