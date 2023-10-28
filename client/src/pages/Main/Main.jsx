import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// Pages
import Content from '../Content/Content';

// Components
import Navigator from '../../components/Navigator/Navigator';
import Header from '../../components/Header/Header';
import CategoryCard from '../../components/Cards/CategoryCard';
import TopicCard from '../../components/Cards/TopicCard';
import DefinitionCard from '../../components/Cards/DefinitionCard';
import CategoryForm from '../../components/Forms/CategoryForm';
import TopicForm from '../../components/Forms/TopicForm';
import DefinitionForm from '../../components/Forms/DefinitionForm';
import NoteForm from '../../components/Forms/NoteForm';
import AnalogyForm from '../../components/Forms/AnalogyForm';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Interview Prep Study Guide
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 256;

export default function Main() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { activeChoice, setActiveChoice } = useContext(DataContext);
  const [ mainContent, setMainContent ] = useState(null);

  useEffect(() => {
    if (activeChoice === 'Category') {
      setMainContent(<CategoryForm />)
    } else if (activeChoice === 'Topic') {
      setMainContent(<TopicForm />)
    } else if (activeChoice === 'Definition') {
      setMainContent(<DefinitionForm />)
    } else if (activeChoice === 'Notes') {
      setMainContent(<NoteForm />)
    } else if (activeChoice === 'Analogy') {
      setMainContent(<AnalogyForm />)
    } else {
      setMainContent(<Content />)
    }
  }, [activeChoice])

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <Header onDrawerToggle={handleDrawerToggle} />
        
      {/* This is where the active selection will go */}
        {activeChoice ? 
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
            >
            {mainContent}
          </Box>
        : 
          <Box
          component="main"
          sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
          >
            Add the activeChoice here
          </Box>
        }

          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>

        </Box>
      </Box>
    </ThemeProvider>
  );
}