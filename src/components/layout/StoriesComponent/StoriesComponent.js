import { useState, useRef, useEffect } from "react";
import classes from './Stories.module.css';

function StoriesComponent() {

    return (
        <div>
            <div className={classes.testColorData}>
                STORIES IS A COLLECTION OF PERSONAL PROJECTS, DOCUMENTARIES, SHORT AND MUSIC VIDEOS. ALL SEEN AS AN OUTLET TO TRY DIFFERENT RECHNIQUES IN STORYTELLING AND LOOK. SEE THIS AS THE HOLY RAVIOLI PLAYGROUND, WHERE WE DEVELOP NEW IDEAS AND FORMATES. ALL RIGHTS RESERVED. 2020@
            </div>
            <div className={classes.wrapperClass}>
                <div className={classes.one}><img src="/Image 1.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
                <div className={classes.two}>{/* <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/iron-man-iron-monger.jpg" alt="Girl in a jacket" width="50%" height="50%" /> */}</div>
                <div className={classes.three} >{/* <img src="/Image 2.png" alt="Girl in a jacket" width="50%" height="50%" / >*/}</div>
                <div className={classes.four}><img src="/Image 2.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
                <div className={classes.one}><img src="/Image 1.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
                <div className={classes.two}>{/* <img src="https://www.denofgeek.com/wp-content/uploads/2019/02/iron-man-iron-monger.jpg" alt="Girl in a jacket" width="50%" height="50%" /> */}</div>
                <div className={classes.three} >{/* <img src="/Image 2.png" alt="Girl in a jacket" width="50%" height="50%" / >*/}</div>
                <div className={classes.four}><img src="/Image 2.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
            </div>
        </div>
    )
}

export default StoriesComponent;