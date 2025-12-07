import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';
import '../index.css';

const MobileFrame = ({ children }) => {
    const frameStyle = {
        position: 'relative',
        width: '375px',
        height: '812px',
        backgroundColor: '#000',
        borderRadius: '40px',
        border: '12px solid #1f2937',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        margin: 'auto',
    };

    const statusBarStyle = {
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
    };

    const notchStyle = {
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
    };

    const contentStyle = {
        width: '100%',
        height: '100%',
        paddingTop: '48px',
        paddingBottom: '32px',
        backgroundColor: '#050510',
        position: 'relative',
        overflowY: 'auto',
    };

    const homeIndicatorStyle = {
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
    };

    return (
        <div style={frameStyle}>
            {/* Status Bar */}
            <div style={statusBarStyle}>
                <span>9:41</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Signal size={14} />
                    <Wifi size={14} />
                    <Battery size={14} />
                </div>
            </div>

            {/* Notch */}
            <div style={notchStyle}></div>

            {/* Content */}
            <div style={contentStyle}>
                {children}
            </div>

            {/* Home Indicator */}
            <div style={homeIndicatorStyle}></div>
        </div>
    );
};

export default MobileFrame;
