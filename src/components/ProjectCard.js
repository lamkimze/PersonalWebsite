import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, onSelect }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={onSelect}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
