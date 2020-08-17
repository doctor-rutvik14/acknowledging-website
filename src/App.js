import React from 'react';
import './App.css';
const App = () =>{
  let curDate = new Date();
  curDate = curDate.getHours();
  let ack='';
  let Style ={}
  if(curDate >=1 && curDate < 12)
  {
    ack = 'Good Morning';
    Style.color = "#388378"
  } 
  else if(curDate >=12 && curDate < 17){
    ack = 'Good Afternoon';
    Style.color = "yellow"
  }
  else if(curDate >=17 && curDate < 20){
    ack = 'Good Evening';
    Style.color = "orange"
  }
  else{
    ack = 'Good Night';
  }
  return(
    <>
      <h1>Hello, <span style={Style}> {ack} </span></h1>
    </>
  );
} 
export default App;