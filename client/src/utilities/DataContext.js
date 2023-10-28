import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [activeChoice, setActiveChoice] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let user;
    try {
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
        }}
      >
      {props.children}
    </DataContext.Provider>
  );
};
