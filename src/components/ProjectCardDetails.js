import { Row, Col, Container, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";


const ProjectCardDetails = ({ title, description, imgUrl, projectDetails, skills, websiteUrl, codeUrl, onBack }) => {

    return (
        <Container>
            <div className="project-details">
                <Row>
                    <Col sm={20}>
                        <button className="back-button" onClick={onBack}>
                            <span className="back">← Back</span>    
                            </button>
                    </Col>
                </Row>
            <p></p>
            <Row>
                <Col sm={4}>
                <img className="projdetail-imgbx" src={imgUrl} alt={title} />
                </Col>
                <Col>
                <h3 className="project-title">{title}</h3>
                <h4 className="details-description">{description}</h4>
                <h5 className="skills-text">{skills}</h5>
                <div className="button-group">
                <button className="webvisit-button" onClick={() => window.open(websiteUrl, "_blank")}>
                    <CgWebsite className="webvisit-icon" />
                    Visit Website
                </button>
                <button className="codevisit-button" onClick={() => window.open(codeUrl, "_blank")}>
                    <FaCode className="codevisit-icon" />
                    View Code
                </button>
                </div>
                <p></p>
                <ul className="details-text">
                {projectDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
                </ul>
                </Col>
            </Row>
      </div>
        </Container>
      
    );
  };
  
  export default ProjectCardDetails;
  