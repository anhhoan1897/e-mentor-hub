import React from "React";
import Image from "next/image";

function Card(props) {
  const { src, role, shortDescription, descriptionArray, buttonContent } = props;
  return (
    <div className="col-md-6 item">
      <div className="inner bg-white">
        <div className="top p-top-40 p-bottom-40 text-center">
          <Image src={src} alt={role} />
          <h4 className="cl-black fz-20 fw-600 m-bottom-10 m-top-30 capitalize">{role}</h4>
          <div className="content m-bottom-30">{shortDescription}</div>
          <div className="link">
            <a
              title="Learn More"
              target="_blank"
              href={`https://ementorhub.com/en/be-a-` + role}
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="bottom">
          <div className="group_content">
            <div className="title text-white text-center fz-20 fw-600 m-bottom-10">
              {`Be A ` + role}
            </div>
            <div className="content text-white m-bottom-20 ">
              <ul>
                {
                  descriptionArray.map((element, i) => {
                    return (
                      <li key={i}>{element}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="link text-center bg-link">
              <a
                title={buttonContent}
                target="_blank"
                href="https://ementorhub.com/en/sign-up/"
                rel="noreferrer"
              >
                {buttonContent}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
