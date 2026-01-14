import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import '../styles/hub.css';

const HubBlock = ({ block, index = 0, onClick }) => {
    const { title, status, description, cta, image } = block;
    const [imageLoaded, setImageLoaded] = useState(false);

    const isLocked = status === 'locked';
    const isLive = status === 'live';

    // Generate random values once for stable animation
    const [animationProps] = useState(() => ({
        duration: 3 + Math.random(),
        delay: Math.random() * 2
    }));

    return (
        <motion.div
            className={`hub-block hub-block-${status}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={!isLocked || block.details ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' } : {}}
            onClick={onClick}
            style={{ cursor: block?.details ? 'pointer' : 'default' }}
        >
            <motion.div
                className="hub-block-inner"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: animationProps.duration, // Randomize slightly for organic feel
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: animationProps.delay // Random start
                }}
                style={{ width: '100%', height: '100%' }}
            >
                <div className="hub-block-image-container">
                    {image && (
                        <motion.img
                            src={image}
                            alt={title}
                            className="hub-block-image"
                            initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
                            animate={imageLoaded ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            onLoad={() => setImageLoaded(true)}
                        />
                    )}
                    {isLocked && <div className="hub-block-overlay locked" />}
                </div>

                <div className="hub-block-content">
                    <h3 className="hub-block-title">{title}</h3>
                    <p className="hub-block-description">{description}</p>

                    {isLocked && (
                        <div className="hub-lock-indicator">
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Lock className="lock-icon" size={20} />
                            </motion.div>
                            <span className="lock-text">Coming Soon</span>
                        </div>
                    )}

                    {status === 'coming_soon' && (
                        <span className="status-badge status-coming-soon">Coming Soon</span>
                    )}

                    {isLive && cta && (
                        <div className="hub-cta">
                            <span>{cta}</span>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HubBlock;
