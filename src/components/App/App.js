import Main from '../Main/Main';
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Partnership from '../Partnership/Partnership';
import Machinery from '../Machinery/Machinery';
import { useEffect } from 'react';
import ServicesPage from '../ServicesPage/ServicesPage';
import ContactUs from '../ContactUs/ContactUs';
import ContactsPage from '../ContactsPage/ContactsPage';


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

        <Route path='/services' element={
          <ServicesPage />
        } />

        <Route path='/contacts' element={
          <ContactsPage />
        } />
      </Routes>
    </div>
  );
}

export default App;
