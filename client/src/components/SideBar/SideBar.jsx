import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import Button from '@mui/material/Button';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// Components
import AddButton from '../Buttons/AddButton';

const cats = [
  {
    id: 'Build',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon />,
        active: true,
      },
      { id: 'Database', icon: <DnsRoundedIcon /> },
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Hosting', icon: <PublicIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      {
        id: 'Machine learning',
        icon: <SettingsInputComponentIcon />,
      },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const categories = [
  {
    id: 'All Categories',
    children: [
      {
        id: 'Categories',
        icon: <PeopleIcon />,
        active: true,
      },
      { id: 'Azure', icon: <DnsRoundedIcon /> },
      { id: 'Cloud Development', icon: <PermMediaOutlinedIcon /> },
      { id: 'Terraform', icon: <PublicIcon /> },
      { id: 'Analogies', icon: <SettingsEthernetIcon /> },
      {
        id: 'Machine learning',
        icon: <SettingsInputComponentIcon />,
      },
    ],
  },
  {
    id: 'Topics',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

const quickAddButtons = {
  display: 'flex',
  flexDirection: 'column',
};

export default function SideBar(props) {
  const { ...other } = props;
  const { categoryData, activeData, setActiveData, setActiveTopic } = useContext(DataContext);


  const handleCategoryClick = (e, category) => {
    setActiveData(category)
    setActiveTopic(null)
  }

  const handleTopicClick = (e, topic, category) => {
    setActiveData(category)
    setActiveTopic(topic)
  }

  const handleHomeClick = () => {
    setActiveData({})
    setActiveTopic({})
  }

  useEffect(() => {
    
  }, [categoryData]);

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ fontSize: 22, color: '#fff', justifyContent: 'center' }}>
          Study Buddy
        </ListItem>

        <ListItem sx={{ ...item, ...itemCategory, cursor: 'pointer' }} onClick={handleHomeClick}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>

        { categoryData ? categoryData.map((category) => (
          <Box key={category.category_id} sx={{ bgcolor: '#101F33' }}>
            <ListItem key={category.category_id} sx={{ ...item, ...itemCategory, cursor: 'pointer' }} onClick={(e) => handleCategoryClick(e, category)}>
              <ListItemIcon><PublicIcon /></ListItemIcon>
              <Button value={category.name}>
                <ListItemText>{category.name}</ListItemText>
              </Button>
            </ListItem>
            {category.topics.map(( topic ) => (
              <ListItem disablePadding key={topic.topic_id}>
                <ListItemButton selected={topic.active} sx={item} onClick={(e) => handleTopicClick(e, topic, category)}>
                  <ListItemIcon><SettingsEthernetIcon /></ListItemIcon>
                  <ListItemText>{topic.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        )) : null }
        <Divider sx={{ mt: 2 }} />

        {/* { categories ? 
          categories.map(({ id, id: icon, children }) => 
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        )
        : 
          cats.map(({ id, children }) => (
            <Box key={id} sx={{ bgcolor: '#101F33' }}>
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, active }) => (
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))
        } */}
        <ListItem sx={{ color: '#fff', ...itemCategory, ...quickAddButtons }}>
          <ListItemText>Quick Add</ListItemText>
          <AddButton name="Category"/>
          <AddButton name="Topic"/>
          <AddButton name="Definition"/>
          <AddButton name="Notes"/>
          <AddButton name="Analogy"/>
        </ListItem>
      </List>
    </Drawer>
  );
}