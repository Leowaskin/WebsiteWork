import React from 'react';
import Button from './Button';
import Reveal from './Reveal';

const Hero = () => {
    return (
        <section className="section hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <Reveal width="100%">
                        <h1 className="hero-headline">NIYYAH the Hub</h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <h2 className="hero-subheadline">Everything starts with an Intention</h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.6}>
                        <p className="hero-description">
                            A modern hub built around purpose, service to humanity, and meaningful connection.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.8}>
                        <div className="hero-actions">
                            <Button variant="primary">Explore the Hub</Button>
                            <Button variant="secondary">Join Our Journey</Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
