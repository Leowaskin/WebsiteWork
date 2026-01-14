import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} NIYYAH Hub. All rights reserved.</p>
                <p>Everything starts with an Intention.</p>
            </div>
        </footer>
    );
};

export default Footer;
