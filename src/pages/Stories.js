import HolyRaviolyBar from "../components/layout/HolyRaviolyBar";
import classes from '../components/layout/HolyRaviolyBar.module.css';
import backgrounds from '../components/layout/Background.module.css'
import MainNavigation from '../components/layout/MainNavigation';
function StoriesPage() {
    return (
        <div>
            <MainNavigation />
            <div className={backgrounds.stories}></div>
            <div>Stories page</div>
            <HolyRaviolyBar hrclass={classes.footerbar}/>
        </div>
    );
}

export default StoriesPage;