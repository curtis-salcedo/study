import React, { createContext, useEffect, useState } from "react";

import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [ formSelected, setFormSelected ] = useState('');
  const [ activeChoice, setActiveChoice ] = useState([]);
  const [ categoryData, setCategoryData ] = useState([]);
  const [ topicsData, setTopicsData ] = useState([]);

  // Variables for category and topic data active choices
  const [ activeData, setActiveData ] = useState({});

  useEffect(() => {
    fetchData();
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

  const fetchData = async () => {
    let user;
    try {
      getCategory();
      getTopics();
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
        }}
      >
      {props.children}
    </DataContext.Provider>
  );
};
