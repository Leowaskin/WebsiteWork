import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components.css';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    return (
        <motion.button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
