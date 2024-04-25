import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Hypotenuse } from './components/HypotenuseComponent/Hypotenuse';

//To establish routes, we need <BrowserRouter>, 
//followed by <Routes>, in which we put all of our individual <Route> tags
//<Route> needs a path (the URL to render the component), and the actual component
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/hyp" element={<Hypotenuse/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
