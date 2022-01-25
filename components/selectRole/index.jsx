import React from "React";
import Card from "../Card";
import menteeImg from "../../assets/images/menteeRole.png";
import mentorImg from "../../assets/images/mentorRole.png";

const menteeDescriptionArray = [
    "This application is the first step to guide your one-to-one mentoring search.",
    "Match with your most ideal mentors from a qualified pool of experienced and successful professionals.",
    "Join a high-quality three-month mentoring program on our platform with the mentor of your choice.",
    "Gain access to unlimited support with our user care team."
]

const mentorDescriptionArray = [
    "Share your knowledge and experience with the next generation via our high-quality mentoring platform.",
    "Your involvement with eMentorHub means giving back to the community.",
    "Get free access to approved mentor-only training on leadership, communication, and personal brand.",
    "Increase the visibility of your personal brand in the business community.",
    "Access a free listing of your coaching package."
]

const menteeShortDescription = "Our one-to-one mentoring program provide you the best match to bounce your ideas off.";

const mentorShortDescription = "Share your knowledge and experience with the next generation in our high-quality mentoring platform.";

const menteeButtonContent = "Join for free";

const mentorButtonContent = "I want to help";


function SelectRole() {
    return (
        <section className="select-role p-top-40 p-bottom-40 bg-blue">
            <div className="container">
                <div className="group_title text-center">
                    <h2 className="cl-black fz-30 fw-600 m-bottom-30">Choose Your Role</h2>
                </div>
                <div className="row items">
                    <Card 
                        src={menteeImg}
                        role="mentee"
                        shortDescription={menteeShortDescription}
                        descriptionArray={menteeDescriptionArray}
                        buttonContent={menteeButtonContent}
                    />
                    <Card 
                        src={mentorImg}
                        role="mentor"
                        shortDescription={mentorShortDescription}
                        descriptionArray={mentorDescriptionArray}
                        buttonContent={mentorButtonContent}
                    />
                </div>
            </div>
        </section>
    )
}

export default SelectRole;