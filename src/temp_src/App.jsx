import React, { useState, useEffect } from 'react';
import MobileFrame from './components/MobileFrame';
import { AnimatePresence, motion } from 'framer-motion';

import Intro from './scenes/Intro';
import HomeDashboard from './scenes/HomeDashboard';
import LiveMap from './scenes/LiveMap';
import FloodAlert from './scenes/FloodAlert';
import SOSTrigger from './scenes/SOSTrigger';
import EmergencyDashboard from './scenes/EmergencyDashboard';
import FinalScreen from './scenes/FinalScreen';

const App = () => {
    const [currentScene, setCurrentScene] = useState(0);

    const scenes = [
        <Intro key="intro" />,
        <HomeDashboard key="home" />,
        <LiveMap key="map" />,
        <FloodAlert key="flood" />,
        <SOSTrigger key="sos" />,
        <EmergencyDashboard key="emergency" />,
        <FinalScreen key="final" />,
    ];

    // Auto-advance scenes for testing (optional, can be manual)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
            } else if (e.key === 'ArrowLeft') {
                setCurrentScene((prev) => Math.max(prev - 1, 0));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [scenes.length]);

    return (
        <MobileFrame>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentScene}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ height: '100%', width: '100%' }}
                >
                    {scenes[currentScene]}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls (Hidden in final demo, useful for dev) */}
            <div style={{ position: 'absolute', bottom: 10, left: 10, zIndex: 100, opacity: 0.5 }}>
                <button onClick={() => setCurrentScene(p => Math.max(p - 1, 0))} style={{ color: 'white', marginRight: 10 }}>Prev</button>
                <button onClick={() => setCurrentScene(p => Math.min(p + 1, scenes.length - 1))} style={{ color: 'white' }}>Next</button>
            </div>
        </MobileFrame>
    );
};

export default App;
