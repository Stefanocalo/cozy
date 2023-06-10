import React from "react";
import { motion } from "framer-motion";
import './Footer.css';

export function Footer() {
    return(
        <motion.div 
        className="footerContainer"
        initial={{transform: 'translateY(200px)', opacity: 0}}
        whileInView={{transform: 'translateY(0px)', opacity: 1}}
        >
            <motion.div
            className="textSection"
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{ type: "spring", stiffness: 50 }}
            >
                <h4>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</h4>

            </motion.div>
            <motion.div
            initial={{y: 140}}
            whileInView={{y: 0}}
            transition={{ type: "spring", stiffness: 50 }}
            className="buttonContainer"
            >
               <motion.div
               className="button"
               whileHover={{
                scale: 1.2,
                boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, .2)',
                borderRadius: '8px',
                transition: { duration: 0.3 },
              }}
              whileTap={{ 
                scale: 1.1,
                boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, .2)',
                }}
               >
                <span>Contact Us</span>

               </motion.div>
            </motion.div>

        </motion.div>
    )
}