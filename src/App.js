
import './App.css';
import CounterApp from './Components/CounterApp';
import Timer from './Components/Timer';
import { BrowserRouter as Router ,Route,Routes, Link } from 'react-router-dom';
import ApiRequest from './Components/ApiRequest';
import Api from './Components/Api';
import Project from './Components2/Project';
import RandomQuotes from './Components/RandomQuotes';
function App() {
  return (
    <>
   <Router>
    
      <div className="App">
      <Routes>
      <Route path='counter' element={<CounterApp/>}></Route>
      <Route path='timer' element={<Timer/>}></Route>
      <Route path='api' element={<ApiRequest/>}></Route>
      <Route path='api2' element={<Api/>}></Route>
      <Route path='project' element={<Project/>}></Route>
      <Route path='RandomQuotes' element={<RandomQuotes/>}></Route>
    </Routes>
      </div>
    </Router>

    </>
    
  );
}

export default App;

