import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import Contacts from "../Contacts/Contacts";
import Feedback from "../Feedback/Feedback";

function ContactsPage({ setCurrentLocale, currentLocale }) {
    return (
        <>
            <Header
                currentLocale={currentLocale}
                setCurrentLocale={setCurrentLocale}
            />
            <Contacts />
            <Feedback />
            <Footer />
        </>
    );
}

export default ContactsPage;