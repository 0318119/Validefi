import React from "react";

import { motion } from "framer-motion";

const Button = ({ children, handleClick = null }) => {
  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
