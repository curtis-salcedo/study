import React, { createContext, useEffect, useState } from "react";

import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [ formSelected, setFormSelected ] = useState('');
  const [ activeChoice, setActiveChoice ] = useState([]);
  const [ categoryData, setCategoryData ] = useState([]);
  const [ topicsData, setTopicsData ] = useState([]);
  const [ notesData, setNotesData ] = useState([]);
  const [ definitionsData, setDefinitionsData ] = useState([]);

  // Variables for category and topic data active choices
  const [ activeData, setActiveData ] = useState({});
  const [ activeTopic, setActiveTopic ] = useState(null);
  const [ activeNote, setActiveNote ] = useState(null);


  useEffect(() => {
    // fetchData();
  }, []);

  const getCategory = async () => {
    axios.get('http://localhost:8000/api/category/')
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };

  const getTopics = async () => {
    axios.get('http://localhost:8000/api/topics/')
      .then((response) => {
        setTopicsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  const getNotes = async () => {
    axios.get('http://localhost:8000/api/notes/')
      .then((response) => {
        setNotesData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  const getDefintions = async () => {
    axios.get('http://localhost:8000/api/definitions/')
      .then((response) => {
        setDefinitionsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  // console.log('topicsData should have notes', topicsData)

  const fetchData = async () => {
    let user;
    try {
      getCategory();
      getTopics();
      getNotes();
      getDefintions();
      // user = await getUser();
      // setUser(user);
    } catch (err) {
      console.log('Error at DataContext.js fetchData', err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        activeChoice: activeChoice || '',
        setActiveChoice,
        formSelected: formSelected || '',
        setFormSelected,
        categoryData: categoryData || null,
        setCategoryData,
        topicsData: topicsData || null,
        setTopicsData,
        activeData: activeData || null,
        setActiveData,
        activeTopic: activeTopic || null,
        setActiveTopic,
        activeNote: activeNote || null,
        setActiveNote,
        notesData: notesData || null,
        setNotesData,
        definitionsData: definitionsData || null,
        setDefinitionsData,
      }}
      >
      {props.children}
    </DataContext.Provider>
  );
};
