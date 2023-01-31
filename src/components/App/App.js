import Main from '../Main/Main';
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Partnership from '../Partnership/Partnership';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Main />
        } />
        <Route path='/partnership' element={
          <Partnership />
        } />
      </Routes>
    </div>
  );
}

export default App;
