import React from "react"
import Props1 from "./Props/Props1";
import Props2 from "./Props/Props2";
import Props3 from "./Props/Props3";
import Props4 from "./Props/Props4";
import App2 from "./State/App2";



function App() {
  
  return (
    <div className="App">
     <Props1/>
     <hr/>
     <Props2/>
     <hr/>
     <Props3/>
     <hr/>
     <Props4/>
     <hr/>
     State 
      <App2/>
    </div>
  );
}

export default App;
