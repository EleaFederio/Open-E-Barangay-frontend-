import {AnimatePresence, motion} from 'framer-motion';
import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {FaHome, FaTools, FaInfoCircle, FaBars, FaSearch, FaPersonBooth, FaList, FaAngleDown} from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
const routes = [
    {
        path: '/',
        name: 'Home',
        icon: <FaHome/>
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: <FaTools/>
    },
    {
        path: '/settings',
        name: 'Sub Menu',
        icon: <FaTools/>,
        subRoutes:[
            {
                path: '/settings/profile',
                name: 'Profile',
                icon: <FaPersonBooth/>
            },
            {
                path: '/settings/sub-menu',
                name: 'Sub Menu',
                icon: <FaList/>
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        icon: <FaInfoCircle/>
    }
]

const Sidebar = ({children}) => {

    const [isOpen, setIsOpen]  = useState(false);

    const  toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden:{
            width: 0,
            padding: 0,
            opacity: 0,
            transition:{
                duration: 0.2,
            }
        },
        show:{
            width: "140px",
            padding: "5px 10px",
            opacity: 1,
            transition:{
                duration: 0.2,
            }
        }
    }

    const showAnimation = {
        hidden:{
            width: 0,
            opacity: 0,
            transition:{
                duration: 0.5,
            }
        },
        show:{
            width: "auto",
            opacity: 1,
            transition:{
                duration: 0.2,
            }
        }
    }


    const location = useLocation();

    return (
    <div className="main-container">
        <motion.div animate={{width: isOpen ? "200px" : "37px", transition:{
            duration: 0.5,
            type: "spring",
            damping: 10
        }}} className="sidebar">


            <div className='top_section'>
                { isOpen && <motion.h1 
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit={"hidden"}
                    className='logo'>Branding</motion.h1> }
                <div className='bars'>
                    <FaBars onClick={toggle} />
                </div>
            </div>


            <div className='search'>
                <div className='search_icon'>
                    <FaSearch/>
                </div>
                <AnimatePresence>
                    { isOpen && <motion.input
                    initial="hidden"
                    animate="show"
                    exit={"hidden"}
                    variants={inputAnimation} 
                    placeholder='Search...' />}
                </AnimatePresence>
            </div>


            <section className="routes">
                {
                    routes.map((route, index) => {

                        if(route.subRoutes){
                            return <SidebarMenu
                                setIsOpen={setIsOpen}
                                showAnimation={showAnimation} 
                                route={route} 
                                isOpen={isOpen}
                                key={route.name} 
                            />
                        }

                        return (
                            <NavLink active ClassName="active" className={'link'} to={route.path} key={route.name}>
                                <div className='icon'>{route.icon}</div>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div 
                                            variants={showAnimation}
                                            initial="hidden"
                                            animate="show"
                                            exit={"hidden"}
                                            className='link_text'
                                        >{route.name}</motion.div>
                                    )}
                                </AnimatePresence>
                            </NavLink>
                        )
                    })
                }
            </section>
        </motion.div>
        <main className={isOpen? 'active-main' : ''} style={{position: 'relative', marginLeft : isOpen ? '' : '37px'}}>
            {
                children !== "Not Found" ? 
                (
                    <Navbar bg="light" >
                        <Container>
                            <Navbar.Brand>{location.pathname === '/' ? 'home' : location.pathname}</Navbar.Brand>
                        </Container>
                    </Navbar>
                ) : ""
            }
            {children}
            {console.log(children.props)}
        </main>
    </div>
    )
}

export default Sidebar;