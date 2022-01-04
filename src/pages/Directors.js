import HolyRaviolyBar from "../components/layout/HolyRaviolyBar";
import classes from '../components/layout/HolyRaviolyBar.module.css';
import backgrounds from '../components/layout/Background.module.css'
import MainNavigation from '../components/layout/MainNavigation';

function DirectorsPage() {
    return (
        <div>
            <MainNavigation />
            <div className={backgrounds.directors}></div>
            <div>Directors page</div>
            <HolyRaviolyBar hrclass={classes.footerbarDirectors}/>
        </div>
    );
}

export default DirectorsPage;