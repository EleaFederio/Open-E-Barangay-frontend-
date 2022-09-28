import {AnimatePresence, motion} from 'framer-motion';
import React, { Fragment, useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SidebarMenu = ({showAnimation, route, isOpen, setIsOpen}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true)
    };

    useEffect(() => {
        if(!isOpen){
            setIsMenuOpen(false);
        }
    }, [isOpen])

    const menuAnimation = {
        hidden:{
            height: 0,
            opacity: 0,
            transition:{
                duration: 0.3,
                when: "afterChildren"
            }
        },
        show:{
            height: "auto",
            opacity: 1,
            transition:{
                duration: 0.3,
                when: "beforeChildren"
            }
        }
    }

    const menuItemAnimation = {
        hidden: (i) => (
            {
                padding: 0,
                x: "-100%",
                transition:{
                    duration: (i * 1) * 0.1,
                }
            }
        ),
        show: (i) => ({
            x: 0,
            transition:{
                duration: (i * 1) * 0.1,
            }
        })
    }

    return (
        <Fragment>
            <div className='menu' onClick={toogleMenu}>
                <div className='menu_item'>
                    <div className='icon'>
                        {route.icon}
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                variants={showAnimation} 
                                initial="hidden"
                                animate="show"
                                exit={'hidden'}
                                className="link_text"
                            >
                                {route.name}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {
                    isOpen && (
                        <motion.div animate={isMenuOpen ? {rotate: -90} : {rotate: 0}}>
                            <FaAngleDown/>
                        </motion.div>
                    )
                }
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        variants={menuAnimation}
                        className='menu_container'
                        initial="hidden"
                        animate="show"
                        exit={"hidden"}
                    >
                        {route.subRoutes.map((subRoute, i) => (
                            <motion.div variants={menuItemAnimation} custom={i} key={i}>
                                <NavLink activeClassName="active" className={'link'} to={subRoute.path}>
                                    <div className='icon'>{subRoute.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                variants={showAnimation}
                                                className='link_text'
                                            >{subRoute.name}</motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </Fragment>
    )
}

export default SidebarMenu