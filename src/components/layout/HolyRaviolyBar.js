
import {Link} from 'react-router-dom';

function HolyRaviolyBar(props){
    return (
        <div className={props.hrclass}>
            <Link to='/'>HOLY RAVIOLY</Link>
        </div>
    );
}

export default HolyRaviolyBar;