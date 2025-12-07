import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Send, CheckCircle } from 'lucide-react';

const SOSTrigger = () => {
    const [sent, setSent] = useState(false);

    const handleSOS = () => {
        setSent(true);
    };

    return (
        <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {!sent ? (
                <>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ fontSize: '24px', color: '#fff', marginBottom: '40px', textAlign: 'center' }}
                    >
                        EMERGENCY SOS
                    </motion.h2>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSOS}
                        className="btn-danger"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        SOS
                    </motion.button>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ marginTop: '40px', color: '#aaa', textAlign: 'center', fontSize: '14px' }}
                    >
                        Tap to alert nearby rescue teams and share your live location.
                    </motion.p>
                </>
            ) : (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    >
                        <CheckCircle size={80} color="#00ff66" style={{ marginBottom: '24px' }} />
                    </motion.div>

                    <h2 style={{ fontSize: '24px', color: '#00ff66', marginBottom: '16px' }}>SOS SENT</h2>
                    <p style={{ color: '#fff', marginBottom: '8px' }}>Rescue Team Notified</p>
                    <p style={{ color: '#aaa', fontSize: '12px' }}>Location Shared: 10.8505° N, 76.2711° E</p>

                    <div style={{ marginTop: '40px', width: '100%' }}>
                        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <PhoneCall size={24} color="#00f0ff" />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '12px', color: '#aaa' }}>Connecting to</div>
                                <div style={{ fontWeight: 'bold' }}>Control Room</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default SOSTrigger;
