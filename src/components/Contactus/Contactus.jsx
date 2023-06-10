import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import './Contactus.css';
import { useScroll, useTransform } from "framer-motion";
import img2 from '../../media/img2.jpg'

export function Contactus() {

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])


    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 105]);


    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted')
    }
    return(
        <motion.div
        initial={{x: -400, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 400, opacity: 0}}
        className="contactUsContainer">
            <div className="bannerNav">
                <NavLink to={'/'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Home</NavLink>
                <NavLink to={'/aboutus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>About us</NavLink>
                <NavLink to={'/contactus'} className={({isActive, isPending}) => isActive ? 'activeLink' : isPending ? '' : 'link'}>Contact us</NavLink>
            </div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{x: 400, opacity: 0}}
            transition={{ duration: 1}}
            style={{opacity, scale, borderRadius}}
            className="heroContainer"
            >
            </motion.div>
            <motion.h1 className="subtitle">Contact From</motion.h1>
            <div className="formContainer">
                <form className="form" onSubmit={(event) => handleSubmit(event)}>
                    <label for='fname'>Nome:</label>
                    <input type="text" id="fname" required='true'></input>
                    <label for='lname'>Cognome:</label>
                    <input type="text" id="lname" required='true'></input>
                    <label for='email'>E-mail</label>
                    <input type="email" id="email" required='true'></input>
                    <label for='description'>Descrizione evento: (max 200 caratteri)</label>
                    <textarea required='true' id="description" name="description" rows="4" cols="50" maxLength={200}>
                    </textarea>
                    <input className="button" type="submit"></input>
                </form>
            </div>
        </motion.div>
    )
}