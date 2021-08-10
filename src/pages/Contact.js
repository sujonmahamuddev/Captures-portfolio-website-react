import React from 'react'
//Animation

import {motion} from 'framer-motion';
import { pageAnimation } from '../animations';

const Contact = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h1>Contact</h1>
    </motion.div>
  )
}

export default Contact
