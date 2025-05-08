import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Skills = () => {
    const data = {
        labels: ['React.js', 'Next.js', 'Node.js', 'RxJS', 'MPI', 'Django'],
        datasets: [
          {
            data: [74, 63, 58, 72, 69, 45],
            backgroundColor: function(context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
              
                if (!chartArea) {
                  return null;
                }
              
                const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                gradient.addColorStop(1, '#4A2FBD'); 
                gradient.addColorStop(0, '#AA367C'); 
              
                return gradient;
              },
            borderWidth: 1,
          },
        ],
      };

      const tnddata = {
        labels: ['Git', 'GitHub', 'MongoDB', 'PostgreSQL', 'SQLite', 'Oracle', 'Kanban', 'Jira', 'Figma', 'Android Studio'],
        datasets: [
          {
            data: [73, 70, 53, 62, 70, 82, 53, 83, 75, 93, 84],
            backgroundColor: function(context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
              
                if (!chartArea) {
                  return null;
                }
              
                const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                gradient.addColorStop(1, '#4A2FBD'); 
                gradient.addColorStop(0, '#AA367C'); 
              
                return gradient;
              },
            borderWidth: 1,
          },
        ],
      };

    const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: null,
        title: {
        display: true,
        },
    },
    };

    const tndoptions = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: null,
            title: {
            display: true,
            },
        },
        };

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const smallResponsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 8
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 5
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 4
        }
    }

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>My Technical Skillsets</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h5>Web Development</h5>
                                </div>
                            <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h5>Mobile Application Development</h5>
                                </div>
                            <div className="item">
                                <img src={meter3} alt="Image"/>
                                <h5>Data Structure and Algorithm</h5>
                                </div>
                            <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h5>Machine Learning</h5>
                                </div>
                            </Carousel>
                        <p></p>
                        <Container>
                            <Row>
                                <Col>
                                <h3>Programming Language</h3>
                                <p></p>
                                <Carousel responsive={smallResponsive} infinite="true" className="small-skill-slider">
                                    <div className="small-item">
                                        <img src={meter1} alt="Image"/>
                                        <h5>Java</h5>
                                    </div>
                                    <div className="small-item">
                                        <img src={meter1} alt="Image"/>
                                        <h5>C</h5>
                                    </div>
                                    <div className="small-item">
                                        <img src={meter1} alt="Image"/>
                                        <h5>Python</h5>
                                    </div>
                                    <div className="small-item">
                                        <img src={meter1} alt="Image"/>
                                        <h5>CSS</h5>
                                    </div>
                                    <div className="small-item">
                                        <img src={meter1} alt="Image"/>
                                        <h5>HTML</h5>
                                    </div>
                                    <div className="small-item">
                                        <img src={meter1} alt="Image"/>
                                        <h5>JavaScript</h5>
                                    </div>
                                </Carousel>
                                <p></p>
                                </Col>
                                <Row>
                                    <Col md={6}>
                                    <h3>Frameworks & Libraries</h3>
                                    <Bar data={data} options={options} />
                                    </Col>
                                    <Col md={6}>
                                    <h3>Tools & Databases</h3>
                                    <Bar data={tnddata} options={tndoptions} />
                                    </Col>
                                </Row>
                            </Row>

                        </Container>                        
                    </div>
                    </Col>
                </Row>
                </Container>
                <img className="background-image-left" src={colorSharp} />
        </section>
    )
}
export default Skills;