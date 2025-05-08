import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [result, setResult] = useState("");

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3139eab2-b5f9-451c-8de2-1c89c60480ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={onSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <label>FULL NAME</label>
                    <input type="text" name="name" placeholder="Enter your name..." required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <label>EMAIL</label>
                    <input type="email" name="email" placeholder="Enter your email..." required/>
                    </Col>
                    <Col size={12} className="px-1">
                    <label>PHONE NUMBER</label>
                      <input type="tel" name="Phone No." placeholder="Enter your phone number..." required/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                    <label>SUBJECT</label>
                      <input type="subject" name="subject" placeholder="Enter your message title..." required/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                    <label>MESSAGE</label>
                    <textarea name="message" placeholder="Enter your message..." required></textarea>
                    <button type="submit"><span>Submit Form</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;