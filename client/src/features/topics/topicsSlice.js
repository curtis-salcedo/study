import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 0,
      title: 'afea',
      type: 'aghhh',
      description: 'hhhaaaa',
      category: 'ryrryyrrre2435',
    },
    { id: 1,
      name: 'Math',
      description: 'Mathematics',
      category: 'Mathematics',
    },
    // Other initial state...
  ];

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
      
    },
});
  