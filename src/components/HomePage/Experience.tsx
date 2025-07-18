import { Box, Typography, Chip } from '@mui/material';
import SectionHeader from '../SectionHeader';
import { PrimaryColorText } from '../../commonStyledComponents';
import Reveal from '../Reveal';

const carroExperience = [
  'Leading development of a new marketplace integration into our acquired competitor, Modern Dropship, enabling multi-brand sales and positioning the company for major revenue growth.',
  "Built the original Carro app, helping scale the company's valuation from $1M to $100M and supporting a network of over 28,000 brands.",
  'Delivered a feature integrating Best Buy, Target, and SSENSE into our directory, contributing directly to a successful multi-million dollar Series B raise.',
  'Replaced Looker with a custom in-house analytics dashboard, saving approximately $180K annually in licensing fees and enabling self-serve reporting for brands.',
  'Refactored the user onboarding flow based on A/B test results, reducing churn by 30% and significantly improving activation metrics.',
  'Migrated a large-scale React codebase from JavaScript to TypeScript, reducing bugs and boosting developer confidence and productivity.',
  'Owned and expanded a cross-team internal Business Admin app, enabling non-technical teams to resolve issues independently and reducing engineering escalations.',
];

const Experience: React.FC = () => {
  return (
    <Box mb={20} id="experience" sx={{ scrollMarginTop: '80px' }}>
      <SectionHeader text="Experience" />
      <Box my={4}>
        <Reveal width="100%">
          <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">
              <PrimaryColorText>Carro - Software Engineer</PrimaryColorText>
            </Typography>
            <Typography>2017 - current</Typography>
          </Box>
        </Reveal>
        <Reveal>
          <Typography>
            As a Software Engineer at Carro, I specialized in front-end development, driving growth through innovative
            features for Carro's brand partnership solutions on Shopify. I also handled full-stack duties, including
            spearheading the development of our business administration app. My versatility even led me to assist the
            data science team with Python tasks. My role at Carro showcased a blend of front-end expertise, full-stack
            skills, and adaptability across various technical domains.
          </Typography>
        </Reveal>
        <Reveal>
          <ul>
            {carroExperience.map((e) => (
              <Typography component="li">{e}</Typography>
            ))}
          </ul>
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
              <Chip key={tech} variant="outlined" color="primary" label={tech} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
};

export default Experience;
