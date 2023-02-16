import Main from '../Main/Main';
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Partnership from '../Partnership/Partnership';
import Machinery from '../Machinery/Machinery';
import { useEffect } from 'react';


function App() {

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Main />
        } />
        <Route path='/partnership' element={
          <Partnership />
        } />

        <Route path='/machinery' element={
          <Machinery />
        } />
      </Routes>
    </div>
  );
}

export default App;
