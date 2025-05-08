import { Tab, Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import ExpCard from "./ExpCard";

import aiesec1 from "../assets/exp-img/aiesec1.jpg";
import aiesec2 from "../assets/exp-img/aiesec2.jpg";
import aiesec4 from "../assets/exp-img/aiesec4.JPG";
import aiesec5 from "../assets/exp-img/aiesec5.JPG";
import aiesec6 from "../assets/exp-img/aiesec6.JPG";
import aiesec7 from "../assets/exp-img/aiesec7.JPG";
import aiesec8 from "../assets/exp-img/aiesec8.JPG";
import aiesec9 from "../assets/exp-img/aiesec9.JPG";

import aiesec11 from "../assets/exp-img/aiesec11.JPG";
import aiesec12 from "../assets/exp-img/aiesec12.JPG";
import aiesec13 from "../assets/exp-img/aiesec13.JPG";
import aiesec14 from "../assets/exp-img/aiesec14.JPG";
import aiesec15 from "../assets/exp-img/aiesec15.JPG";

import uniqlo1 from "../assets/exp-img/uniqlo1.jpg";
import uniqlo2 from "../assets/exp-img/uniqlo2.JPG";
import uniqlo3 from "../assets/exp-img/uniqlo3.JPG";
import uniqlo4 from "../assets/exp-img/uniqlo4.JPG";
import uniqlo5 from "../assets/exp-img/uniqlo5.JPG";
import uniqlo6 from "../assets/exp-img/uniqlo6.JPG";

const experience = () => {

    const experience = [{
        company: "Uniqlo The Glen",
            title: "Store Partner",
            duration: "Jan 2025 - Present",
            description: [
                "Providing personalized assistance, understanding customer needs, and delivering exceptional service to enhance the shopping experience.",
                "Managing inventory, replenishing stock, and ensuring store displays align with UNIQLO’s visual merchandising standards.",
                "Working closely with team members to achieve sales goals, improve workflow, and maintain a positive work environment.",
                "Staying up to date with UNIQLO’s latest collections and technologies to educate customers on product features and benefits.",
                "Handling multiple responsibilities, including cashier duties, fitting room assistance, and customer inquiries in a fast-paced retail environment."
            ],
            event: null,
            picture: [uniqlo1, uniqlo2, uniqlo3, uniqlo4, uniqlo5, uniqlo6]
    },
    {
        company: "AIESEC Organization",
            title: "Outgoing Exchange Officer & Talent Manager",
            duration: "Mac 2024 - Nov 2024",
            description: [
                "Facilitated international collaboration with AIESEC branches to coordinate global volunteering programs.",
                "Promoted volunteer opportunities to university students, increasing outreach and participation.",
                "Successfully managed volunteer placements and oversaw team operations, fostering a collaborative environment.",
                "Organized events like team bonding activities and university collaborations to enhance teamcohesion.",
                "Created and managed social media content to boost engagement and elevate the memberexperience.",
                "Skills: Team management, event planning, project management, intercultural communication, leadership."
            ],
            picture: [aiesec11, aiesec12, aiesec13, aiesec14, aiesec15]
        ,
        event: {
            title: "AIESEC State Conference",
            duration: "July 2024",
            description: [
                "Participated in a state conference organized by AIESEC, focusing on leadership development and intercultural exchange.",
                "Engaged in workshops and discussions with international delegates, enhancing cross-cultural communication skills.",
                "Collaborated with diverse teams to develop innovative solutions for global challenges."
            ],
            picture: [aiesec1, aiesec2, aiesec4, aiesec5, aiesec6, aiesec7, aiesec8, aiesec9]
    }
}];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <h2>Experience</h2>
                            <p></p>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
                <Row>
                    {
                        experience.map((exp, index) => {
                            return(
                                
                                    <ExpCard 
                                        key={index}
                                        {...exp}
                                        >
                                        <p></p>
                                    </ExpCard>
                            )
                        })
                    }
                </Row>
                </Container>
        </section>
    )

}

export default experience;