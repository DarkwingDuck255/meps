import { useState } from "react"
import Benefits from "../Benefits/Benefits"
import Catalogue from "../Catalogue/Catalogue"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MachineryIntro from "../MachineryIntro/MachineryIntro"
import Mitsubishi from "../Mitsubishi/Mitsubishi"
import Modules from "../Modules/Modules"
import PopupBlockContainer from "../Popup/PopupBlockContainer"
import PopupBoiler from "../Popup/PopupBoiler"
import PopupGasCompress from "../Popup/PopupGasCompress"
import PopupHibrid from "../Popup/PopupHibrid"
import PopupKTP from "../Popup/PopupKTP"
import Schema from "../Schema/Schema"
import TechInfo from "../TechInfo/TechInfo"

export default function Machinery() {
    const [isOpenHibrid, setOpenHibrid] = useState(false)
    const [isOpenBoiler, setOpenBoiler] = useState(false)
    const [isOpenGasCompress, setOpenGasCompress] = useState(false)
    const [isOpenBlockContainer, setOpenBlockContainer] = useState(false)
    const [isOpenKTP, setOpenKTP] = useState(false)

    function closeAllPopups() {
        setOpenHibrid(false)
        setOpenBoiler(false)
        setOpenGasCompress(false)
        setOpenBlockContainer(false)
        setOpenKTP(false)
    }

    function openPopupHibrid() {
        setOpenHibrid(true)

    }

    function openPopupBoiler() {
        setOpenBoiler(true)

    }

    function openPopupGasCompress() {
        setOpenGasCompress(true)

    }

    function openPopupBlockContainer() {
        setOpenBlockContainer(true)
        console.log(isOpenBlockContainer)
    }

    function openPopupKTP() {
        setOpenKTP(true)
        console.log('das')
    }

    return (
        <>
            <Header />
            <MachineryIntro />
            <ContactUs />
            <Benefits />
            <Catalogue
                onOpenHibrid={openPopupHibrid}
                onOpenBoiler={openPopupBoiler}
                onOpenGasCompress={openPopupGasCompress}
                onOpenBlockContainer={openPopupBlockContainer}
                onOpenKTP={openPopupKTP}
            />
            <PopupHibrid
                isOpenHibrid={isOpenHibrid}
                onClose={closeAllPopups}
            />

            <PopupBoiler
                isOpenBoiler={isOpenBoiler}
                onClose={closeAllPopups}
            />
            <PopupGasCompress
                isOpenGasCompress={isOpenGasCompress}
                onClose={closeAllPopups}
            />

            <PopupBlockContainer
                isOpenBlockContainer={isOpenBlockContainer}
                onClose={closeAllPopups}
            />

            <PopupKTP
                isOpenKTP={isOpenKTP}
                onClose={closeAllPopups}
            />
            <Modules />
            <Mitsubishi />
            <Schema />
            <TechInfo />
            <Footer />
        </>
    )
}