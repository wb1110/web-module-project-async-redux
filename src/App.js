import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000122ff4a6d81ea4728ab1817d88892b721');
// All requests made with the client will be authenticated

const initialState = []


  function App() {
    useEffect(() => {
      axios.get(client)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      },[])
    return (
      <div className="App">
        Async Redux Project
      </div>
    );
}

export default App;