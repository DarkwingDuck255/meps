import Main from '../Main/Main';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Partnership from '../Partnership/Partnership';
import Machinery from '../Machinery/Machinery';
import { useEffect } from 'react';
import ServicesPage from '../ServicesPage/ServicesPage';
// import ContactUs from '../ContactUs/ContactUs';
import ContactsPage from '../ContactsPage/ContactsPage';
import NotFound from '../NotFound/NotFound';


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

        <Route path='*' element={
          <NotFound />
        } />
      </Routes>
    </div>
  );
}

export default App;
