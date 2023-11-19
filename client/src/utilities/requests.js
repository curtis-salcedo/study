import React from 'react';
import axios from 'axios';

const updateNote = (note) => {
  try {
    axios.put(`http://localhost:8000/api/notes/${note.id}/`, note)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}