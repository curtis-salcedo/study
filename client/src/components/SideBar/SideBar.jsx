import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

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
import Input from '@mui/material/Input';

// Utilities
import { DataContext } from '../../utilities/DataContext';

// Pages
import DefintionPage from '../../features/Definition/DefinitionPage';

// Components
import AddButton from '../Buttons/AddButton';
import { Route } from 'react-router-dom';

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

// Define the FileUpload class for handling file uploads
class FileUpload {
  constructor(file) {
    this.file = file;
  }
  async uploadFile() {
    try {
      const formData = new FormData();
      formData.append('csv_file', this.file);

      const response = await axios.post('http://localhost:8000/api/import_data/',  formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        return response.data; // Return response data upon successful upload
      } else {
        throw new Error('Failed to upload CSV file');
      }
    } catch (error) {
      throw new Error('Error uploading CSV file:', error);
    }
  }
}

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

  const handleDefintionClick = (e) => {
    console.log(e.target.value)
    props.getMainContent(<DefintionPage />)
  }

  // File state for file upload
  const [ file, setFile ] = useState(null);

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  // Handle file upload, async because we are making a request to the server
  const handleFileUpload = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        const fileUpload = new FileUpload(file);
        const data = await fileUpload.uploadFile();
        // Log response data upon successful upload
        console.log(data);
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error uploading CSV file:', error);
    }
  };

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
            { category.topics ? category.topics.map(( topic ) => (
              <ListItem disablePadding key={topic.topic_id}>
                <ListItemButton selected={topic.active} sx={item} onClick={(e) => handleTopicClick(e, topic, category)}>
                  <ListItemIcon><SettingsEthernetIcon /></ListItemIcon>
                  <ListItemText>{topic.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            )): null }
            <Divider sx={{ mt: 2 }} />
          </Box>
        )) : <h1>Error loading sidebar category data</h1> }
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
          <ListItemText>
            <Button onClick={handleDefintionClick} value='DefintionPage'>Defintion Table</Button>
          </ListItemText>
        </ListItem>

        <ListItem sx={{ color: '#fff', ...itemCategory, ...quickAddButtons }}>
          <ListItemText>Quick Add</ListItemText>
          <AddButton name="Category"/>
          <AddButton name="Topic"/>
          <AddButton name="Definition"/>
          <AddButton name="Notes"/>
          <AddButton name="Analogy"/>
        </ListItem>

        <ListItem sx={{ color: '#fff', ...itemCategory, ...quickAddButtons }}>
          <ListItemText>Import</ListItemText>
          <Input
            type="file"
            name="csv_file"
            onChange={handleFileChange}>
          </Input>
          <Button
            sx={{
              py: '2px',
              px: 3,
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover, &:focus': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
            onClick={handleFileUpload}
            >Import Data</Button>
        </ListItem>

      </List>
    </Drawer>
  );
}