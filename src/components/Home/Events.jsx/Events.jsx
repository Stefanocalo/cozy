import React, { useRef } from "react";
import './Events.css';
import img1 from '../../../media/img1.jpg'
import img2 from '../../../media/img2.jpg'
import img3 from '../../../media/img3.jpg'

import { motion, useTransform, useScroll } from "framer-motion";


export function Events() {

    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
    const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

   

    return(
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        exit={{transform: 'translateY(-100PX)'}}
        style={{scale, filter: blur}}
        className="eventsContainer">
            <motion.div 
            whileHover={{
                scale: 1.2,
                boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, .2)',
                borderRadius: '15px',
                transition: { duration: 0.3 },
              }}
              whileTap={{ 
                scale: 1.1,
                boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, .2)',
                }}
            className="cardContainer">
                <div className="titleContainer">
                    <h4>Eventi Privati</h4>
                </div>
                <div className="imageContainer">
                    <img src={img1} className="cardImage"/>
                </div>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, .2)',
                borderRadius: '15px',
                transition: { duration: 0.3 },
              }}
              whileTap={{ 
                scale: 1.1,
                boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, .2)',
                }}
            className="cardContainer">
                <div className="titleContainer">
                    <h4>Matrimoni</h4>
                </div>
                <div className="imageContainer">
                    <img src={img2} className="cardImage"/>
                </div>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </motion.div>
            <motion.div 
              whileHover={{
                scale: 1.2,
                boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, .2)',
                borderRadius: '15px',
                transition: { duration: 0.3 },
              }}
              whileTap={{ 
                scale: 1.1,
                boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, .2)',
                }}
            className="cardContainer">
                <div className="titleContainer">
                    <h4>Matrimoni</h4>
                </div>
                <div className="imageContainer">
                    <img src={img1} className="cardImage"/>
                </div>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}