import React from "React";
import Card from "../card";
import mentee from "../../assets/images/menteeRole.png";
import mentor from "../../assets/images/mentorRole.png";

function SelectRole() {
    return (
        <section className="home2 p-top-40 p-bottom-40 bg-blue">
            <div className="container">
            <div className="group_title text-center">
                <h2 className="cl-black fz-30 fw-600 m-bottom-30">Choose
                Your Role</h2>
            </div>
            <div className="row items">
                <Card src={mentee}/>
                <div className="col-md-6 item">
                <div className="inner bg-white">
                    <div className="top p-top-40 p-bottom-40 text-center">
                    <h4 className=
                    "cl-black fz-20 fw-600 m-bottom-10 m-top-30">
                    Mentor</h4>
                    <div className="content m-bottom-30">
                        Share your knowledge and experience with the
                        next generation in our high-quality mentoring
                        platform.
                    </div>
                    <div className="link">
                        <a title="Learn More" target="" href=
                        "https://ementorhub.com/en/be-a-mentor/">Learn
                        More</a>
                    </div>
                    </div>
                    <div className="bottom text-white">
                    <div className="group_content">
                        <div className=
                        "title text-white text-center fz-20 fw-600 m-bottom-10">
                        Be A Mentor
                        </div>
                        <div className="content text-white m-bottom-20">
                        <ul>
                            <li>Share your knowledge and experience
                            with the next generation via our
                            high-quality mentoring platform.</li>
                            <li>Your involvement with eMentorHub means
                            giving back to the community.</li>
                            <li>Get free access to approved mentor-only
                            training on leadership, communication, and
                            personal brand.</li>
                            <li>Increase the visibility of your
                            personal brand in the business
                            community.</li>
                            <li>Access a free listing of your coaching
                            package</li>
                        </ul>
                        </div>
                        <div className="link text-center bg-link">
                        <a title="I want to help" target="_blank"
                        href="https://ementorhub.com/en/sign-up/" rel="noreferrer">I
                        want to help</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default SelectRole;