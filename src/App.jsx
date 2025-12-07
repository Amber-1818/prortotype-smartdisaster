import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldAlert, MapPin, AlertTriangle, Wind, Droplets, Navigation, Home, MapPin as MapPinIcon, PhoneCall, CheckCircle, Activity, Users, Truck, AlertCircle, Heart, Battery, Signal, Wifi } from 'lucide-react';

// Mobile Frame Component
const MobileFrame = ({ children }) => (
  <div style={{
    position: 'relative',
    width: '375px',
    height: '812px',
    backgroundColor: '#000',
    borderRadius: '40px',
    border: '12px solid #1f2937',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    margin: 'auto',
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      zIndex: 50,
      color: 'white',
      fontSize: '12px',
      fontWeight: 500,
    }}>
      <span>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
    <div style={{
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '160px',
      height: '28px',
      backgroundColor: '#000',
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px',
      zIndex: 50,
    }}></div>
    <div style={{
      width: '100%',
      height: '100%',
      paddingTop: '48px',
      paddingBottom: '32px',
      backgroundColor: '#050510',
      position: 'relative',
      overflowY: 'auto',
    }}>
      {children}
    </div>
    <div style={{
      position: 'absolute',
      bottom: '8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '128px',
      height: '4px',
      backgroundColor: 'white',
      borderRadius: '9999px',
      opacity: 0.5,
      zIndex: 50,
    }}></div>
  </div>
);

// Scene 1: Intro
const Intro = () => (
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
        textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '1px'
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

// Scene 2: Home Dashboard
const HomeDashboard = () => (
  <div style={{ padding: '20px', height: '100%', color: 'white' }}>
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}
    >
      <MapPin size={16} color="#00f0ff" style={{ marginRight: '8px' }} />
      <span style={{ fontSize: '14px', color: '#ccc' }}>Kerala, India</span>
    </motion.div>
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
      </motion.div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '16px',
        }}
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
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Wind size={20} color="#ffcc00" />
          <span style={{ marginLeft: '8px', fontSize: '12px', color: '#aaa' }}>Wind Speed</span>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>45 km/h</div>
        <div style={{ fontSize: '10px', color: '#ffcc00' }}>Moderate</div>
      </motion.div>
    </div>
  </div>
);

// Scene 3: SOS Trigger
const SOSTrigger = () => {
  const [sent, setSent] = useState(false);
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
            onClick={() => setSent(true)}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff003c, #ff4444)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 0 20px #ff003c',
            }}
          >
            SOS
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '40px', color: '#aaa', textAlign: 'center', fontSize: '14px' }}
          >
            Tap to alert nearby rescue teams
          </motion.p>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <CheckCircle size={80} color="#00ff66" style={{ marginBottom: '24px' }} />
          <h2 style={{ fontSize: '24px', color: '#00ff66', marginBottom: '16px' }}>SOS SENT</h2>
          <p style={{ color: '#fff', marginBottom: '8px' }}>Rescue Team Notified</p>
          <p style={{ color: '#aaa', fontSize: '12px' }}>Location Shared: 10.8505° N, 76.2711° E</p>
        </motion.div>
      )}
    </div>
  );
};

// Scene 4: Final Screen
const FinalScreen = () => (
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

// Main App
function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const scenes = [<Intro />, <HomeDashboard />, <SOSTrigger />, <FinalScreen />];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') setCurrentScene((prev) => Math.min(prev + 1, scenes.length - 1));
      if (e.key === 'ArrowLeft') setCurrentScene((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scenes.length]);

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        <div style={{ position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 100 }}>
          <button onClick={() => setCurrentScene(p => Math.max(p - 1, 0))} style={{ background: 'rgba(0,240,255,0.2)', border: '1px solid #00f0ff', color: '#00f0ff', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' }}>← Prev</button>
          <button onClick={() => setCurrentScene(p => Math.min(p + 1, scenes.length - 1))} style={{ background: 'rgba(0,240,255,0.2)', border: '1px solid #00f0ff', color: '#00f0ff', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' }}>Next →</button>
        </div>
      </MobileFrame>
    </div>
  );
}

export default App;
