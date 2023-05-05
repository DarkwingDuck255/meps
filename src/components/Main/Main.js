import './Main.css';
import Header from '../Header/Header.js';
import AboutUs from '../AboutUs/AboutUs';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
// import { IntlProvider } from 'react-intl';
// import { useState } from 'react';

// const messages = {
//     en: require('../../locale/en.json'),
//     // ru: require('./locales/ru.json'),
//     // fr: require('./locales/fr.json')
// };

function Main({ currentLocale, setCurrentLocale }) {

    // const [currentLocale, setCurrentLocale] = useState('');

    return (
        <>
            {/* <IntlProvider locale={currentLocale} messages={messages[currentLocale]}> */}
            <Header
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
            />
            <AboutUs
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
            />
            <Benefits
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
            />
            <ContactUs
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
            />
            <Footer
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
            />
            {/* </IntlProvider > */}
        </>
    )
}

export default Main