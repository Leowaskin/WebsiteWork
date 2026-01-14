import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './Reveal';

const TypingText = ({ text, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: () => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "inline-block" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

const Philosophy = () => {
    return (
        <section className="section philosophy-section" id="philosophy">
            <div className="container">
                <div className="philosophy-content">
                    <Reveal width="100%">
                        <h3>Our Philosophy</h3>
                    </Reveal>

                    <div className="philosophy-points">
                        <div className="philosophy-line">
                            <TypingText text="NIYYAH means intention and purpose." delay={0.2} />
                        </div>
                        <div className="philosophy-line">
                            <TypingText text="Every action can become worship with the right intention." delay={1.5} />
                        </div>
                        <div className="philosophy-line">
                            <TypingText text="We exist to serve mankind and create meaningful impact beyond profit." delay={3.5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
