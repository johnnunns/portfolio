import { Box, Tooltip, Typography, styled } from '@mui/material';
import ReactLogo from '../../Assets/react-logo.svg';
import Html5Logo from '../../Assets/html5-logo.svg';
import Css3Logo from '../../Assets/css3-logo.svg';
import ReduxLogo from '../../Assets/redux-logo.svg';
import TypeScriptLogo from '../../Assets/ts-logo.svg';
import AWSLogo from '../../Assets/aws-logo.svg';
import GraphQLLogo from '../../Assets/graphql-logo.svg';
import NodeLogo from '../../Assets/node-logo.svg';
import Reveal from '../Reveal';
import SlideIn from '../SlideIn';

const TechLogo = styled('img')({
  height: '50px',
  width: '50px',
  margin: '8px 16px',
});

const techs = [
  {
    tip: 'React',
    logo: ReactLogo,
  },
  {
    tip: 'HTML5',
    logo: Html5Logo,
  },
  {
    tip: 'CSS3',
    logo: Css3Logo,
  },
  {
    tip: 'GraphQL',
    logo: GraphQLLogo,
  },
  {
    tip: 'Redux',
    logo: ReduxLogo,
  },
  {
    tip: 'Node',
    logo: NodeLogo,
  },
  {
    tip: 'TypeScript',
    logo: TypeScriptLogo,
  },
  {
    tip: 'AWS',
    logo: AWSLogo,
  },
];

const Technologies: React.FC = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Reveal center>
        <Box mb={2}>
          <Typography variant="h5">Tech Stack:</Typography>
        </Box>
      </Reveal>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Box display="flex">
          {techs.slice(0, 4).map((tech, index) => (
            <SlideIn key={tech.tip} direction="rtl" index={index}>
              <Tooltip title={tech.tip}>
                <TechLogo src={tech.logo} />
              </Tooltip>
            </SlideIn>
          ))}
        </Box>
        <Box display="flex">
          {techs.slice(4).map((tech, index) => (
            <SlideIn key={tech.tip} direction="ltr" index={index}>
              <Tooltip title={tech.tip}>
                <TechLogo src={tech.logo} />
              </Tooltip>
            </SlideIn>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
