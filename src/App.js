import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./pages/about/About"
import Countries from "./pages/countries/Countries"
import Home from "./pages/home/Home"
import NavBar from './components/navbar/NavBar';
import Select from './components/select/Select'
import Most from './components/most/Most';
import axios from 'axios';
function App() {
  function numberWithCommas(x) {
    return (x?.toString())?.replace(
   /\B(?=(\d{3})+(?!\d))/g,
   ","
   );
 }
  const [countriesData, setCountriesData]= useState([])

  
    useEffect(()=>{
  try {
    async function fetchData(){
    const apiUrl =`https://corona-api.com/countries`; 
    const {data} = await axios.get(apiUrl);
    setCountriesData(data.data)
   console.log(data);
   }
   fetchData();
  }
  catch (e){
    console.log(e);
  }
},[]);
  



  return (
    <div >
      
      <Router>
        <NavBar countries={countriesData}/>
        <Routes>
          <Route path="/"element={<Home numberWithCommas={numberWithCommas} countries={countriesData}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/:country" element={<Countries countries={countriesData} numberWithCommas={numberWithCommas}/>}/>
          


        </Routes>
      </Router>
    
       
    </div>
  );
}

export default App;
