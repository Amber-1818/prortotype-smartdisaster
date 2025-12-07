import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Truck, AlertCircle } from 'lucide-react';

const EmergencyDashboard = () => {
    const stats = [
        { label: 'Active Incidents', value: '12', icon: <AlertCircle color="#ff003c" />, color: '#ff003c' },
        { label: 'Rescue Teams', value: '08', icon: <Truck color="#00f0ff" />, color: '#00f0ff' },
        { label: 'Open Shelters', value: '05', icon: <HomeIcon color="#00ff66" />, color: '#00ff66' },
        { label: 'Affected People', value: '1.2k', icon: <Users color="#ffcc00" />, color: '#ffcc00' },
    ];

    // Helper for missing icon
    function HomeIcon({ color }) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        );
    }

    return (
        <div style={{ padding: '20px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', color: '#fff' }}>SITUATION REPORT</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff003c', animation: 'pulse 1s infinite' }}></div>
                    <span style={{ fontSize: '10px', color: '#ff003c' }}>LIVE</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px 10px' }}
                    >
                        <div style={{ marginBottom: '12px' }}>{stat.icon}</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: stat.color, marginBottom: '4px' }}>{stat.value}</div>
                        <div style={{ fontSize: '12px', color: '#aaa' }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass-card"
                style={{ marginTop: '24px' }}
            >
                <h3 style={{ fontSize: '14px', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={16} color="#00f0ff" />
                    Recent Activity
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                        { time: '10:42 AM', msg: 'Team Alpha deployed to Zone B' },
                        { time: '10:38 AM', msg: 'Flood warning level raised' },
                        { time: '10:30 AM', msg: 'Shelter #4 opened at City Hall' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
                            <span style={{ color: '#00f0ff', minWidth: '60px' }}>{item.time}</span>
                            <span style={{ color: '#ccc' }}>{item.msg}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default EmergencyDashboard;
