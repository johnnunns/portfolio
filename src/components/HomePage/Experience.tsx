import { Box, Typography, Chip } from '@mui/material';
import SectionHeader from '../SectionHeader';
import { PrimaryColorText } from '../../commonStyledComponents';
import Reveal from '../Reveal';

const Experience: React.FC = () => {
  return (
    <Box mb={20} id="experience">
      <SectionHeader text="Experience" />
      <Box my={4}>
        <Reveal width="100%">
          <Box
            mb={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              <PrimaryColorText>Carro - Software Engineer</PrimaryColorText>
            </Typography>
            <Typography>2017 - current</Typography>
          </Box>
        </Reveal>
        <Reveal>
          <Typography>
            As a Software Engineer at Carro, I specialized in front-end
            development, driving growth through innovative features for Carro's
            brand partnership solutions on Shopify. I also handled full-stack
            duties, including spearheading the development of our business
            administration app. My versatility even led me to assist the data
            science team with Python tasks. My role at Carro showcased a blend
            of front-end expertise, full-stack skills, and adaptability across
            various technical domains.
          </Typography>
        </Reveal>
        <Reveal>
          <Box my={4}>
            {[
              'React',
              'React-Apollo',
              'GraphQL',
              'Git',
              'Material-UI',
              'Node',
              'TypeScript',
              'AWS Services',
              'Redux',
              'PostGres',
            ].map((tech) => (
              <Chip
                key={tech}
                variant="outlined"
                color="primary"
                label={tech}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
};

export default Experience;
