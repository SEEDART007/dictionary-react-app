import { useState } from "react";
import {FaSearch} from 'react-icons/fa'
import {FaCopy} from 'react-icons/fa'
import Header from "./components/Header";
import help from './components/help.css'
function App() {

const[val,setval]=useState('')
const[rec,setrec]=useState('')
const handlecopy=()=>{
  navigator.clipboard.writeText(rec.definition);
}

  const handleonklik=()=>{
    let hey=document.getElementById('id');
    let item= hey.value;
    setval(item)

  
  const url = `https://api.api-ninjas.com/v1/dictionary?word=${val}`;
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
      'X-Api-Key': "zxc3TMGaA8xNHVvkBJ1OPXkrITroaN53hbyyVuYC",
    "Content-Type": "application/json"
  }
}).then((val1)=>{
  return val1.json();
}).then((vL)=>{
  setrec(vL)
})}
  return (
   <>
   <Header/>
   <div className="all">
   <div className="hey">
   <input className="hey2" type='text' id='id' />
   <button onClick={handleonklik} className="hey2"><FaSearch className="icon"/> Click To Search</button>
   <button onClick={handlecopy}className="hey3"><FaCopy className="icon"/>Copy Content</button>
   </div>
  <div className="container">
   <div className="record"><b>definition:-</b>{rec.definition}</div>
   </div>
   </div>
   </>
  );
}

export default App;
