import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FinalScreen = () => {
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <Heart size={60} color="#ff003c" fill="#ff003c" style={{ filter: 'drop-shadow(0 0 15px #ff003c)' }} />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    marginTop: '24px',
                    fontSize: '24px',
                    color: '#fff',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
            >
                S-DARS
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                    marginTop: '8px',
                    fontSize: '16px',
                    color: '#00f0ff',
                    letterSpacing: '1px'
                }}
            >
                Saving Lives with Technology
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    marginTop: '40px',
                    fontSize: '12px',
                    color: '#aaa',
                    borderTop: '1px solid #333',
                    paddingTop: '20px',
                    width: '80%'
                }}
            >
                Prototype Demo<br />
                <span style={{ color: '#fff', fontWeight: 'bold' }}>Java + Spring Boot</span>
            </motion.div>
        </div>
    );
};

export default FinalScreen;
