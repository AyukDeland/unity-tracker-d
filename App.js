import './App.css';
import Great from './components/Great';
import React,{Component} from 'react';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import Functionclick from './components/functionclick';
import Clickclass from './components/Clickclass';
import Parent from './components/parent';



function App() {
  return (
    <div className="App">
      <Parent/>
     {/* <Clickclass/>
      <Functionclick/> */}
      {/* <Counter/>
     <Great name="deland" heroname="badmane"/>
     <Great name="deland" heroname="badmane"/>
     <Welcome name="blaise" heroname="wander worman"/>
     <Welcome name="blaise" heroname="dead pool"/> */}
   
     {/* <Message/> */}


    
    </div>
  );
}

export default App;
