import React from 'react';
import Button from './Button';
import Reveal from './Reveal';

const Contact = () => {
    return (
        <section className="section contact-section" id="contact">
            <div className="container contact-container">
                <Reveal width="100%">
                    <h2>Be Part of the Journey</h2>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <div className="contact-methods">
                        <Button variant="primary" onClick={() => window.open('https://wa.me/971507866382', '_blank')}>
                            WhatsApp Us
                        </Button>
                        <Button variant="secondary" onClick={() => window.location.href = 'mailto:hello@niyyah-hub.com'}>
                            Email Us
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
