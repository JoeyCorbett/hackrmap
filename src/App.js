import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // Assuming your Node.js backend runs on port 5000
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <p>Welcome to my first React app with a header!</p>
      <div>Data from backend: {data ? JSON.stringify(data) : 'Loading...'}</div>
    </div>
  );
}

export default App;