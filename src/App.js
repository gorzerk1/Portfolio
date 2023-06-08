import './App.css';
import {Route, Routes} from "react-router-dom"
import Main from './component/main/Main.jsx'
import FullSite from './container/FullSite.js'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FullSite/>}/>
        <Route path="/Main" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
