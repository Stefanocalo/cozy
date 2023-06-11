import React, {useEffect} from "react";
import { motion, useTransform } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import './Aboutus.css';
import img2 from '../../media/img2.jpg'
import { Footer } from "../Home/Footer/Footer";
import { useScroll } from "framer-motion";

export function Aboutus() {

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])


    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 105]);


    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="aboutusContainer">
            <div className="bannerNav">
                <NavLink to={'/'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Home</NavLink>
                <NavLink to={'/aboutus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>About us</NavLink>
                <NavLink to={'/contactus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Contact us</NavLink>
            </div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 1}}
            style={{opacity, scale, borderRadius}}
            className="heroContainer"
            >
            </motion.div>
            <motion.div className="valuesContainer">
                <motion.h1 className="subtitle">Our Values</motion.h1>
                <motion.p
                 initial={{opacity: 0, y: 100}}
                 whileInView={{opacity: 1, y: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
                <motion.p
                 initial={{opacity: 0, y: 100}}
                 whileInView={{opacity: 1, y: 0}}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
                <motion.p
                 initial={{opacity: 0, y: 100}}
                 whileInView={{opacity: 1, y: 0}}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
            </motion.div>
            <Footer/>
        </motion.div>
    )
}