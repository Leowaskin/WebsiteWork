import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => {
    return (
        <div className="ambient-background">
            <motion.div
                className="blob blob-1"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-2"
                animate={{
                    x: [0, -80, 40, 0],
                    y: [0, 60, -80, 0],
                    scale: [1, 1.3, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 5
                }}
            />
            <motion.div
                className="blob blob-3"
                animate={{
                    x: [0, 60, -90, 0],
                    y: [0, -40, 50, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
            />
            <div className="noise-overlay" />
        </div>
    );
};

export default AmbientBackground;
