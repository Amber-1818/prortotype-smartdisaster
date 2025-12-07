import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Droplets, TrendingUp, AlertOctagon } from 'lucide-react';

const FloodAlert = () => {
    const cards = [
        { title: 'Water Discharge', value: '45,000 cusecs', icon: <Droplets color="#00f0ff" />, color: '#00f0ff' },
        { title: 'Risk Level', value: 'CRITICAL', icon: <AlertOctagon color="#ff003c" />, color: '#ff003c' },
        { title: 'Rainfall Intensity', value: '120 mm/hr', icon: <CloudRain color="#ffcc00" />, color: '#ffcc00' },
        { title: 'River Status', value: 'Overflowing', icon: <TrendingUp color="#ff003c" />, color: '#ff003c' },
    ];

    return (
        <div style={{ padding: '20px', height: '100%' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#fff' }}>FLOOD MONITOR</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                        className="glass-card"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                {card.icon}
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#aaa' }}>{card.title}</div>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: card.color }}>{card.value}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '30px', padding: '16px', background: 'rgba(255, 204, 0, 0.1)', border: '1px solid #ffcc00', borderRadius: '12px' }}
            >
                <h3 style={{ fontSize: '14px', color: '#ffcc00', marginBottom: '8px' }}>⚠️ ADVISORY</h3>
                <p style={{ fontSize: '12px', color: '#ddd', lineHeight: '1.4' }}>
                    Heavy rainfall expected to continue for next 4 hours. Residents in low-lying areas should evacuate immediately.
                </p>
            </motion.div>
        </div>
    );
};

export default FloodAlert;
