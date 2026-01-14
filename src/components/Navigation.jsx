import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navigation ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-container">
                <div className="logo">NIYYAH</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#hub">The Hub</a></li>
                    <li><a href="#philosophy">Our NIYYAH</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="#contact" className="nav-cta">Be Part of the Journey</a>
            </div>
        </motion.nav>
    );
};

export default Navigation;
