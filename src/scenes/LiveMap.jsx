import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Home } from 'lucide-react';

const LiveMap = () => {
    return (
        <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
            {/* Map Background (Simulated) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#0f172a',
                backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                {/* Roads/Rivers simulation */}
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.3 }}>
                    <path d="M-10 100 Q 100 50 200 150 T 400 100" stroke="#334155" strokeWidth="20" fill="none" />
                    <path d="M50 800 Q 150 600 100 400 T 300 0" stroke="#334155" strokeWidth="15" fill="none" />
                    <path d="M0 300 Q 200 350 400 250" stroke="#0ea5e9" strokeWidth="10" fill="none" /> {/* River */}
                </svg>
            </div>

            {/* Danger Zones */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '20%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255,0,60,0.8) 0%, rgba(255,0,60,0) 70%)',
                    borderRadius: '50%',
                }}
            />

            {/* Markers */}
            {/* User Location */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                <div style={{ position: 'relative' }}>
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            top: -10,
                            left: -10,
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: 'rgba(0, 240, 255, 0.5)',
                        }}
                    />
                    <Navigation size={24} fill="#00f0ff" color="#00f0ff" />
                </div>
            </motion.div>

            {/* Rescue Center */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ position: 'absolute', top: '20%', right: '20%' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Home size={24} fill="#00ff66" color="#00ff66" />
                    <span style={{ fontSize: '10px', background: 'rgba(0,0,0,0.7)', padding: '2px 4px', borderRadius: '4px', marginTop: '4px' }}>Safe Zone</span>
                </div>
            </motion.div>

            {/* Danger Marker */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ position: 'absolute', bottom: '30%', left: '20%' }}
            >
                <MapPin size={24} fill="#ff003c" color="#ff003c" />
            </motion.div>

            {/* Controls Overlay */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.8)', color: 'white', border: '1px solid #333' }}>+</button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.8)', color: 'white', border: '1px solid #333' }}>-</button>
            </div>

            <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', padding: '8px 12px', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ fontSize: '12px', color: '#aaa' }}>LIVE TRACKING</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff003c' }}></div>
                    <span style={{ fontSize: '10px' }}>Flood Zone</span>
                </div>
            </div>
        </div>
    );
};

export default LiveMap;
