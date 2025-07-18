import { Box, Typography } from '@mui/material';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';
import yearsWorking from '../../helpers/yearsWorking';

const About: React.FC = () => {
  return (
    <Box mb={20} id="about" sx={{ scrollMarginTop: '80px' }}>
      <SectionHeader text="About" />
      <Box my={4}>
        <Reveal>
          <Typography>
            Full-Stack Engineer with a strong emphasis on frontend, bringing over {yearsWorking}+ years of experience
            building user-centric web applications. I&apos;m proficient in HTML, CSS, JavaScript/TypeScript, and modern
            frameworks like React. While I have a comprehensive understanding of full-stack development and enjoy
            working across the stack, my true passion lies in crafting intuitive interfaces and elevating user
            experiences. Coming from an athletic background, I thrive in collaborative, high-performing teams,
            leveraging collective strengths to achieve shared goals.
            <br />
            <br />
            Outside of work, I enjoy golfing and spending time with my family. My wife and I have been married since
            2021 and are happily raising our sons, Connor & Benjamin. I hold a purple belt in jiu-jitsu and can hold my
            own in a game of volleyball — when my knees are feeling up to it.
          </Typography>
        </Reveal>
      </Box>
    </Box>
  );
};

export default About;
