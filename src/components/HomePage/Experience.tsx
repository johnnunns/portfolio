import { Box, Typography, Chip } from '@mui/material';
import SectionHeader from '../SectionHeader';
import { PrimaryColorText } from '../../commonStyledComponents';
import Reveal from '../Reveal';

const carroExperience = [
  'Key contributor to the development of the "Carro" app, propelling the company\'s valuation from $1M to $100M.',
  'Crafted user-centric applications with React, GraphQL, and Material-UI, ensuring seamless interactions and visually appealing interfaces.',
  'Spearheaded front-end development of a major product/brand catalog revamp, introducing innovative design elements, advanced filtering options, and intuitive search capabilities, which was pivotal in securing essential bridge funding.',
  'Led the implementation of a brand requesting/partnership service, driving Shopify product sales.',
  'Saved over $15,000 per month by creating an efficient reporting page using Chart.js, replacing the previous Looker app.',
  'Demonstrated expertise in full-stack development, utilizing Node.js Lambdas and GraphQL services for seamless communication with the back-end and PostgreSQL database.',
  'Collaborated closely with product and design teams to deliver optimal solutions for end-users.',
  'Optimized user onboarding flow, resulting in a significant 30% reduction in churn and increased user satisfaction.',
  'Owned the end-to-end development of the Business Admin app, leveraging React, GraphQL, and Material-UI on the front-end and Node, GraphQL, and Postgres on the back-end.',
  'Successfully adhered to deadlines and followed Git best practices in a JIRA environment for efficient project management.',
];

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
