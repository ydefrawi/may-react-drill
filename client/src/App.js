import {React, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData]=useState(); 
  

  useEffect(() => {
    const fetchData = async () => {
      // fetch data from the api
      const res = await fetch("/api");
      // convert the data to json
      const jsonRes = await res.json();
      // set state with the result
      setData(jsonRes.message);
    }
    fetchData()
      .catch(console.error);;
   
  })
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
        {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
