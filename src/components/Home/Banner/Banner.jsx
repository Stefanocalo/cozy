import React from "react";
import './Banner.css'
import { useScroll, motion, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";

export function Banner() {

    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const border = useTransform(scrollYProgress, [0, 0.2], [0, 35]);
    const y = useTransform(scrollYProgress, [0,0.2], [0, -300]);
    const scale = useTransform(scrollYProgress, [0,0.2], [1, 0.6]);


    console.log(scrollYProgress)

    return(
        <motion.div 
        style={{opacity, scale: opacity, borderRadius: border}}
        className="bannerContainer">
            <div className="bannerNav">
                <NavLink to={'/'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Home</NavLink>
                <NavLink to={'aboutus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>About us</NavLink>
                <NavLink to={'contactus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Contact us</NavLink>
            </div>
            <div className="logoContainer">
                <motion.h1
                className='logo'
                initial={{opacity: 0, scale: 0.2, y: -80}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 1}}
                style={{y, scale}}
                >Cozy Events</motion.h1>
            </div>
        </motion.div>
    )
}