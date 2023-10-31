import React, { createContext, useEffect, useState } from "react";

import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [ formSelected, setFormSelected ] = useState('');
  const [activeChoice, setActiveChoice] = useState([]);
  const [ categoryData, setCategoryData ] = useState([]);

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

  const fetchData = async () => {
    let user;
    try {
      getCategory();
      // user = await getUser();
      // setUser(user);
    } catch (err) {
      console.log('Error at DataContext.js fetchData for User Data', err);
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
        }}
      >
      {props.children}
    </DataContext.Provider>
  );
};
