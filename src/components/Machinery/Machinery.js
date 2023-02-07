import Benefits from "../Benefits/Benefits"
import Catalogue from "../Catalogue/Catalogue"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MachineryIntro from "../MachineryIntro/MachineryIntro"
import Mitsubishi from "../Mitsubishi/Mitsubishi"
import Modules from "../Modules/Modules"
import Schema from "../Schema/Schema"
import TechInfo from "../TechInfo/TechInfo"

export default function Machinery() {
    return (
        <>
            <Header />
            <MachineryIntro />
            <ContactUs />
            <Benefits />
            <Catalogue />
            <Modules />
            <Mitsubishi />
            <Schema />
            <TechInfo />
            <Footer />
        </>
    )
}