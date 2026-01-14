import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import '../styles/modal.css';

const HubModal = ({ isOpen, onClose, block }) => {
    if (!block) return null;

    const { title, image, details } = block;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-container"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="modal-content-wrapper">
                            <div className="modal-image-column">
                                <img src={image} alt={title} className="modal-image" />
                                <div className="modal-image-overlay" />
                            </div>

                            <div className="modal-text-column">
                                <h3 className="modal-title">{title}</h3>
                                <div className="modal-body">
                                    {details.map((paragraph, index) => (
                                        <p key={index} className="modal-paragraph">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HubModal;
