import { Link } from 'react-router-dom';


import classes from './MainNavigation.module.css';
/* import classesDark from './MainNavigationDark.module.css' */

function MainNavigation() {

    return (
        /* Switch here for Dark and Light navigation classes i.e. classes.header or classesDark.headerDark */       
        <div className='bg-inherit '>
            <nav className="fixed w-full bg-inherit  ">
                <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between py-6 ">
                        <div className="flex">
                            <div style={window.location.pathname !== '/stories' ? { position: 'relative' } : {}} className="flex-shrink-0 flex items-center lg:hidden">
                                <a href="#" className=" border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Link to='/directors'>DIRECTORS</Link>
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Link to='/stories'>STORIES</Link>
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    <Link to='/contacts'>CONTACTS</Link>
                                </a>                            
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a href="#" className="hidden lg:block border-transparent hover:text-gray-700 font-sans text-black inline-flex items-center px-1 pt-1  text-lg font-medium">
                                    <Link to='/directors'>DIRECTORS</Link>
                                </a>
                                <a href="#" className="hidden lg:block border-transparent hover:text-gray-700 font-sans text-black inline-flex items-center px-1 pt-1  text-lg font-medium">
                                    <Link to='/stories'>STORIES</Link>
                                </a>
                                <a href="#" className="hidden lg:block border-transparent hover:text-gray-700 font-sans text-black inline-flex items-center px-1 pt-1  text-lg font-medium">
                                    <Link to='/contacts'>CONTACTS</Link>
                                </a>
                            </div>
                        </div>
                        <div className="hidden pt-3 sm:ml-6 sm:flex sm:items-center">                           

                            <div className="ml-3 relative">
                                <div className='flex'>                                   
                                    <div className='text-xs font-light mr-5 hidden lg:block'>FULL SERVICE CREATIVE PRODUCTION AGENCY INTERNATIONAL.</div>
                                    <div className='text-xs font-light hidden lg:block'>ALL RIGHTS RESERVED. 2021&copy;</div>
                                </div>
                            </div>
                        </div>                 
                    </div>
                </div>

                <div className="lg:hidden" id="mobile-menu">                   
                    <div className="pt-2 pb-3 ">
                        <div className="flex items-center px-4">                           
                            <div className="ml-3">
                                <div className="block lg:hidden text-sm font-thin text-black">FULL SERVICE CREATIVE PRODUCTION AGENCY INTERNATIONAL.</div>
                                <div className="block lg:hidden text-sm font-thin text-black">ALL RIGHTS RESERVED. 2021&copy;</div>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MainNavigation;