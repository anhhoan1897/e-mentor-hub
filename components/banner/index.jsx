import React from "React";
import Image from "next/image";
import bgVideo from "../../assets/images/backgroundVideo.png";
import ReactPlayer from 'react-player';

function Banner() {
  return (
    <section className="banner p-top-60 p-bottom-40 bg-blue">
      <div className="container">
        <div className="wrap-banner">
          <div className="group_title text-center">
            <h1 className="h1-text text-white">eMentorHub</h1>
            <div className="text-white">
              <p className="sub-title-banner">
                A powerful platform for growth and mentorship at your fingertips
              </p>
            </div>
          </div>
          <div className="group_video text-center">
            <div className="inner">
              <a>
                <ReactPlayer url='https://www.youtube.com/watch?v=3cYL8wUfc9g'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
