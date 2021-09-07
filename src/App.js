
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Contact from './components/Contact';


function App() {
  const [mode,setMode]=useState('light');
  const modeSwap=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#475663"
    }else{
      setMode('light');
      document.body.style.backgroundColor="#fff"
    }

  }
  return (
    <>      
      <Router>
        <Navbar title="TextUtil" mode={mode} toogleMode={modeSwap} />
        <Switch>
          <Route exact path="/">              
              <Textform header="Enter Your Text" mode={mode}/>
          </Route>
          <Route exact path="/about">              
              <About title="About Page"  mode={mode}/>
          </Route>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
