import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material';
import HeadshotImage from '../../Assets/portfolio-headshot-2.png';
import Reveal from '../Reveal';
import Technologies from './Technologies';
import { PrimaryColorText } from '../../commonStyledComponents';
import yearsWorking from '../../helpers/yearsWorking';

const IntroWrapper = styled(Box)({
  minHeight: '100vh',
  textAlign: 'center',
  padding: '64px 0 120px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const AboutMeWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
  },
}));

const Headshot = styled(Box)(({ theme }) => ({
  minWidth: '275px',
  width: '275px',
  height: '275px',
  borderRadius: '50%',
  backgroundImage: `url(${HeadshotImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '5px solid',
  borderColor: theme.palette.primary.contrastText,
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    margin: '0 48px 0 0',
  },
}));

const Intro: React.FC = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <IntroWrapper>
      <AboutMeWrapper>
        <Headshot />
        <Box>
          <Typography variant="h1">
            Hey, I'm John<PrimaryColorText>.</PrimaryColorText>
          </Typography>
          <Reveal center={!md}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Senior&nbsp;
              <PrimaryColorText>Full-Stack</PrimaryColorText>
              &nbsp;Engineer (<PrimaryColorText>Front-End</PrimaryColorText>&nbsp;focused)
            </Typography>
          </Reveal>
          <Reveal center={!md}>
            <Typography>
              I've spent the last {yearsWorking} years building some really cool applications centered around
              e-commerce.
              <br />
              Eager to join a company that fosters a great team culture while tackling complex challenges.
              <br />
              Based in the US. Let's connect!
            </Typography>
          </Reveal>
        </Box>
      </AboutMeWrapper>
      <Technologies />
    </IntroWrapper>
  );
};

export default Intro;
