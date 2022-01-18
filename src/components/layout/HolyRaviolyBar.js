
import { Link } from 'react-router-dom';

function HolyRaviolyBar(props) {
    console.log('window', window.location.pathname)
    return (
        <div className='bg-inherit  w-full'>
            <div className={`hidden lg:block ${props.hrclass}`}>
                <Link to='/'>HOLY RAVIOLY</Link>
            </div>
            <div style={window.location.pathname !== '/stories' ? { position: 'relative', backgroundColor: 'inherit' } : {}} className={`${props.hrclass} bg-inherit px-5 pb-10  block lg:hidden`}>
                <div className='font text-5xl font-thin'>
                    <Link to='/'>HOLY RAVIOLY</Link>
                </div>
            </div >
        </div >
    );
}

export default HolyRaviolyBar;