import { Box, Typography } from '@mui/material';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

const About: React.FC = () => {
  return (
    <Box mb={20} id="about">
      <SectionHeader text="About" />
      <Box my={4}>
        <Reveal>
          <Typography>
            Highly skilled Front-End Developer with 6+ years of experience
            delivering user-centric web applications. Proficient in HTML, CSS,
            JavaScript/TypeScript, and modern frameworks like React. Possessing
            a comprehensive understanding of full stack development, I excel at
            crafting seamless interactions between the front-end and back-end.
            However, my true passion lies in creating intuitive user interfaces
            and elevating user experiences. Coming from an athletic background,
            I thrive in collaborative environments, leveraging collective
            strengths to achieve our goals.
            <br />
            <br />
            Outside of work I enjoy golfing and spending time with my family. My
            wife and I have been married since 2021 and are happily raising our
            son, Connor. Purple belt in jiu jitsu, and am a pretty decent
            volleyball player if my knees are feeling up to it.
          </Typography>
        </Reveal>
      </Box>
    </Box>
  );
};

export default About;
