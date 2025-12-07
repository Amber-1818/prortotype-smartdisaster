import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const Intro = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(180deg, #050510 0%, #0a0a2e 100%)',
            padding: '20px'
        }}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
            >
                <ShieldAlert size={80} color="#00f0ff" style={{ filter: 'drop-shadow(0 0 15px #00f0ff)' }} />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    marginTop: '24px',
                    fontSize: '28px',
                    color: '#fff',
                    textShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                }}
            >
                SMART DISASTER<br />ALERT & RESCUE<br />SYSTEM
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{
                    marginTop: '16px',
                    fontSize: '14px',
                    color: '#aaa',
                    letterSpacing: '1px'
                }}
            >
                Real-time Alerts • Safe Zones • SOS Rescue
            </motion.p>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    height: '2px',
                    background: '#00f0ff',
                    marginTop: '30px',
                    boxShadow: '0 0 10px #00f0ff'
                }}
            />
        </div>
    );
};

export default Intro;
