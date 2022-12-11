import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useEffect } from "react";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const player = () => {
  <></>;
};
export default function Home() {
  useEffect(() => {
    document.querySelector("audio").play();
  }, []);
  return (
    <>
      <audio src="musics/s.mp3" />
      <div className={styles.container}>
        <div className="wrapper">
          <div className="border-circle" id="one"></div>
          <div className="border-circle" id="two"></div>
          <div className="background-circle">
            <div className="triangle-light"></div>
            <div className="body"></div>
            <span className="shirt-text">M</span>
            <span className="shirt-text">♥</span>
            <span className="shirt-text">R</span>
            <span className="shirt-text">Y</span>
            <span className="shirt-text">AM</span>
            <div className="triangle-dark"></div>
          </div>
          <div className="head">
            <div className="ear" id="left"></div>
            <div className="ear" id="right"></div>
            <div className="hair-main">
              <div className="sideburn" id="left"></div>
              <div className="sideburn" id="right"></div>
              <div className="hair-top"></div>
            </div>
            <div className="face">
              <div className="hair-bottom"></div>
              <div className="nose"></div>
              <div className="eye-shadow" id="left">
                <div className="eyebrow"></div>
                <div className="eye"></div>
              </div>
              <div className="eye-shadow" id="right">
                <div className="eyebrow"></div>
                <div className="eye"></div>
              </div>
              <div className="mouth"></div>
              <div className="shadow-wrapper">
                <div className="shadow"></div>
              </div>
            </div>
          </div>
          <span className="music-note" id="one">
            &#9835;
          </span>
          <span className="music-note" id="two">
            &#9834;
          </span>
        </div>
      </div>
    </>
  );
}
