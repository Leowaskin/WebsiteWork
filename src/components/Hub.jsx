import React, { useState } from 'react';
import HubBlock from './HubBlock';
import HubModal from './HubModal';
import Reveal from './Reveal';

const hubData = [
    {
        title: "Baz",
        status: "locked",
        description: "A purpose-driven soda brand inspired by the legacy of Shaykh Abdul Qadir Jilani.",
        cta: "Click to learn more",
        image: "/assets/baz_soda_cans_1767794431200.png",
        details: [
            "A specially curated range of soda.",
            "The word ‘Baz’, which translates from Arabic/Kurdish into Falcon/Hawk (birds).",
            "Baz also services as a homage to Shaykh Abdul Qadir Jilani (who is commonly referred to as Baz, or Falcon, flying high and close to the sky) celebrating his legacy as a pivotal figure in Islamic history, often expressed through praise for his spiritual authority and scholarly contributions. This includes acknowledging his role in reviving the study of Islamic law, his deep connection to spiritual teachings like Tawhid (Oneness of Allah) and Tazkiyah (purification of the soul), and the widespread admiration for his saintly miracles and wisdom. His life is seen as a testament to humility, faith, and service to Allah, with his teachings continuing to inspire Muslims through the enduring wisdom he imparted.",
            "Shaykh Abdul Qadir famously stated ‘I looked into all types of righteous and good deeds and found none more virtuous than feeding the poor’. ‘If I had all of the world in my possession I would use all of it to feed the hungry’.",
            "Our NIYYAH is to spread the wisdom of Shaykh Abdul Qadir Jilani, gain market share and redirect profits earned on the vast amount of spending worldwide on carbonated drinks to feeding the needy."
        ]
    },
    {
        title: "Manna & Friends",
        status: "locked",
        description: "Ethical chocolate inspired by the gift of Manna. One for you, one donated.",
        image: "/assets/manna_chocolate_1767794453341.png",
        details: [
            "An exciting collaboration of authentic Manna wrapped in truly healthy chocolate.",
            "A gift inspired by the Heavens.",
            "For every chocolate bar we sell, we will donate one to those in need!",
            "Our chocolate is ethically and sustainably sourced!",
            "Our chocolate bars are made for sharing!",
            "Our NIYYAH is to share a gift inspired by the Heavens and feed those in need!",
            "Wrapper inscription: 'Made From Love — Manna & Friends — Made For Sharing'"
        ]
    },
    {
        title: "The Marriage Couch",
        status: "coming_soon",
        description: "Online marriage therapy based on Islamic principles, open to all.",
        image: "/assets/marriage_couch_1767794472197.png",
        details: [
            "Your online marriage therapists, coming soon!!!",
            "Based on Islamic Principles, Open to All!",
            "Addressing all marriage related questions and concerns in a funny yet serious manner",
            "Trusted advice for everyone as we all need someone to talk to",
            "Our NIYYAH is to help everyone find a happy and healthy relationship, to give hope and make people happy!"
        ]
    },
    {
        title: "Niyyah: Wear Your Intention",
        status: "live",
        description: "A clothing brand for like-hearted individuals to find their people.",
        image: "/assets/niyyah_wear_1767794490246.png",
        details: [
            "NIYYAH: Wear Your Intention",
            "1) Make Your Intention",
            "2) Choose Your Design",
            "3) Find Your People",
            "A clothing brand for like hearted individuals to find each other and build real relationships.",
            "Specially made apparel in Relaxed Fit with NIYYAH/Intention related Branding.",
            "Our NIYYAH is to design a clothing brand for like hearted individuals to find each other and build real life meaningful relationships."
        ]
    },
    {
        title: "NIYYAH X Frankincense",
        status: "live",
        description: "Frankincense honey and loban inspired by Omani heritage and Sunnah.",
        image: "/assets/frankincense_set_1767794504182.png",
        details: [
            "A dedication to the historical Frankincense trees of Oman.",
            "Frankincense holds immense cultural significance in Oman. It has been an integral part of Omani culture, tradition, and religious practices.",
            "Our NIYYAH is to distribute Frankincense inspired products which have great benefit:",
            "1. Frankincense Honey: Harvested directly from the farm, raw, organic and unfiltered. Ensuring all the best properties from the Bee, natural healing and immune boosting. Each batch is tested to ensure purity and results available for inspection.",
            "From the Sunnah* of Prophet Muhammed (peace and blessings be upon him), he would drink honey with warm (not boiling) water early in the morning on an empty stomach.",
            "2. Frankincense Loban: Authentic Omani Frankincense resin (loban) to be burned on charcoal burners, cleansing the air and creating a pleasant environment. Clean your environment from all types of negative energy.",
            "*Sunnah means the way of the Prophet Muhammad (peace and blessings be upon him). It includes everything he said, did, and approved of.",
            "We know the Sunnah from the statements (referred to as ‘Hadith’) that have been handed down from the Companions of the Prophet. Islamic Law is taken from the Qur'an and Sunnah."
        ]
    },
    {
        title: "NIYYAH X Rose Otto",
        status: "live",
        description: "Rare Rose Otto oil, summarised poetically and visually.",
        image: "/assets/rose_otto_oil_1767794520486.png",
        details: [
            "Often referred to as the 'liquid gold' of essential oils, derived from the petals of the renowned Damask rose.",
            "A labor of love: It takes approximately 10,000 pounds of handpicked petals, harvested in the early morning, to produce just one pound of this precious oil.",
            "Our Inspiration: A story told in verse, mentioning 'roses steal their scent from you' — referring to the beautiful scent of Prophet Muhammad (peace and blessings be upon him).",
            "Our NIYYAH is to share this journey of finding the best Rose Otto in the world with you."
        ]
    },
    {
        title: "Amama by NIYYAH",
        status: "live",
        description: "A modern Turkish Amama inspired by the Sunnah.",
        image: "/assets/amama_turban_1767794538992.png",
        details: [
            "The Amama (Islamic turban) is a symbol of honor, knowledge, spirituality, and adherence to the Sunnah* of the beloved Prophet Muhammad (peace and blessings be upon him).",
            "Wearing this headgear symbolizes authority, honor and strength.",
            "The headwear for men typically consists of two portions. The first portion is the solid cap while the second portion is the outer cloth wrap.",
            "Prophet Muhammad said regarding the Amama: ‘It is a crown worn by the righteous - Prophets, Saints, Scholars, and even the Angels.’",
            "Amama by Niyyah, is a modern and contemporary version made in Turkey.",
            "Whether you are wearing it daily, for Jumu'ah, or on special religious occasions, our NIYYAH (Intention) is to give you an opportunity to practice this Blessed Sunnah, bringing immense blessings into your life.",
            "*Sunnah means the way of the Prophet Muhammad (peace and blessings be upon him). It includes everything he said, did, and approved of. We know the Sunnah from the statements (referred to as ‘Hadith’) that have been handed down from the Companions of the Prophet. Islamic Law is taken from the Qur'an and Sunnah."
        ]
    }
];

// ... (keep styles import if converting to styled-components, or use css file)

const Hub = () => {
    const [selectedBlock, setSelectedBlock] = useState(null);

    const handleBlockClick = (block) => {
        if (block.details) {
            setSelectedBlock(block);
        }
    };

    return (
        <section className="section hub-section" id="hub">
            <div className="container">
                <Reveal width="100%">
                    <h2 className="section-title">The Hub</h2>
                </Reveal>
                <div className="hub-grid">
                    {hubData.map((block, index) => (
                        <HubBlock
                            key={index}
                            block={block}
                            index={index}
                            onClick={() => handleBlockClick(block)}
                        />
                    ))}
                </div>
            </div>
            <HubModal
                isOpen={!!selectedBlock}
                onClose={() => setSelectedBlock(null)}
                block={selectedBlock}
            />
        </section>
    );
};

export default Hub;
