import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import { useScroll, motion, useTransform } from "framer-motion";
import { Hamburger } from "../Hamburger/Hamburgher";

export function NavBar() {

    const {scrollYProgress} = useScroll();
    const position = useTransform(scrollYProgress, [0, 0.10], [-80, 10])
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.7, 1])

    return(
        <>
            <Hamburger />
            <motion.div 
            style={{translateY: position, scale}}
            className="navbarContainer">
                <NavLink to={'/'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Home</NavLink>
                <NavLink to={'aboutus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>About us</NavLink>
                <NavLink to={'contactus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Contact us</NavLink>
            </motion.div>
        </>
    )
}