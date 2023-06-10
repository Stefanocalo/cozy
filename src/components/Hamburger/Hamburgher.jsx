import React, {useEffect, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './Hamburger.css';
import {HiMenuAlt1} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'

export function Hamburger() {

    const [selectedID, setSelectedID] = useState(null);

    function handleClose() {
        setSelectedID(null);
    }

    const location = useLocation();
    useEffect(() => {
        setSelectedID(null);
    },[location.pathname])

    window.addEventListener('scroll', handleClose);



    return(
        <div
        >
            <motion.div 
            onClick={() => setSelectedID(1)}
            layoutId={1}
            className="close">
                <HiMenuAlt1 className='menuIcon'/>
            </motion.div>
            <AnimatePresence>
               {
               selectedID && 
                <motion.div
                layoutId={selectedID}
                 className="open"
                >
                    <div className="closeBtnContainer">
                        <div 
                        onClick={() => {
                           setSelectedID(null); 
                        }}
                        className='iconContainer'>
                            <MdOutlineClose className='menuIcon'/>
                        </div>
                    </div>
                    <motion.div 
                    className="HamburgerLinks">
                        <NavLink to={'/'} className={({isActive, isPending}) => isActive ? 'activeBurgerLink' : isPending ? '' : 'burgerLink'}>Home</NavLink>
                        <NavLink to={'aboutus'} className={({isActive, isPending}) => isActive ? 'activeBurgerLink' : isPending ? '' : 'burgerLink'}>About us</NavLink>
                        <NavLink to={'contactus'} className={({isActive, isPending}) => isActive ? 'activeBurgerLink' : isPending ? '' : 'burgerLink'}>Contact us</NavLink>
                    </motion.div>
 
                </motion.div>
               }
            </AnimatePresence>
        </div>
            
       
    )
}