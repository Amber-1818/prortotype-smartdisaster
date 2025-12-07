import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, AlertTriangle, Wind, Droplets } from 'lucide-react';

const HomeDashboard = () => {
    return (
        <div style={{ padding: '20px', height: '100%', color: 'white' }}>
            {/* Header Location */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}
            >
                <MapPin size={16} color="#00f0ff" style={{ marginRight: '8px' }} />
                <span style={{ fontSize: '14px', color: '#ccc' }}>Kerala, India</span>
            </motion.div>

            {/* Main Alert Circle */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                <motion.div
                    animate={{
                        boxShadow: ['0 0 20px rgba(255, 0, 60, 0.2)', '0 0 50px rgba(255, 0, 60, 0.6)', '0 0 20px rgba(255, 0, 60, 0.2)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '4px solid #ff003c',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(255, 0, 60, 0.1)',
                        position: 'relative'
                    }}
                >
                    <AlertTriangle size={48} color="#ff003c" style={{ marginBottom: '8px' }} />
                    <h2 style={{ fontSize: '24px', color: '#ff003c' }}>HIGH RISK</h2>
                    <span style={{ fontSize: '12px', color: '#aaa', marginTop: '4px' }}>FLOOD ALERT</span>

                    {/* Rotating ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            borderTop: '2px solid #ff003c',
                            borderRight: '2px solid transparent',
                            borderBottom: '2px solid transparent',
                            borderLeft: '2px solid transparent',
                        }}
                    />
                </motion.div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card"
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Droplets size={20} color="#00f0ff" />
                        <span style={{ marginLeft: '8px', fontSize: '12px', color: '#aaa' }}>Water Level</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>8.5 ft</div>
                    <div style={{ fontSize: '10px', color: '#ff003c' }}>▲ Rising Fast</div>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card"
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Wind size={20} color="#ffcc00" />
                        <span style={{ marginLeft: '8px', fontSize: '12px', color: '#aaa' }}>Wind Speed</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>45 km/h</div>
                    <div style={{ fontSize: '10px', color: '#ffcc00' }}>Moderate</div>
                </motion.div>
            </div>

            {/* Action Button */}
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="btn-primary"
                style={{ width: '100%', marginTop: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
            >
                VIEW LIVE MAP
            </motion.button>
        </div>
    );
};

export default HomeDashboard;
