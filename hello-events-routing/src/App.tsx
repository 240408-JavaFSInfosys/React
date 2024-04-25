import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Hypotenuse } from './components/HypotenuseComponent/Hypotenuse';
import { EmployeeContainer } from './components/EmployeeContainer/EmployeeContainer';
import { data } from './employeeData';


//To establish routes, we need <BrowserRouter>, 
//followed by <Routes>, in which we put all of our individual <Route> tags
//<Route> needs a path (the URL to render the component), and the actual component
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/hyp" element={<Hypotenuse/>}></Route>
                <Route path="/emp" element={<EmployeeContainer incomingData={data}/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
