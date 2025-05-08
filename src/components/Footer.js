import MailchimpForm from "./MailchimpForm";
import logo from '../assets/img/logo.png';
import linedInIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github.svg';
import facebookIcon from '../assets/img/nav-icon2.svg';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    {/* <MailchimpForm /> */}
                    <Col sm={6} className="align-item-center">
                    <Row>
                    <img src={logo} alt="Logo"/>
                    <h6>Teddy Ghost Technology</h6>
                    </Row>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href='https://www.linkedin.com/in/kim-ze-lam-608747251/'><img src={linedInIcon} alt=""/></a>
                    <a href='https://github.com/lamkimze'><img src={githubIcon} alt=""/></a>
                    <a href='https://www.facebook.com/lam.kimze'><img src={facebookIcon} alt=""/></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;