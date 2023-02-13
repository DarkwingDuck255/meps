import { useState } from "react"
import Benefits from "../Benefits/Benefits"
import Catalogue from "../Catalogue/Catalogue"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MachineryIntro from "../MachineryIntro/MachineryIntro"
import Mitsubishi from "../Mitsubishi/Mitsubishi"
import Modules from "../Modules/Modules"
import PopupHibrid from "../Popup/PopupHibrid"
import Schema from "../Schema/Schema"
import TechInfo from "../TechInfo/TechInfo"

export default function Machinery() {
    const [isOpenHibrid, setOpenHibrid] = useState(false)
    
    function closeAllPopups() {
        setOpenHibrid(false)
    }

    function openPopupHibrid() {
        setOpenHibrid(true)
        console.log(isOpenHibrid)
    }
    return (
        <>
            <Header />
            <MachineryIntro />
            <ContactUs />
            <Benefits />
            <Catalogue 
                onOpen = {openPopupHibrid}
            />
            <PopupHibrid
                isOpenHibrid = {isOpenHibrid} 
                onClose = {closeAllPopups}
            />
            <Modules />
            <Mitsubishi />
            <Schema />
            <TechInfo />
            <Footer />
        </>
    )
}