import { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
  Link,
  IconButton,
  styled,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faListCheck,
  faEnvelope,
  faHome,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Assets/portfolio-logo.png';

const drawerMobileWidth = 240;
const drawerDesktopWidth = 64;
const headerHeight = 64;

const MuiAppBar = styled(AppBar)(({ theme }) => ({
  height: headerHeight,
  backgroundColor: theme.palette.background.paper,
  position: 'fixed',
  [theme.breakpoints.up('md')]: {
    zIndex: 1201,
  },
}));

const MuiDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerMobileWidth,
  [theme.breakpoints.up('md')]: {
    width: drawerDesktopWidth,
  },
}));

const links = [
  {
    text: 'About',
    icon: faUser,
    url: '#about',
  },
  {
    text: 'Experience',
    icon: faListCheck,
    url: '#experience',
  },
  {
    text: 'Projects',
    icon: faFolderOpen,
    url: '#projects',
  },
  {
    text: 'Contact',
    icon: faEnvelope,
    url: '#contact',
  },
];

const SharedLayout: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const { pathname } = useLocation();

  const home = pathname === '/';
  const socials = [
    {
      text: 'Github',
      icon: faGithub,
      url: 'https://github.com/johnnunns',
    },
    {
      text: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/john-nunns',
    },
  ];

  const downloadResume = () => {
    fetch('resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'John Nunns Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <Box display="flex">
      <MuiAppBar>
        <Toolbar sx={{ minHeight: '64px' }}>
          <Box sx={{ flexGrow: 1 }}>
            {md ? (
              <Link
                component={ReactRouterLink}
                to="/"
                color="#fff"
                underline="none"
              >
                <img height={40} width={40} src={Logo} alt="logo" />
              </Link>
            ) : (
              <IconButton
                color="inherit"
                onClick={() => setOpenDrawer(true)}
                edge="start"
              >
                <Menu />
              </IconButton>
            )}
          </Box>
          {md &&
            home &&
            links.map((link) => (
              <Link
                key={link.text}
                href={link.url}
                underline="none"
                sx={{ mr: 2 }}
              >
                <Button>{link.text}</Button>
              </Link>
            ))}
          <Button
            variant="outlined"
            onClick={downloadResume}
            sx={{ color: 'inherit' }}
          >
            Download Resume
          </Button>
          <></>
        </Toolbar>
      </MuiAppBar>
      <MuiDrawer
        variant={md ? 'permanent' : 'temporary'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          style: {
            justifyContent: 'space-between',
            backgroundColor: md ? 'inherit' : 'primary',
            width: md ? drawerDesktopWidth : drawerMobileWidth,
          },
        }}
      >
        <List sx={{ mt: 7 }}>
          {!md && (
            <>
              <Divider />
              {home ? (
                links.map((link) => (
                  <ListItem key={link.text} disablePadding>
                    <Link
                      underline="none"
                      href={link.url}
                      sx={{ width: '100%' }}
                    >
                      <ListItemButton
                        onClick={() => setOpenDrawer(false)}
                        sx={{
                          minHeight: 48,
                          px: 2.5,
                        }}
                      >
                        <FontAwesomeIcon icon={link.icon} size="xl" />
                        <Box ml={4}>{link.text}</Box>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))
              ) : (
                <ListItem disablePadding>
                  <Link
                    component={ReactRouterLink}
                    underline="none"
                    to="/"
                    sx={{ width: '100%' }}
                  >
                    <ListItemButton
                      onClick={() => setOpenDrawer(false)}
                      sx={{
                        minHeight: 48,
                        px: 2.5,
                      }}
                    >
                      <FontAwesomeIcon icon={faHome} size="xl" />
                      <Box ml={4}>Home</Box>
                    </ListItemButton>
                  </Link>
                </ListItem>
              )}
            </>
          )}
        </List>
        <List>
          {socials.map((social) => (
            <ListItem key={social.text} disablePadding>
              <Tooltip title={!!md && social.text} placement="right">
                <Link
                  component="a"
                  href={social.url}
                  target="_blank"
                  underline="none"
                  sx={{ width: '100%' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} size="xl" />
                    <Box ml={4}>{social.text}</Box>
                  </ListItemButton>
                </Link>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
      <Box
        component="main"
        p={2}
        pt={8}
        flexGrow={1}
        maxWidth={1200}
        margin="0 auto"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default SharedLayout;
