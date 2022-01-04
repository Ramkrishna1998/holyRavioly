import {Link} from 'react-router-dom';


import classes from './MainNavigation.module.css';
/* import classesDark from './MainNavigationDark.module.css' */

function MainNavigation() {

    return (
        /* Switch here for Dark and Light navigation classes i.e. classes.header or classesDark.headerDark */
        <div className={classes.topbar}>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <Link to='/directors'>DIRECTORS</Link>
                        </li>
                        <li>
                            <Link to='/stories'>STORIES</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>CONTACTS</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={classes.fullservice}>FULL SERVICE CREATIVE PRODUCTION AGENCY INTERNATIONAL.</div>
            <div className={classes.copy}>ALL RIGHTS RESERVED. 2021&copy;</div>
        </div>
    );
}

export default MainNavigation;