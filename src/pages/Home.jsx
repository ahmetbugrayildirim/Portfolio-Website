import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import TopSections from '../components/TopSections';

const Home = () => (
  <div className="home">
    <TopSections />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default Home;