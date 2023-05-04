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
import { IntlProvider } from 'react-intl';
import { useState } from 'react';

const messages = {
  en: require('../../locale/en.json'),
  uz: require('../../locale/uz.json'),
}


function App() {

  const { pathname } = useLocation();
  const [currentLocale, setCurrentLocale] = useState(localStorage.getItem('lang') || 'ru');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
        <Routes>
          <Route path='/' element={
            <Main
              setCurrentLocale={setCurrentLocale}
              currentLocale={currentLocale}
            />
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
      </IntlProvider>
    </div>
  );
}

export default App;
