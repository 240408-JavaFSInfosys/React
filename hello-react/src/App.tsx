import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent/FirstComponent';
import { ParentComponent } from './components/ParentComponent/ParentComponent';

/* The App.tsx is the root of our application (at least when it comes to component rendering) 
Most of our coding will be done elsewhere, but the App.tsx lets us control WHAT gets rendered
We put the compnoents we want to render in the div of the return() in this file
We can render standard TSX directly inside the div() as well!*/

// A TSX quirk: "className" instead of "class" 
function App() {
  return (
    <div className="App">
        <h1>Hello React! You are cool</h1>
        <p>We are writing in TSX, which is like HTML for React Typescript</p>
        <h3>React will reload the webpage with every change to the app</h3>

        <FirstComponent></FirstComponent>
        <ParentComponent></ParentComponent>

        {/*Comments in TSX are block comment syntax in curly braces*/}
    </div>
  );
}

export default App;
