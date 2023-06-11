import React, { useEffect } from "react";
import { motion } from "framer-motion";
//Components imports
import { Banner } from "./Banner/Banner";
import { Events } from "./Events.jsx/Events";
import { Footer } from "./Footer/Footer";

export function Home() {

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])

    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="homeContainer">
            <Banner/>
            <Events />
            <Footer/>
        </motion.div>
    )
}