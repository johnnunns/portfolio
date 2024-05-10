import {
  Box,
  Paper,
  Divider,
  Typography,
  Link,
  Chip,
  Tooltip,
} from '@mui/material';
import SectionHeader from '../SectionHeader';
import CarroLogo from '../../Assets/carro-logo.png';
import KanbanLogo from '../../Assets/logo-light.svg';
import Reveal from '../Reveal';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    businessImage: <img height={100} width={100} src={CarroLogo} alt="Carro" />,
    name: 'Carro',
    description:
      'Dropshipping Reimagined: Increase revenue & source products from our award-winning brand network without investment in inventory or operations. Carro is the bridge between Shopify and the rest of eCommerce.',
    url: '/carro',
    techs: ['React', 'GraphQL', 'PostGres', 'Redux', 'Material-UI'],
    internal: true,
  },
  {
    businessImage: (
      <img height={50} width={300} src={KanbanLogo} alt="Kanban" />
    ),
    name: 'Kanban',
    description:
      'Project I worked on to display Full-Stack capabilities. Figma and app requirements delivered by service called Front End Mentor. This particular project had the highest difficulty rating on their site. Application is Kanban style management board with drag/drop functionality.',
    url: 'https://kanban-task-mgmt.vercel.app/',
    github: 'https://github.com/johnnunns/kanban-task-mgmt',
    techs: ['MongoDB', 'Express', 'React', 'Node', 'Redux', 'Material-UI'],
    internal: false,
  },
];

const Projects: React.FC = () => {
  return (
    <Box mb={20} id="projects">
      <SectionHeader text="Projects" />
      <Box
        my={4}
        display="grid"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
        columnGap="32px"
        rowGap="32px"
        gridAutoRows="1fr"
      >
        {projects.map((p) => (
          <Paper
            key={p.name}
            sx={{
              textAlign: 'center',
              border: '2px solid',
              borderColor: 'secondary.main',
              height: '100%',
              position: 'relative',
            }}
          >
            {p.github ? (
              <Box position="absolute" top={10} right={10}>
                <Link to={p.github} component={ReactRouterLink} target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#fff"
                    size="xl"
                    style={{ marginLeft: '16px' }}
                  />
                </Link>
              </Box>
            ) : null}
            <Link
              key={p.name}
              component={ReactRouterLink}
              to={p.url}
              underline="none"
              target={p.internal ? '_self' : '_blank'}
            >
              <Box
                p={3}
                height={150}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'secondary.main',
                }}
              >
                {p.businessImage}
              </Box>
              <Box>
                <Box p={3}>
                  <Reveal width="100%">
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                      }}
                    >
                      {p.name}
                    </Typography>
                  </Reveal>
                  <Reveal>
                    <Typography>{p.description}</Typography>
                  </Reveal>
                </Box>
                <Box height={50} />
                <Box
                  position="absolute"
                  bottom={10}
                  width="100%"
                  left="50%"
                  sx={{ transform: 'translateX(-50%)' }}
                >
                  <Reveal center>
                    {p.techs.map((tech) => (
                      <Chip
                        key={tech}
                        variant="outlined"
                        color="secondary"
                        size="small"
                        label={tech}
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Reveal>
                </Box>
              </Box>
            </Link>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
