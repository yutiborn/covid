import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Home.css'
import Most from '../../components/most/Most';



const Home = ({numberWithCommas, countries}) => {
  const [today,setToday] = useState({})
  
  useEffect(()=>{
    try {
      async function fetchData(){
      const apiUrl =`https://corona-api.com/timeline`; 
      const {data} = await axios.get(apiUrl);
      const today = data.data[0]
      console.log (data.data[0])
      setToday(today)
     console.log(data);

     }
     fetchData();
    }
    catch (e){
      console.log(e);
    }
  },[]);
  return (
   
    <div>
        <table className='globalTable'>
       <tbody>
         <tr>
           <td colSpan="4">
             TOTAL CASES<br/>
             
             {numberWithCommas(today.confirmed)}
           </td>
         </tr>
         <tr>
           <td>
             DEATHS<br/>
             {numberWithCommas(today.deaths)}
           </td>
           <td>
           RECOVERED<br/>
           {numberWithCommas(today.recovered)}
           </td>
           <td>
             NEW CASES <br/>
             {numberWithCommas(today.new_confirmed)}
           </td>
           <td>
             NEW DEATHS<br/>
             {numberWithCommas(today.new_deaths)}
           </td>

         </tr>
       </tbody>

      </table>
      <Most time="today" data="deaths" countries={countries}/>
<Most time="today" data="confirmed" countries={countries}/>
<Most time="al time" data="deaths" countries={countries}/>
<Most time="al time" data="confirmed" countries={countries}/>

    </div>
  )
}

export default Home
