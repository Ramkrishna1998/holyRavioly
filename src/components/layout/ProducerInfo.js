import { useState } from "react";
import classes from './Producers.module.css';

function ProducerInfo(props){
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className={classes.moreinfo} onClick={() => setVisible(!visible)}>
                {visible ? 
                        <div className={classes.infoimg}>
                            <img src='assets/minus.png' alt=''/> LESS INFORMATION
                        </div>   
                    : 
                        <div className={classes.infoimg}>
                            <img src='assets/plus.png' alt=''/> MORE INFORMATION
                        </div>
                    } 
            </div>
            {visible && 
                <div className='info'>
                    <div className={classes.info}>{props.producerinfo.phone}</div>
                    <div className={classes.info}>{props.producerinfo.email}</div>
                </div>
            }
            {!visible && 
                <div className='info'>
                    <div className={classes.info}>&nbsp;</div>
                    <div className={classes.info}>&nbsp;</div>
                </div>
            }
        </div>
    );
}

export default ProducerInfo;