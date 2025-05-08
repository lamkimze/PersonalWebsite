import { Row, Col } from "react-bootstrap"; 
import ImageSlider from "./ImageSlider";
import TrackVisibility from "react-on-screen";

const ExpCard = ({ company, title, duration, description, event, picture }) => {
  return (
    <Col sm={12} className="mb-4">
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
      <div className="exp-imgbx p-4 border rounded d-flex align-items-stretch">
        <Row>
          <Col md={4} className="img-slider-img d-flex align-items-center justify-content-center">
            <div>
              <ImageSlider imageUrls={picture} />
            </div>
          </Col>

          <Col md={8} className="d-flex flex-column justify-content-between">
            <div className="exp-txtx">
              <h3>{title}</h3>
              <Row className="mb-2">
                <Col xs={6}>
                  <h5>{company}</h5>
                </Col>
                <Col xs={6} className="text-end">
                  <h5 className="comp_time">{duration}</h5>
                </Col>
              </Row>
              <p></p>
              <ul>
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      </div>}
              </TrackVisibility>
    </Col>
  );
};

export default ExpCard;
