import React from 'react';
import { useState, useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

import AddButton from '../Buttons/AddButton';

import { DataContext } from '../../utilities/DataContext';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export default function Header(props) {
  const { onDrawerToggle } = props;
  const { activeData, activeTopic } = useContext(DataContext);

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          
          <Grid container spacing={2} alignItems="center">
            
            <Grid item sx={{ display: { sm: 'block', xs: 'none' } }}>
              <SearchIcon color="inherit" sx={{ display: 'block' }}/>
            </Grid>

            <Grid item xs>
              <TextField
                sx={{ display: { sm: 'block', xs: 'none' } }}
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            
            <Grid item xs />
              {/* <Grid item>
                <Link
                  href="/"
                  variant="body2"
                  sx={{
                    textDecoration: 'none',
                    color: lightColor,
                    '&:hover': {
                      color: 'common.white',
                    },
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Go to docs
                </Link>
              </Grid> */}

              <Grid item sx={{ display: { sm: 'none', xs: 'none' } }}>
                <Button
                  sx={{ borderColor: lightColor }}
                  variant="outlined"
                  color="inherit"
                  size="small"
                >
                  Setup
                </Button>
              </Grid>
  
              <Grid item sx={{ display: { sm: 'none', xs: 'none' } }}>
                <Tooltip title="Help">
                  <IconButton color="inherit">
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item>
                <IconButton color="inherit" sx={{ p: 0.5 }}>
                  <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                </IconButton>
              </Grid>


          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
