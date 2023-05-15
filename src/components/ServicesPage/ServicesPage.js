import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";


function ServicesPage({ currentLocale, setCurrentLocale }) {
    return (
        <>
            <Header
                setCurrentLocale={setCurrentLocale}
                currentLocale={currentLocale}
            />
            <ContactUs />
            <Services />
            <Footer />
        </>
    );
}

export default ServicesPage;