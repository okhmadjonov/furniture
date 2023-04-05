import React, { useRef, useState } from "react";
import "./aboutus.scss";
import video from "../../assets/videos/vid1.mp4";
import { BsFillPlayFill, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Aboutus = () => {
  const [isplay, setisplay] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };
  return (
    <div className="aboutus">
      <div className="aboutus__container">
        <div className="aboutus__wrapper">
          <div className="aboutus__video">
            <div className="videoBlock">
              <video
                ref={audioRef}
                controls={isplay}
                onPlay={() => setisplay((prev) => true)}
                onPause={() => setisplay((prev) => false)}
                className="video"
                src={video}></video>
              {!isplay && (
                <>
                  <div className="playVideoWrapper" onClick={handleClick}>
                    <div className="playVideoCircle"></div>
                    <BsFillPlayFill className="playVideoBtn" />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="aboutus__since">
            <div className="since__wrapper">
              <div className="since__title">
                <h3>SINCE 1990' S</h3>
              </div>
              <div className="since__subtitle">
                <p>
                  Ac varius lectus tellus tellus quisque tristique aenean.
                  Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel
                  purus velit dui vel egestas purus sed. Eget turpis tincidunt
                  faucibus montes arcu in nullam tortor orci. Nulla tellus sed
                  purus vestibulum sagittis pretium donec nec mattis ollis porta
                  sit ut. Facilisi ut vulputate volutpat a aliquet.
                  <br />
                  <br /> Facilisis sed quis pretium amet hac. Justo tristique
                  sagittis sodales viverra venenatis integer fringilla.
                </p>
              </div>
              <Link to="/" className="since__btn">
                <button>
                  ABOUT US <BsArrowRight style={{ fontSize: "22px" }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
