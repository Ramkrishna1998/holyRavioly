import { Link } from "react-router-dom";

import HolyRaviolyBar from "../components/layout/HolyRaviolyBar";
import classes from '../components/layout/HolyRaviolyBar.module.css';
import backgrounds from '../components/layout/Background.module.css'
import layouts from '../components/layout/Layout.module.css';
import Producers from "../components/layout/Producers";
import PRODUCER_DATA from "../data/Producerlist";
import MainNavigation from '../components/layout/MainNavigation';

function ContactsPage() {
    return (
        <div className={layouts.main}>
            <MainNavigation />
            <div className={backgrounds.hrcontacts}></div>
            <div className={layouts.contactcontent}>
                <p>
                    JOINING TOGETHER A VERSATILE VOLLECTIVE OF DIRECTORS &#38; PRODUCERS, EMBODYING THE CATHCHPHRASE "HOLY RAVIOLI", EXLAIMED BY THE BUY WONDER ROBIN IN THE 1966 SERIES <i>BATMAN</i>. 
                    FORMERLY KNOWN AS OCTOPUSS - SHOOT HAPPENS - PLAYGROUND, NOW KNOW AS HOLY RAVIOLI - FULL SERVICE CREATIVE PRODUCTION AGENCY INTERNATIONAL. ALL RIGHTS RESERVED. 2021 &copy;
                </p>
                <p>
                    HOLY RAVIOLI - EST. 2021 - HAED OFFICE BASED IN COPENHAGEN, DENMARK. SOCIAL REPRESENTED @ <Link to='' target='_blank'>INSTAGRAM</Link>, <Link to='' target='_blank'>FACEBOOK</Link>, <Link to='' target='_blank'>MAIL</Link>
                </p>
                <p>
                    HR HEAD OFFICE - HC ØRSTEDS VEJ 22 H+G, 1879 FREDERIKSBERG C, DENMARK - WWW.HOLYRAVIOLI.TV
                </p>
            </div>
            <div className={layouts.producerslist}>
                <Producers producers={PRODUCER_DATA}/>
            </div>
            <HolyRaviolyBar hrclass={classes.footerbarDirectors}/>
        </div>
    );
}

export default ContactsPage;