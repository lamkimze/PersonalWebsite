import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Project';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
// import PawProgress from './components/paw-ice-cream';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* <PawProgress progress={75} /> */}
    </div>
  );
}

export default App;
