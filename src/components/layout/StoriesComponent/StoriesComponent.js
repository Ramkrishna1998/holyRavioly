import { useState, useRef, useEffect } from "react";
import classes from './Stories.module.css';

function StoriesComponent() {

    const [flag, setFlag] = useState(true);

    useEffect(() => {
        changeFlag();
    })

    function changeFlag(){
        setTimeout(function(){
            setFlag(false);
           
       }, 2000) 
    }

    return (
        <div>
            {
                flag ?  <div className={classes.testColorData}>
                STORIES IS A COLLECTION OF PERSONAL PROJECTS, DOCUMENTARIES, SHORT AND MUSIC VIDEOS. ALL SEEN AS AN OUTLET TO TRY DIFFERENT RECHNIQUES IN STORYTELLING AND LOOK. SEE THIS AS THE HOLY RAVIOLI PLAYGROUND, WHERE WE DEVELOP NEW IDEAS AND FORMATES. ALL RIGHTS RESERVED. 2020@
            </div> : <div />
            }
            <div className={classes.wrapperClass}>
                <div className={classes.one}><img src="assets/image1.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
                <div className={classes.two}></div>
                <div className={classes.three}></div>
                <div className={classes.four}><img src="assets/image2.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
                <div className={classes.one}><img src="assets/image3.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
                <div className={classes.two}></div>
                <div className={classes.three}></div>
                <div className={classes.four}><img src="assets/image1.png" alt="Girl in a jacket" width="100%" height="100%" /></div>
            </div>
        </div>
    )
}

export default StoriesComponent;