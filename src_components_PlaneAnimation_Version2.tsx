import React, { useEffect, useRef } from 'react';

interface PlaneAnimationProps {
  currentCrash: number;
  crashed: boolean;
}

const PlaneAnimation: React.FC<PlaneAnimationProps> = ({ currentCrash, crashed }) => {
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (planeRef.current) {
      const posX = Math.min(currentCrash * 40, 600); // animate left-right max 600px
      const posY = crashed ? 400 : Math.max(100 - currentCrash * 15, 20); // crash goes down
      planeRef.current.style.transform = `translate(${posX}px, ${posY}px)`;
      planeRef.current.style.transition = crashed ? 'transform 0.7s' : 'transform 0.1s';
    }
  }, [currentCrash, crashed]);

  return (
    <div style={{ width: 600, height: 400, position: 'relative', background: '#cee' }}>
      <div
        ref={planeRef}
        style={{
          position: 'absolute',
          width: 40,
          height: 40,
          top: 20,
          left: 0,
        }}
      >
        {/* Simple SVG plane */}
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon points="0,20 35,10 35,30" fill={crashed ? "#e74c3c" : "#2c3e50"} />
          <rect x="30" y="17" width="10" height="6" fill="#2ecc71" />
        </svg>
      </div>
      {crashed && (
        <div style={{
          position: 'absolute', left: 240, top: 160,
          fontSize: "2em", color: "#e74c3c", fontWeight: "bold"
        }}>
          💥 CRASHED!
        </div>
      )}
    </div>
  );
};

export default PlaneAnimation;