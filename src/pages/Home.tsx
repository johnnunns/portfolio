import { Box } from '@mui/material';
import Intro from '../components/HomePage/Intro';
import About from '../components/HomePage/About';
import Projects from '../components/HomePage/Projects';
import Contact from '../components/HomePage/Contact';
import Experience from '../components/HomePage/Experience';

const Home: React.FC = () => {
  return (
    <Box>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
