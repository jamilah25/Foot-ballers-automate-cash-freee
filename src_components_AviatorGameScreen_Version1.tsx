import React, { useState, useEffect } from 'react';
import AviatorBetForm from './AviatorBetForm';

const AviatorGameScreen: React.FC = () => {
  const [crashPoint, setCrashPoint] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  // Poll backend for current crash point and game status (replace with websocket for real-time later)
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/aviator/status')
        .then(res => res.json())
        .then(data => {
          setCrashPoint(data.crashPoint);
          setIsRunning(data.isRunning);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startGame = async () => {
    await fetch('/aviator/start', { method: 'POST' });
  };

  return (
    <div>
      <div>
        <strong>Crash Point:</strong> {crashPoint ?? 'Waiting...'}
      </div>
      <div>
        <strong>Status:</strong> {isRunning ? 'Running' : 'Waiting'}
      </div>
      {!isRunning && (
        <button onClick={startGame}>Start Game</button>
      )}
      <AviatorBetForm isRunning={isRunning} />
    </div>
  );
};

export default AviatorGameScreen;