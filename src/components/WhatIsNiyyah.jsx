import React from 'react';
import Reveal from './Reveal';
import '../styles/what-is-niyyah.css';

const WhatIsNiyyah = () => {
    const cards = [
        {
            title: "Meaning",
            text: "The word \"NIYYAH\" translates to \"intention\" or \"purpose\"."
        },
        {
            title: "Role in Islam",
            text: "It is the sincere and inner resolve to perform an act for the sake of God Almighty, not just a spoken phrase."
        },
        {
            title: "Significance",
            text: "With the right NIYYAH, everyday tasks like working or chores can become acts of worship, and one can gain rewards for actions they already perform."
        }
    ];

    return (
        <section className="section what-is-niyyah-section">
            <div className="container">
                <Reveal width="100%">
                    <h2 className="section-title">What is NIYYAH?</h2>
                </Reveal>

                <div className="niyyah-grid">
                    {cards.map((card, index) => (
                        <Reveal key={index} width="100%" delay={index * 0.2}>
                            <div className="niyyah-card">
                                <h3 className="niyyah-card-title">{card.title}</h3>
                                <p className="niyyah-card-text">{card.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsNiyyah;
