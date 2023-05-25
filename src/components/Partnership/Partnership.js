import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import PartnershipImages from "../PartnershipImages/PartnershipImages"
import PartnershipText from "../PartnershipText/PartnershipText"

function Partnership({ setCurrentLocale, currentLocale }) {
    return (
        <>
            <Header
                setCurrentLocale={setCurrentLocale}
                currentLocale={currentLocale}
            />
            <ContactUs />
            <PartnershipText />
            <PartnershipImages />
            <Footer />
        </>
    )
}

export default Partnership