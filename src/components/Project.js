import {Tab, Container, Row, Col, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/eidolon.jpg";
import projImg2 from "../assets/img/electronicReviewingPlatform.jpg";
import projImg3 from "../assets/img/superMario.avif";
import ProjectCard from "./ProjectCard";
import ProjectCardDetails from "./ProjectCardDetails";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { useState } from "react";
import Skills from "./Skills";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

    const projects = [{
        title: "Eidolon",
        description: "Spotify-liked music player",
        imgUrl:  projImg1,
        projectDetails: [
          "Developed a Spotify-like music platform with authentication, song management, and premium subscriptions.",
          "Designed a responsive UI with animations using React, Next.js, and Tailwind CSS.",
          "Integrated Supabase authentication (credentials & GitHub login) and a PostgreSQL database.", 
          "Implemented song uploads, streaming, and a dynamic music player with playlist functionality.",
          "Integrated Stripe for recurring payments and premium features.",
          "Optimized performance using server-side rendering (SSR) and static site generation (SSG)."
        ],
        skills: "React.js / Next.js / Tailwind CSS / Supabase / PostgreSQL / Stripe",
        websiteUrl: "this is website url",
        codeUrl: "https://github.com/lamkimze/Eidolon"
    },
    {
        title: "Electronic Reviewing Platform",
        description: "Monash Restaurant Reviewing Platform",
        imgUrl: projImg2,
        projectDetails: [
          "Developed a Spotify-like music platform with authentication, song management, and premium subscriptions.",
          "Designed a responsive UI with animations using React, Next.js, and Tailwind CSS.",
          "Integrated Supabase authentication (credentials & GitHub login) and a PostgreSQL database.", 
          "Implemented song uploads, streaming, and a dynamic music player with playlist functionality.",
          "Integrated Stripe for recurring payments and premium features.",
          "Optimized performance using server-side rendering (SSR) and static site generation (SSG)."
        ],
        skills: "Android Toolkits / Java / XML / SQLite",
        websiteUrl: "this is website url",
        codeUrl: "https://github.com/lamkimze/MonashElectronicReviewingPlatforms"
    },
    {
        title: "Super Mario 2D Game",
        description: "Super Mario Authentic Game",
        imgUrl: projImg3,
        projectDetails: [
          "Developed a Spotify-like music platform with authentication, song management, and premium subscriptions.",
          "Designed a responsive UI with animations using React, Next.js, and Tailwind CSS.",
          "Integrated Supabase authentication (credentials & GitHub login) and a PostgreSQL database.", 
          "Implemented song uploads, streaming, and a dynamic music player with playlist functionality.",
          "Integrated Stripe for recurring payments and premium features.",
          "Optimized performance using server-side rendering (SSR) and static site generation (SSG)."
        ],
        skills: "Java / Lucidchart",
        websiteUrl: "this is website url",
        codeUrl: "https://github.com/lamkimze/Super-Mario-2D-game"
    }];
  
    return (
      <section className="project" id="project">
        <Container>
        
        
          {selectedProject ? (
            // If a project is selected, show its details
            <ProjectCardDetails
              {...selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            // Else show the normal Projects grid
            <>
            <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of my showcase project that cover some of my technical skills.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be released ...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>To be released ...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
            </>
          )}
        </Container>
      </section>
    );
  }

export default Projects;