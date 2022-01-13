import HolyRaviolyBar from "../components/layout/HolyRaviolyBar";
import classes from '../components/layout/HolyRaviolyBar.module.css';
import backgrounds from '../components/layout/Background.module.css'
import MainNavigation from '../components/layout/MainNavigation';
import StoriesComponent from '../components/layout/StoriesComponent/StoriesComponent'
function StoriesPage() {
    return (
        <div className={classes.pageBg}>
            <MainNavigation />
            <div className={backgrounds.stories}></div>
            <div className={classes.storiesComponentClass}>
                <StoriesComponent />
            </div>
            <HolyRaviolyBar hrclass={classes.footerbar}/>
        </div>
    );
}

export default StoriesPage;