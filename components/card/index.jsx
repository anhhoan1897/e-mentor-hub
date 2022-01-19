import React from "React";
import Image from "next/image";

function Card(props) {

    const { src } = props;

  return (
    <div className="col-md-6 item">
      <div className="inner bg-white">
        <div className="top p-top-40 p-bottom-40 text-center">
          <Image src={src} alt="mentee" />
          <h4 className="cl-black fz-20 fw-600 m-bottom-10 m-top-30">Mentee</h4>
          <div className="content m-bottom-30">
            Our one-to-one mentoring program provide you the best match to
            bounce your ideas off.
          </div>
          <div className="link">
            <a
              title="Learn More"
              target="_blank"
              href="https://ementorhub.com/en/be-a-mentee/"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="bottom text-white">
          <div className="group_content">
            <div className="title text-white text-center fz-20 fw-600 m-bottom-10">
              Be A Mentee
            </div>
            <div className="content text-white m-bottom-20">
              <ul>
                <li>
                  This application is the first step to guide your one-to-one
                  mentoring search.
                </li>
                <li>
                  Match with your most ideal mentors from a qualified pool of
                  experienced and successful professionals.
                </li>
                <li>
                  Join a high-quality three-month mentoring program on our
                  platform with the mentor of your choice.
                </li>
                <li>
                  Gain access to unlimited support with our user care team.
                </li>
              </ul>
            </div>
            <div className="link text-center bg-link">
              <a
                title="Join for free"
                target="_blank"
                href="https://ementorhub.com/en/sign-up/"
                rel="noreferrer"
              >
                Join for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
