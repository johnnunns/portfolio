import { Box, Typography, Link } from '@mui/material';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

const Contact: React.FC = () => {
  return (
    <Box mb={20} id="contact">
      <SectionHeader text="Contact" />
      <Box my={4} textAlign="center">
        <Reveal center>
          <Typography>
            Feel free to reach out! I'm passively looking for new opportunities
            with quality teams.
            <br />
            You can reach me on&nbsp;
            <Link
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/john-nunns"
            >
              LinkedIn
            </Link>
            &nbsp;or email me at&nbsp;
            <Link component="a" href="mailto:johndnunns@gmail.com">
              johndnunns@gmail.com
            </Link>
            .
          </Typography>
        </Reveal>
      </Box>
    </Box>
  );
};

export default Contact;
