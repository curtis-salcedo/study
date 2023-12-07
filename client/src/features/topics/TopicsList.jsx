import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopicCard from './TopicCard';

// Styles
import {
  Box,
  Paper,
  Grid,
  Container,
  Header,
  Main,
  Typography,
  Button,
  Divider,
  Card,
  CardHeader,
  CardActions,

} from '@mui/material';


const TopicsList = () => {
  const topics = useSelector(state => state.topics);
  const dispatch = useDispatch();
  const [topicList, setTopicList] = useState([]);

  const renderedTopics = topics.map((topic) => {
    return (
      <TopicCard topic={topic} />
    );
  });

  useEffect(() => {
    if (topics) {
      setTopicList(topics);
    }
  }, [topics]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Topics
      </Typography>
      <Grid container spacing={2}>
        {topicList.map((topic) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={topic.id}>
            <TopicCard topic={topic} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TopicsList;